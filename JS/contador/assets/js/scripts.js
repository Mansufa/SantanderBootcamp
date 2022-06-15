var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment(){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
        console.log(currentNumber);
}

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    console.log(currentNumber);
}