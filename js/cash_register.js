var btnBox = document.getElementById('btnBox');
var opBox = document.getElementById('opBox');
var screen = document.getElementById('display');
var oldScreen = document.getElementById('oldDisplay');
var theNextFunction = document.getElementById('theFunction');
var oldNum = null;
var nextOperation = null;
var calc = calculatorModule();
console.log(calc);
for (var i = 0; i < 10; i++) {
  var btn = document.createElement('button');
  btn.id = i;
  //btn.innerHTML = 'Button ' + i;
  btn.innerHTML = i;
  btn.addEventListener('click', function(event) {
    //var sendVal = this.innerHTML;
    theNumber = Number(screen.innerHTML + this.innerHTML);
    screen.innerHTML = theNumber;
    calc.setScr(theNumber);
  });

  btnBox.appendChild(btn);
}

//var calcButtons = [{label: 'x', functionCall: 'doMultiply'},{label: '÷', functionCall: 'doDivide'},{label: '+', functionCall: 'doAdd'},{label: '-', functionCall: 'doSubtract'}];
var calcButtons = [{label: 'x', functionCall: 'multiply'},{label: '÷', functionCall: 'divide'},{label: '+', functionCall: 'add'},{label: '-', functionCall: 'subtract'}];
for (var i = 0; i < 4; i++) {
var calcBtn = document.createElement('button');
buttonProperties = calcButtons[i];
calcBtn.innerHTML = buttonProperties.label;
calcBtn.functionCall = buttonProperties.functionCall;
calcBtn.addEventListener('click', function(event) {
  oldScreen.innerHTML = screen.innerHTML;
  theNextFunction.innerHTML = this.functionCall;
  console.log('functionCall: ' + this.functionCall);
  calc.setFunc(this.functionCall);

    screen.innerHTML = 0;
    /*else {
    currentNum = Number(screen.innerHTML);
    newNum = calc[nextOperation](oldNum,currentNum);
    screen.innerHTML = calc[nextOperation](oldNum,currentNum);
    oldNum = null;
  }*/
});
opBox.appendChild(calcBtn);
}


/*
equalBtn = document.createElement('button');
equalBtn.innerHTML = '=';
equalBtn.addEventListener('click', function(event){
  num1 = Number(oldScreen.innerHTML);
  num2 = Number(screen.innerHTML);
  theOperation = theNextFunction.innerHTML;
  if (theOperation = 'doMultiply') {
    theResult = calc.multiply(num1,num2);
  } else if (theOperation = 'doDivide') {
    theResult = calc.divide(num1,num2);
  } else if (theOperation = 'doAdd') {
    theResult = calc.add(num1,num2);
  } else if (theOperation = 'doSubtract') {
    theResult = calc.subtract(num1,num2);
  }
  screen.innerHTML = theResult;
  oldScreen.innerHTML = '';
  theNextFunction.innerHTML = '';
});
opBox.appendChild(equalBtn);
*/

equalBtn = document.createElement('button');
equalBtn.innerHTML = '=';
equalBtn.addEventListener('click', function(event){
calc.doIt();
var theResult = calc.getScr();
console.log('theResult: ' + theResult);
screen.innerHTML = theResult;
oldScreen.innerHTML = '';
});
opBox.appendChild(equalBtn);

clrBtn = document.createElement('button');
clrBtn.innerHTML = 'clear';
clrBtn.addEventListener('click', function(event){
oldScreen.innerHTML = '';
screen.innerHTML = '';
theNextFunction.innerHTML = '';
calc.clearAll;
});
opBox.appendChild(clrBtn);