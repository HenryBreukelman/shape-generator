'use strict';

import * as Utils from './utils.js';

const shapeType = Utils.select('.shape-type');
const shapeColor = Utils.select('.shape-color');
const makeShape = Utils.select('.make-shape');
const shapeContainer = Utils.select('.shape-container');
const shapeOutput = Utils.select('.shape-info');

let numberOfShapes = 0;
const shapes = [];

function checkAmount() {
  if (numberOfShapes < 25) {
    create();
  }
} //could add fuction to delet first shape if new one is made

function create () {
  let newShapeType = shapeType.value;
  let newShapeColor = shapeColor.value;
  if (newShapeColor !== 'Color' && newShapeType !== "Shape") {
    const newShape = new Utils.Shape(newShapeType, newShapeColor);
    shapes.push(newShape);
    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${newShapeColor} ${newShapeType}`;
    Utils.listen('click', shapeDiv, () => {
      let newShapeInfo = newShape.getShapeInfo();
      shapeInfo(newShapeInfo);
    })
    shapeContainer.appendChild(shapeDiv);
    numberOfShapes++;
  }  
}

function shapeInfo (newShapeInfo) {
  console.log(newShapeInfo);
  shapeOutput.innerText = newShapeInfo;
}

Utils.listen('click', makeShape, checkAmount);