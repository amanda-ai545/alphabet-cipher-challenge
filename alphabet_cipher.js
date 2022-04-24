const encode = (s, t) => {
  const ascii = "a".charCodeAt(0);
  let cipher = "";

  for (let i = 0, j = 0; i < s.length; i++) {
    let currentLetter = s[i].toLowerCase();

    let x = ((currentLetter.charCodeAt() - ascii) + (t[j%t.length].toLowerCase().charCodeAt() - ascii)) % 26;
    cipher += String.fromCharCode(x + ascii);
    j++;
  }
  return cipher;
};

module.exports = encode;
