"use strict";
(function () {
  /**
   * VARIABLES
   */
  const fileInfo = new TFileInfo();
  const uploader = document.querySelector('#uploader');
  const output = document.querySelector('.output');
  const img = document.querySelector('.imageBox');//TODO: name



  function getFile() {
    if (!file) {
      return;
    }

    const file = uploader.files[0];

    fileInfo.name = file.name;
    fileInfo.size = file.size;
    fileInfo.type = file.type;
  }

  /*adding src to imageBox*/
  function addSRC() {
    const reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;

      // TODO: move to CSS
      img.style.display = 'block';
    };
    reader.readAsDataURL(uploader.files[0]);
  }

  /*getting info from model to text-fields*/
  function getInfo() {
    output.innerHTML =
        'File name: ' + fileInfo.name + '\n' +
        'File size: ' + fileInfo.size + '\n' +
        'File type: ' + fileInfo.type;
  }

  /**
   * HANDLERS
   */

  function onUploaderInput () {
    getFile();
    addSRC();
  }

  function setHandlers() {
    /*listener to Get file info*/
    document.querySelector('#check').addEventListener('click', () => {
      getInfo();
    });

    /*listener to Clear file info*/
    document.querySelector('#clear').addEventListener('click', () => {
      fileInfo.clear();
      output.innerHTML = '';
      img.src = '';
      // TODO: move to CSS
      // img.style.display = 'none';
    });

    uploader.addEventListener('input', onUploaderInput);
  }

  function init() {
    setHandlers();
  }

  init();
}());
