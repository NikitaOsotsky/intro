"use strict";
(function () {
  /*consts*/
  const fileInfo = new TFileInfo();
  const uploader = document.querySelector('#uploader');
  const output = document.querySelector('.output');
  const img = document.querySelector('.imageBox');
  /*listener to Get file info*/
  document.querySelector('#check').addEventListener('click', () => {
    getInfo();
  });

  /*listener to Clear file info*/
  document.querySelector('#clear').addEventListener('click', () => {
    fileInfo.clear();
    output.textContent = '';
    img.src = '';
    img.style.display = 'none';
  });

  /*listener to input file*/
  uploader.addEventListener('input', () => {
    getFile();
    addSRC();
  });

  /*writing file info to model*/
  function getFile() {
    const file = uploader.files[0];
    if (file) {
      fileInfo.name = file.name;
      fileInfo.size = file.size;
      fileInfo.type = file.type;
    } else {
      alert('No chosen files');
    }
  }

  /*adding src to imageBox*/
  function addSRC() {
    const reader = new FileReader();
    reader.onload = function(e) {
      console.log(e);
      img.src = e.target.result;
      img.style.display = 'block';
    };
    reader.readAsDataURL(uploader.files[0]);
  }

  /*getting info from model to text-fields*/
  function getInfo() {
    output.textContent =
        'File name: ' + fileInfo.name + '\n' +
        'File size: ' + fileInfo.size + '\n' +
        'File type: ' + fileInfo.type;
  }
}());
