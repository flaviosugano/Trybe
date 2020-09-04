const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('Testing uppercase function', () => {
  it('if retrives an uppercase string', () => {
    uppercase('xablau', (strUpperCased) => {
      expect(strUpperCased).toBe('XABLAU');
    })
  })
});
