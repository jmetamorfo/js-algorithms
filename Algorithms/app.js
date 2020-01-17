/**
 * Algorithms 
 * Version 0.00001
 * Copyright (c) January 2020 Juan Munoz Gutierrez All rights reserved.
 * 
 * The main purpose of this script is to show how to implemet and how the basic Algorithms and Data Structure works.
 * 
 */

let intArray = [];
let numElements = 0;

//Insert new element
const insertElementBtn = document.getElementById("insertElementBtn");
const elementInputText = document.getElementById("elementInputText");

//Insert elements sorted
const insertSortedBtn = document.getElementById("insertSortedBtn");
const elementSortedInputText = document.getElementById("elementSortedInputText");

//Show current values of the array
const currentValues = document.getElementById("currentValues");

//Linear search
const linearSearchBtn = document.getElementById("linearSearchBtn");
const linearSearchElement = document.getElementById("linearSearchElement");
const linearSearchresult = document.getElementById("linearSearchresult");

//Binary search
const binarySearchBtn = document.getElementById("binarySearchBtn");
const binarySearchElement = document.getElementById("binarySearchElement");
const binarySearchresult = document.getElementById("binarySearchresult");

//Recursive binary search
const recursiveBinarySearchBtn = document.getElementById("recursiveBinarySearchBtn");
const recursiveBinarySearchElement = document.getElementById("recursiveBinarySearchElement");
const recursiveBinarySearchresult = document.getElementById("recursiveBinarySearchresult");

//Bubble sort
const bubbleSortBtn = document.getElementById("bubbleSortBtn");
//Selection sort
const selectionSortBtn = document.getElementById("selectionSortBtn");
//Insertion sort
const insertionSortBtn = document.getElementById("insertionSortBtn");
//Populate array
const populateArrayBtn = document.getElementById("populateArrayBtn");
const numElArray = document.getElementById("numElArray");


/**
* function insertElement Insert new element in our array.
* @param {number} value
* @return {number}
*/
const insertElement = function(value) {
  if (linearSearch(value) !== -1) {
    console.log("Duplicated values are not allowed!!!");
    return;
  }
  intArray[numElements++] = value;
}

/**
* function showArray Show the current elements of our array.
*/
const showArray = () => {
  console.log(intArray);
  currentValues.innerHTML = "[" + intArray + "]";
}

/**
* function validateInputs Validate the input text before insert values in our array.
* @param {number} value
* @return {boolean}
*/
const validateInputs = (value) => {
  //Validate if the element is  number.
  if (isNaN(value)) {
    alert("Only Numbers are allowed, please insert a number!!!");
    elementInputText.value = "";
    elementSortedInputText.value = "";
    return false;
  }
  //Validate if the value is empty.
  if (value === "") {
    alert("The value can not be empty!!!");
    return false;
  }

  if (linearSearch(parseInt(value)) !== -1) {
    alert("Duplicated values are not allowed!!!");
    return false;
  }

  return true;
}

/**
* EventListerner Call the insertElement functionality.
*/
insertElementBtn.addEventListener("click", function() {
  //Get the value of the input text.
  const newElement = elementInputText.value;
  //Validate inputs.
  if (!validateInputs(newElement)) { return; }
  //call the insertElement function.
  insertElement(parseInt(newElement));
  //Clean input text
  elementInputText.value = "";
  showArray();
});

/**
* function insertionSort Insert new sorted element in our array.
* @param {number} value
* @return {number}
*/
const insertSorted = (value) => {
  let isMoved = false;
  let current = 0;
  if (numElements == 0) {
    intArray[numElements++] = value;
  } else if(value > intArray[numElements - 1]) {
    intArray[numElements++] = value;
  } else {
    for (current = 0; current <= numElements - 1; current++) {
      if (value < intArray[current]) {
        isMoved = true;
        break;
      }
    }
  }

  if (isMoved) {
    for (let y = numElements; y > current; y--) {
      intArray[y] = intArray[y - 1];
    }
    intArray[current] = value;
    numElements++;
  }
}

/**
* EventListerner Call the insertSorted functionality.
*/
insertSortedBtn.addEventListener("click", function() {
  //Get the value of the input text.
  const newElement = elementSortedInputText.value;
  //Validate inputs.
  if (!validateInputs(newElement)) { return; }
  //call the insertSorted function.
  insertSorted(parseInt(newElement));
  //Clean input text.
  elementSortedInputText.value = "";
  showArray();
});

/**
* function linearSearch search an element in our array using linear search algorithm.
* @param {number} key
* @return {number}
*/
const linearSearch = function(key) {
  for (let x = 0; x <= numElements - 1; x++) {
    if (intArray[x] === key) {
      return x;
    }
  }
  return -1;
}

