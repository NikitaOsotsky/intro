"use strict";
import {List} from "./modules/list.js";

const wordsList = new List('grfhg', 100);
const divElem = document.querySelector('.listViewer');
divElem.appendChild(wordsList.content);
