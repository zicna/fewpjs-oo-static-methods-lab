class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s:]+/g, "");
  }

  static titleize(string) {
    // const rg = /\bthe\b|\ba\b|\ban\b|\bfrom\b|\bbut\b|\bof\b|\band\b|\bfor\b|\bat\b|\bby\b|\bof\b/g;
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    // console.log( rg.test("the"))
    return string
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) return Formatter.capitalize(word);
        else return word;
      })
      .join(" ");
  }
}
// console.log(Formatter.titleize("getting the giggles"))
