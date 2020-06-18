console.log("Enhanced Medium viewer initialized");
const targetDomains = new Set(["medium.com"]);

let currentUrl = window.location.toString();

console.log(`Current URL: ${currentUrl}`);
for (targetUrl of targetDomains) {
  if (currentUrl.includes(targetUrl)) {
      console.log("Detected that the browser is surfing a cookie deletion target website");
      deleteCookies(currentUrl);
      break;
  }
}

// Pasted from https://stackoverflow.com/a/33366171
const deleteCookies = currentUrl => {
  var cookies = document.cookie.split("; ");
  for (var c = 0; c < cookies.length; c++) {
    var d = currentUrl.split(".");
    while (d.length > 0) {
      var cookieBase =
        encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
        "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" +
        d.join(".") +
        " ;path=";
      var p = location.pathname.split("/");
      document.cookie = cookieBase + "/";
      while (p.length > 0) {
        document.cookie = cookieBase + p.join("/");
        p.pop();
      }
      d.shift();
    }
  }
  console.log("Deleted cookies");
};
