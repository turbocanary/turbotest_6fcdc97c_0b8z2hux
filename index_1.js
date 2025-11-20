const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: generate a random suffix securely
  var suffix = crypto.randomBytes(4).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}