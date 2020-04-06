let defaultResult=0;

let currentResult=defaultResult+10;
let logEntries=[];

function calculationResult(calculationType)
  {
    const userinput1 = parseInt(userInput1.value);
    const userinput2 = parseInt(userInput2.value);
    if (calculationType.toString() == 'ADD')
    {     
      currentResult = userinput1 + userinput2;
      const description = 'ADD Results';
      outputResult(currentResult,description);
      const logEntry = {
        operation : 'ADD',
        firstNumber: userinput1,
        secondNumber: userinput2,
        result: currentResult
      };
      logEntries.push(logEntry.operation); 
      console.log(logEntries);     
    }
    else if (calculationType.toString() == 'SUB')
    {     
      currentResult = userinput1 - userinput2;
      const description = 'SUB Results';
      outputResult(currentResult,description);
      const logEntry = {
        operation : 'SUB',
        firstNumber: userinput1,
        secondNumber: userinput2,
        result: currentResult
      };
      logEntries.push(logEntry.operation); 
      console.log(logEntries);     
    }
    else if (calculationType.toString() == 'MUL')
    {     
      currentResult = userinput1 * userinput2;
      const description = 'MUL Results';
      outputResult(currentResult,description);
      const logEntry = {
        operation : 'MUL',
        firstNumber: userinput1,
        secondNumber: userinput2,
        result: currentResult
      };
      logEntries.push(logEntry.operation); 
      console.log(logEntries);     
    }
    else if (calculationType.toString() == 'DIV')
    {     
      currentResult = userinput1 / userinput2;
      const description = 'DIV Results';
      outputResult(currentResult,description);
      const logEntry = {
        operation : 'DIV',
        firstNumber: userinput1,
        secondNumber: userinput2,
        result: currentResult
      };
      logEntries.push(logEntry.operation); 
      console.log(logEntries);     
    }
  }

function add()
{
  calculationResult('ADD')
}

function sub()
{
  calculationResult('SUB')
}

function mul()
{
  calculationResult('MUL')
}
function div()
{
  calculationResult('DIV')
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);

//alert(currentResult);
//let description = 'hello'


