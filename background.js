// This file was copy/pasted from https://developer.chrome.com/extensions/examples/extensions/no_cookies/background.js

"use strict";

// Simple extension to remove 'Cookie' request header and 'Set-Cookie' response header.

const targetUrls = [
  "*://medium.com/*",
  "*://towardsdatascience.com/*",
  "*://*.towardsdatascience.com/*",
  "*://gitconnected.com/*",
  "*://*.gitconnected.com/*"
]

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
    removeHeader(details.requestHeaders, "cookie");
    return { requestHeaders: details.requestHeaders };
  },
  // filters
  {
    urls: Array.from(targetUrls),
  },
  // extraInfoSpec
  ["blocking", "requestHeaders", "extraHeaders"]
);

const removeHeader = (headers, name) => {
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() == name) {
      console.log('Removing "' + name + '" header.');
      headers.splice(i, 1);
      break;
    }
  }
};
