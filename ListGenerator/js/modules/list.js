export class List {
  constructor() {
    this.listContent = List.generateList();
    this.container = List.createContent(this.listContent);
  }

  static generateList () {
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
    const words = [];

    for (let i = 1; i < wordsCount; i++) {
      const firstSymbol = String.fromCharCode(Math.round((symbols[0] + Math.random() * (symbols[1] - symbols[0]))));

      let word = firstSymbol;

      const symbolCount = Math.round(Math.random() * 12 + 3);
      for (let i = 1; i < symbolCount; i++) {
        word += String.fromCharCode(Math.round((symbols[0] + Math.random() * (symbols[1] - symbols[0])))).toLowerCase();
      }

      words.push(word);
    }

    return words;
  }

  static createContent (listContent) {
    const ol = document.createElement('ol');
    ol.addEventListener('click', (evt) => {
      console.log(evt.target);
      evt.target.remove();
    });
    for (let i = 0; i < listContent.length; i++) {
      ol.appendChild(elementLI(listContent[i]));
    }
    function elementLI(elem) {
      const li = document.createElement('li');
      const textElem = document.createTextNode(elem);
      li.appendChild(textElem);

      return li;
    }

    return ol;
  }

  get content() {
    return this.container;
  }
}
