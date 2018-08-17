"use strict";
import {List} from "./modules/list.js";

const wordsList = new List();
const divElem = document.querySelector('.listViewer');
divElem.appendChild(wordsList.content);
