// This file was copy/pasted from https://developer.chrome.com/extensions/examples/extensions/no_cookies/background.js

"use strict";

// Simple extension to remove 'Cookie' request header and 'Set-Cookie' response header.

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
    removeHeader(details.requestHeaders, "cookie");
    return { requestHeaders: details.requestHeaders };
  },
  // filters
  {
    urls: [
      "*://medium.com/*",
      "*://towardsdatascience.com/*",
      "*://*.towardsdatascience.com/*",
    ],
  },
  // extraInfoSpec
  ["blocking", "requestHeaders", "extraHeaders"]
);

// chrome.webRequest.onHeadersReceived.addListener(
//   function(details) {
//     removeHeader(details.responseHeaders, 'set-cookie');
//     return {responseHeaders: details.responseHeaders};
//   },
//   // filters
//   {urls: ['https://*/*', 'http://*/*']},
//   // extraInfoSpec
//   ['blocking', 'responseHeaders', 'extraHeaders']);

removeHeader = (headers, name) => {
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() == name) {
      console.log('Removing "' + name + '" header.');
      headers.splice(i, 1);
      break;
    }
  }
};
