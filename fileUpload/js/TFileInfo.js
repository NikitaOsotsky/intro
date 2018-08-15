class TFileInfo {
  constructor() {
    this.fileName = '';
    this.fileSize = '';
    this.fileType = '';
  }
  set name(newName) {
    this.fileName = newName;
  }
  set size(newSize) {
    this.fileSize = newSize;
  }
  set type(newType) {
    this.fileType = newType;
  }
  get name() {
    return this.fileName;
  }
  get size() {
    return this.fileSize;
  }
  get type() {
    return this.fileType;
  }
  clear () {
    this.name = '';
    this.size = '';
    this.type = '';
  }
}
