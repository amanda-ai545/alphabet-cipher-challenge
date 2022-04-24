const encode = require('./alphabet_cipher');

test("encodes empty string with empty string", () => {
    expect(encode("", "")).toBe("")
});

test("encodes meetmebythetree with scones", () => {
    expect(encode("meetmebythetree", "scones")).toBe("egsgqwtahuiljgs")
});

test("encodes meetmeontuesdayeveningatseven with vigilance", () => {
    expect(encode("meetmeontuesdayeveningatseven", "vigilance")).toBe("hmkbxebpxpmyllyrxiiqtoltfgzzv")
});

test("encodes thequickbrownfoxjumpsoveralazydog with vigilance", () => {
    expect(encode("thequickbrownfoxjumpsoveralazydog", "vigilance")).toBe("opkyfipmfmwcvqoklyhxywgeecpvhelzg")
});

test("encodes hellofromrussia with abcabcx", () => {
    expect(encode("hellofromrussia", "abcabcx")).toBe("hfnlphoontutufa")
});

test("encodes hello with areallylongsecret", () => {
    expect(encode("hello", "areallylongsecret")).toBe("hvplz")
});
