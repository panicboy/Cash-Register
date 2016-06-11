'use strict';

var btnBox = document.getElementById('btnBox');
var opBox = document.getElementById('opBox');
var calcBox = document.getElementById('calcBox');
var calc = calculatorModule();

var screen = {text: '', hasDecimal: false, clearScreen: false, buffer: null, nextOperation: null};
console.log('text: ' + screen.text);
console.log('has decimal: ' + screen.hasDecimal);


//create number buttons

for (var i = 0; i < 11; i++) {
  var btn = document.createElement('button');
  var x = i - 1;
  if (x < 0){x = '00'};
  btn.id = x;
  //btn.innerHTML = 'Button ' + i;
  btn.innerHTML = x;
  btn.addEventListener('click', function(event) {
    //var sendVal = this.innerHTML;
    if(screen.clearScreen){
      screen.text = this.innerHTML;
      doScreenReset();
    } else {
      screen.text += this.innerHTML;
    }
    console.log('screen text: ' + screen.text);
  });

  btnBox.appendChild(btn);
}

// create decimal button
  var btn = document.createElement('button');
  btn.id = '.';
  btn.innerHTML = '.';
  btn.addEventListener('click', function(event) {
    //var sendVal = this.innerHTML;
    if(! screen.hasDecimal) {
        screen.text += this.innerHTML;
        screen.hasDecimal = screen.text.includes('.');
        console.log('screen text: ' + screen.text);
    }
  });
  opBox.appendChild(btn);

var multFunc = function() {
  return calc.multiply(Number(screen.text));
};
var divFunc = function() {
  calc.divide(Number(screen.text));
};
var addFunc = function() {
  calc.add(Number(screen.text));
};
var subFunc = function() {
  calc.subtract(Number(screen.text));
};

var funcs = [multFunc, divFunc, addFunc, subFunc];
var funcLabels = ['x', '÷', '+', '-' ];

for (var i = 0; i < 4; i++) {
  var funcBtn = document.createElement('button');
  var buttLabel = funcLabels[i];
  var buttFunc = funcs[i];
  funcBtn.innerHTML = buttLabel;
  funcBtn.functionCall = buttFunc;
  funcBtn.addEventListener('click', function(event) {
    console.log('Function call: ' + this.functionCall);
  screen.buffer = Number(screen.text);
  screen.nextOperation = this.functionCall;
  screen.clearScreen = true;
  console.log('text: ' + screen.text + '; buffer: ' + screen.buffer + '; operation: ' + screen.nextOperation);
});
opBox.appendChild(funcBtn);
}

function doScreenReset(){
  screen.clearScreen = false;
  screen.hasDecimal = false;
}

var a = function(){ console.log("the screen value is: " + screen.text) };
  var b = function(){ console.log("this is function: b") };
  var c = function(){ console.log("this is function: c") };

var funcs = [a,b,c];
// create test buttons
  var btn = document.createElement('button');
  btn.id = '0';
  btn.innerHTML = 'a';
  btn.addEventListener('click', function(event) {
    //var sendVal = this.innerHTML;
    funcs[this.id].call();
  });
  opBox.appendChild(btn);

  screen.nextOperation.call()