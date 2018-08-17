export class List {
  constructor() {
    this.listContent = [];
    this.container = this.items;
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
  }

  createContent () {
    const ol = document.createElement('ol');
    const textElem = document.createTextNode('List of issues:');
    ol.appendChild(textElem);

    for (let i = 0; i < this.listContent.length; i++) {
      ol.appendChild(elementLI(this.listContent[i]));
    }

    function elementLI(elem) {
      const li = document.createElement('li');
      const textElem = document.createTextNode(elem);
      li.appendChild(textElem);

      return li;
    }
    this.container = ol;
  }

  get items() {
    return this.listContent;
  }
  get content() {
    this.generateList();
    this.createContent();

    return this.container;
  }
}
