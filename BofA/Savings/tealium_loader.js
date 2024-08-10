window.utag_data = {};
window.bactm_envSelector = bactm_getTMEnvBasedOnHostname();
function bactm_getTMEnvBasedOnHostname(hostname) {
  var env = "prod",
    hostname = hostname || window.location.hostname,
    hostnameParts = hostname.split("."),
    notprodIndicators = [
      "localhost"
    ],
    indicatorsLen = notprodIndicators.length;
  for (var i = 0, partsLen = hostnameParts.length; i < partsLen; i++) {
    if (env === "notprod") break;
    var part = hostnameParts[i];
    for (var j = 0; j < indicatorsLen; j++) {
      var indicator = notprodIndicators[j];
      if (part.indexOf(indicator) > -1) {
        env = "notprod";
        break;
      }
    }
  }
  return env;
}
(function(a, b, c, d) {
  a = "//tags.tiqcdn.com/utag/bofa/main/" + bactm_envSelector + "/utag.js";
  b = document;
  c = "script";
  d = b.createElement(c);
  d.src = a;
  d.type = "text/java" + c;
  d.async = true;
  a = b.getElementsByTagName(c)[0];
  a.parentNode.insertBefore(d, a);
})();