window.onload = function () {
  init();
}

function init () {
  var newUl = createUlFromArray([
    'alpha',
    'bravo',
    'charlie',
    [
      ['name', 'Frank'],
      ['profession', 'Spartan'],
      ['random', 'entries']
    ],
    [
      ['name', 'Leonidas'],
      ['profession', 'Preschool Teacher']
    ]
  ]);

  appendToBody(newUl);
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

  for (var i = aLength - 1; i > -1; i--) {
    currentLi = createElement('li');

    if (typeof array[i] == 'string') {
      currentLi.textContent = array[i];  
    }
    
    // Check to see if item is yet another Array
    if (typeof array[i].splice !== 'undefined') {
      appendChild(
        currentLi,
        formatComplexEntry(array[i]));
    }
    
    appendChild(myUl, currentLi);
  }

  return myUl;
}

function formatComplexEntry (entry) {
  var eLen = entry.length;
  var con = createElement('p');
  var current;
  var currentTitle;
  var currentValue;

  for (var i = 0; i < eLen; i++) {
    current = entry[i];
    currentTitle = createElement('span');
    currentTitle.textContent = (current[0] + ': ').toUpperCase();

    currentValue = createElement('span');
    currentValue.textContent = current[1];

    appendChild(con, currentTitle);
    appendChild(con, currentValue);
    appendChild(con, createElement('br'));
  }

  return con;
}