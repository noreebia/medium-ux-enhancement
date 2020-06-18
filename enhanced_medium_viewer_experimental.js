console.log("Enhanced Medium viewer initialized");
const targetDomains = new Set(["medium.com"]);

let currentUrl = window.location.toString();

for (targetUrl of targetDomains) {
  if (currentUrl.includes(targetUrl)) {
      console.log("Detected that the browser is surfing a cookie deletion target website");
      deleteCookies(currentUrl);
      break;
  }
}

function removeCookiesForDomain(domain) {
  cache.getCookies(domain).forEach(function(cookie) {
    removeCookie(cookie);
  });
}