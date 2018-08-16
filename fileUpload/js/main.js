"use strict";
(function () {
  /**
   * VARIABLES
   */
  const fileInfo = new TFileInfo();
  const uploader = document.querySelector('#uploader');
  const output = document.querySelector('.output');
  const preloadImage = document.querySelector('.imageBox');//TODO: name

  /**
   * function set file info to model
   */
  function getFile() {
    const file = uploader.files[0];
    if (!file) {
      return;
    }

    fileInfo.name = file.name;
    fileInfo.size = file.size;
    fileInfo.type = file.type;
  }

  /*adding src to imageBox*/
  function addSRC() {
    const reader = new FileReader();
    reader.onload = function(e) {
      preloadImage.src = e.target.result;
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
      preloadImage.src = '';
    });

    uploader.addEventListener('input', onUploaderInput);
  }

  function init() {
    setHandlers();
  }

  init();
}());
