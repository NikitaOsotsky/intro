export class List {
  constructor(name, count) {
    this.count = count;
    this.listName = name;
    this.listContent = [];
  }
  generateList () {
    /**
     * first - min symbol code
     * second - max symbol code
     * @type {number[]}
     */
    const symbols = [65, 90];

    /**
     * count of words to generate
     * @type {number}
     */
    const wordsCount = Math.round(Math.random() * 100 + 100);


    for (let i = 1; i < wordsCount; i++) {
      const firstSymbol = String.fromCharCode(Math.round((symbols[0] + Math.random() * (symbols[1] - symbols[0]))));

      let word = firstSymbol;

      const symbolCount = Math.round(Math.random() * 12 + 3);
      for (let i = 1; i < symbolCount; i++) {
        word += String.fromCharCode(Math.round((symbols[0] + Math.random() * (symbols[1] - symbols[0])))).toLowerCase();
      }

      this.listContent.push(word);
    }

    console.log(this.listContent);
  }
}
