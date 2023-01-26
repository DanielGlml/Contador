let numContainer = document.getElementById('num');
let value = 0;
let btnInc = document.querySelector('.inc');
let btnDec = document.querySelector('.dec');
let btnReset = document.querySelector('.reset');

function green () {
    numContainer.style.color = "rgb(163, 237, 141)";
};

function red () {
    numContainer.style.color = "rgb(243, 120, 120)";
};

function white () {
    numContainer.style.color = "white"
};

btnInc.addEventListener("click", () => {value++;numContainer.textContent = value; if(value > 0)
    {green()}; if(value === 0) {white()}
});
btnDec.addEventListener("click", () => {value--;numContainer.textContent = value; if(value < 0)
    {red()}; if(value === 0) {white()}
});
btnReset.addEventListener("click", () => {value=0;numContainer.textContent = value; if(value === 0) {white();};});