/**
* EventListerner Call the linearSearch functionality.
*/
linearSearchBtn.addEventListener("click", function() {
  const elemetToSearch = linearSearchElement.value;
  const res = linearSearch(elemetToSearch);
  console.log(res);
  linearSearchresult.innerHTML = res;
});

/**
* function binarySearch search an element in our array using binary search algorithm.
* @param {number} key
* @return {number}
*/
const binarySearch = (key) => {
  let lowerBound = 0;
  let upperBound = intArray.length - 1;
  let half = 0;

  do {
    half = Math.round((lowerBound + upperBound) / 2);
    if (intArray[half] === key) {
      return half;
    } else if (lowerBound > upperBound) {
      return -1;
    } else if (key > intArray[half]) {
      lowerBound = half + 1;
    } else if (key < intArray[half]) {
      upperBound = half - 1;
    }
  } while(half >= 0);

}

/**
* EventListerner Call the binarySearch functionality.
*/
binarySearchBtn.addEventListener("click", function() {
  const elementToSearch = binarySearchElement.value;
  const res = binarySearch(parseInt(elementToSearch))
  console.log(res);
  binarySearchresult.innerHTML = res;
});

/**
* function recursiveBinarySearch search an element in our array using the recursive approach of binary search algorithm.
* @param {number} key
* @param {number} loweBound
* @param {number} upperBound
* @return {number}
*/
const recursiveBinarySearch = (loweBound, upperBound, key) => {
  let half = Math.round((loweBound + upperBound) / 2);

  if (loweBound > upperBound) {
    return -1;
  } 
   
  if (intArray[half] == key) {
    return half;
  } else if (key > intArray[half]) {
    return recursiveBinarySearch(half + 1, upperBound, key);
  } else if (key < intArray[half]) {
    return recursiveBinarySearch(loweBound, half - 1, key);
  }
}

/**
* EventListerner Call the recursiveBinarySearch functionality.
*/
recursiveBinarySearchBtn.addEventListener("click", function() {
  const elementToSearch = recursiveBinarySearchElement.value;
  const res = recursiveBinarySearch(0, numElements - 1, elementToSearch);
  console.log(res);
  recursiveBinarySearchresult.innerHTML = res;
});

/**
* function swap swap two elements in our array.
* @param {number} a
* @param {number} b
*/
const swap = (a, b) => {
  let tmp = intArray[a];
  intArray[a] = intArray[b];
  intArray[b] = tmp;
}

/**
* function bubbleSort Sort the elements in our array using the Bubble sort algorithm.
* 
*/
const bubbleSort = () => {
  for (let x = numElements - 2; x >= 0; x--) {
    for(let y = 0; y <= x; y++) {
      if(intArray[y] > intArray[y + 1]) {
        swap(y, y + 1);
      }
    }
  }
}

/**
* EventListerner Call the bubbleSort functionality.
*/
bubbleSortBtn.addEventListener("click", function() {
  bubbleSort();
  showArray();
});

/**
* function selectionSort Sort the elements in our array using the Selection sort algorithm.
* 
*/
const selectionSort = () => {
  let minimun = 0;
  let isSwap = false;

  for (let x = 0; x <= numElements - 1; x++) {
    isSwap = false;
    minimun = x;
    for (let y = x + 1; y <= numElements - 1; y++) {
      if (intArray[y] < intArray[minimun]) {
        minimun = y;
        isSwap = true;
      }
    }
    if (isSwap) {
      swap(x, minimun);
    }
  }

}

/**
* EventListerner Call the selectionSort functionality.
*/
selectionSortBtn.addEventListener("click", function() {
  selectionSort();
  showArray();
});

/**
* function insertionSort Sort the elements in our array using the Insertion sort algorithm.
* 
*/
const insertionSort = () => {
  let marker;
  let current;

  for (let x = 1; x <= numElements - 1; x++) {
    marker = intArray[x];
    current = x;

    while (current != 0 && intArray[current - 1] > marker) {
      intArray[current] = intArray[current - 1];
      current--;
    }
    intArray[current] = marker;
  }
}

/**
* EventListerner Call the insertionSort functionality.
*/
insertionSortBtn.addEventListener("click", function() {
  insertionSort();
  showArray();
});

/**
* function getRandomNumber Generates a random number.
* 
*/
const getRandomNumber = (numElements) => {
  return Math.floor(Math.random() * (numElements + 1) );
}

/**
* function populateArrayRandomNumbers Populates our Array with random numbers.
* 
*/
const populateArrayRandomNumbers = (numElements) => {
  for (let x = 0; x <= (numElements + 1); x++) {
    insertElement(getRandomNumber(numElements));
  }
}

/**
* EventListerner Call the populateArrayRandomNumbers functionality.
*/
populateArrayBtn.addEventListener("click", function() {
  const numElementsArray = numElArray.value;
  populateArrayRandomNumbers(parseInt(numElementsArray));
  currentValues.innerHTML = "[" + intArray + "]";
});
