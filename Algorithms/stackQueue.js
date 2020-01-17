let intStack = [];
let numElementsStack = -1;

//Elements for the Queue.
let intQueue = [];
let numElementsQueue = 0;
let rear = -1;
let front = 0;
let queueSize = 0;

const stackElementInputText = document.getElementById("stackElementInputText");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");


//QUEUE
const sizeQueueInputText = document.getElementById("sizeQueueInputText");
const queueElementInputText = document.getElementById("queueElementInputText");
const insertBtn = document.getElementById("insertBtn");
const removeBtn = document.getElementById("removeBtn");


const insertElementQueue = (value) => {
  const queueSize = parseInt(sizeQueueInputText.value) - 1;

  if (!isQueueFull()) {

    if (rear === queueSize) {
      rear = -1;
    }

    intQueue[++rear] = value;
    numElementsQueue++;

  } else {
    alert("The Queue is full!!! ");
  }

  
}

const removeElementQueue = () => {
  const queueSize = sizeQueueInputText.value;
  if (isQueueEmpty()) {
    alert("The queue is Empty!!!");
    front = 0;
    rear = -1;
  } else {
    const tmp = intQueue[front];
    intQueue[front++] = -1;
    numElementsQueue--;
    if (front == queueSize) {
      front = 0;
    }
    return tmp;
  }
}

const isQueueEmpty = () => {
  return numElementsQueue == 0;
}

const isQueueFull = () => {
  const queueSize = parseInt(sizeQueueInputText.value);
  if (queueSize == numElementsQueue) {
    return true;
  } else {
    return false;
  }
}

insertBtn.addEventListener("click", function() {
  const queueSize = sizeQueueInputText.value;
  const queueElement = queueElementInputText.value;

  if (queueSize == "") {
    alert("Please set the size of the Queue!!!");
  } else {
    insertElementQueue(queueElement);
  }

  currentFront.innerHTML = front;
  currentRear.innerHTML = rear;
  queueResult.innerHTML = printQueue();

});

removeBtn.addEventListener("click", function() {
  removeElementQueue();

  currentFront.innerHTML = front;
  currentRear.innerHTML = rear;

  queueResult.innerHTML = printQueue();
});


const push = (value) => {
  intStack[++numElementsStack] = value;
}

const pop = () => {

  if (numElementsStack == -1) {
    alert("The stack is empty");
    return;
  }

  const tmp = intStack[numElementsStack];
  intStack[numElementsStack--] = -1;
  return tmp;
}

const printStack = () => {
  let stringHTML = "";
  for (let x = numElementsStack; x >= 0; x--) {
    stringHTML += "<div><span class='stack-element'>" + intStack[x] + "</span> <span>[" + x + "]</span></div>";
  }
  return stringHTML;
}

const printQueue = () => {
  const queueSize = sizeQueueInputText.value;
  let stringHTML = "";
  for (let x = queueSize - 1; x >= 0; x--) {
    stringHTML += "<div><span class='stack-element'>" + intQueue[x] + "</span> <span>[" + x + "]</span></div>";
  }
  return stringHTML;
}

pushBtn.addEventListener("click", function() {
  const newElement = stackElementInputText.value;
  
  console.log("Push Element: " + newElement);

  push(newElement);

  //stackResult.innerHTML = intStack;
  stackResult.innerHTML = printStack();

});

popBtn.addEventListener("click", function() {
  console.log(pop());
  stackResult.innerHTML = intStack;
  
  stackResult.innerHTML = printStack();
});


