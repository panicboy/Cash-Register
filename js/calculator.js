/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = (function(){
    // initialize variables
    var total;
    var memory;
    var buffer = null;
    var screenBuffer = '';
    var calcScreen = '';
    var functionToPerform = null;
    var history = [];


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    function doLoad(x){
      addHistoryItem("load",x);
      validateNumber(x);
      total = x;
    return total;
    }


  /**
   * Return the value of `total`
   * @return { Number }
   */

    function _getTotal(){
      return total;
    }

    function clearTotal(){
      total = 0;
    }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    function doAdd(x){
      addHistoryItem("add",x);
      validateNumber(x);
      total += x;
      return total;
    }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function doSubtract(x){
      addHistoryItem("subtract",x);
      validateNumber(x);
      total -= x;
      return total;
    }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function doMultiply(x){
      addHistoryItem("multiply",x);
      validateNumber(x);
      total *= x;
      return total;
    }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    function doDivide(x){
      addHistoryItem("divide",x);
      validateNumber(x);
      total /= x;
      return total;
    }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function getMemory(){
      addHistoryItem("recall", memory);
      return memory;
    }


  /**
   * Stores the value of `total` to `memory`
   */
    function totalToMemory(){
      addHistoryItem("total to memory",total);
      memory = total;
    }


  /**
   * Clear the value stored at `memory`
   */
    function clearMem(){
      addHistoryItem("clearMemory",memory);
      memory = 0;
    }

  /**
   * Validation
   */

    function validateNumber(theNumber){
      if(typeof theNumber != "number"){
        throw Error('Error');
      }
    }

    /*function updateScreen(theKey){
    }
    */

    function addHistoryItem(operation,theNumber){
      var historyItem = {action:operation, num1:theNumber, num2:total};
      history.push(historyItem);
    }

    function clearLastHistoryItem(){
      history.pop();
    }

    function clearHistory(){
      history = [];
    }

    function setFunction(theFunction){
      if (bufferIsEmpty()) {
        console.log('buffer empty');
        buffer = screenBuffer;
      } else {
        console.log('Performing function ' + functionToPerform);
        doCalc();
      }
      functionToPerform = theFunction;
      console.log('functionToPerform: ' + functionToPerform);
    };

    function getFunction(){
      return functionToPerform;
    }

    function clearFunction(){
      functionToPerform = null;
    }

    function setBuffer(theValue){
      buffer = theValue;
      console.log('buffer: ' + buffer);
    }

    function getBuffer(){
      return buffer;
    }

    function bufferIsEmpty(){
      console.log(typeof buffer);
      return buffer = null;
    }

    function clearBuffer(){
      buffer = null;
    }

    function setScreenBuffer(theValue){
      screenBuffer = theValue;
      total = screenBuffer;
      console.log('screenBuffer: ' + screenBuffer);
    }

    function getScreenBuffer(){
      return screenBuffer;
    }

    function clearScreenBuffer(){
      screenBuffer = '';
    }

    function allClear(){
      clearScreenBuffer();
      clearBuffer();
      clearFunction();
      clearMem();
      clearTotal();
    }

    function doCalc(){
      total = buffer;
      console.log('buffer: ' + buffer + '; total: ' + total + '; screen: ' + screenBuffer);
      console.log('functionToPerform: ' + functionToPerform);
      if (functionToPerform === '' || functionToPerform === undefined) return;
      if (functionToPerform ==='add') doAdd(screenBuffer);
      if (functionToPerform === 'subtract') doSubtract(screenBuffer);
      if (functionToPerform === 'multiply') doMultiply(screenBuffer);
      if (functionToPerform ==='divide') doDivide(screenBuffer);
      clearBuffer();
      screenBuffer = total;
      console.log('screenBuffer: ' + screenBuffer);
    }


      //
    return {
      load: doLoad,
      add: doAdd,
      subtract: doSubtract,
      multiply: doMultiply,
      divide: doDivide,
      recallMemory: getMemory,
      saveMemory: totalToMemory,
      clearMemory: clearMem,
      getTotal: _getTotal,
      setBuf: setBuffer,
      getBuf: getBuffer,
      emptyBuf: bufferIsEmpty,
      setScr: setScreenBuffer,
      getScr: getScreenBuffer,
      clrScr: clearScreenBuffer,
      setFunc: setFunction,
      getFunc: getFunction,
      doIt: doCalc,
      clearAll: allClear
    };
  });
