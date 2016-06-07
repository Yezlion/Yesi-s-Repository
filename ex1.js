window.onload = function () {
  console.log('The html has loaded.');
  init();
}

function init () {
  console.log('Init function called from ONLOAD');
  printList([
    'alpha',
    'bravo',
    'charlie',
    'delta'
  ]);

  printNumbersOnly([
    'alpha',
    10,
    'bravo',
    'charlie',
    419,
    'delta',
    605,
    '100'
  ]);

  console.log(
    addTwoNumbers(1, 1));

  var newUl = createUlFromArray([
    'alpha',
    'bravo'
  ]);
}
// @description: Logs out all the items in the list
function printList (list) {
  var listLength = list.length;
  var currentItem;
  for (var i = 0; i < listLength; i++) {
    currentItem = list[i];
    currentItem = currentItem.toUpperCase();
    console.log(currentItem);
  }
}

function printNumbersOnly (list) {
  var listLen = list.length;
  var currentItem;

  for (var i = 0; i < listLen; i++) {
    currentItem = list[i];
    if (typeof currentItem == 'number') {
      console.log(currentItem);
    }
  }
}

function addTwoNumbers (num1, num2) {
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    return num1 + num2;  
  }
  return 0;
}

function getId (elementId) {
  return document.getElementById(elementId);
}

function createElement (tag) {
  return document.createElement(tag);
}

function appendToBody (ele) {
  document.body.appendChild(ele);
}

function appendChild(ele, child) {
  ele.appendChild(child);
}

function createUlFromArray (array) {
  var myUl = createElement('ul');
  var aLength = array.length;
  var currentLi;

  for (var i = aLength - 1; i < 0; i--) {
    currentLi = createElement('li');
    currentLi.textContent = array[i];
    appendChild(myUl, currentLi);
  }

  return myUl;
}