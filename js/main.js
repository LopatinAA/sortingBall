const boxOne = document.getElementById('faildForArray');
const boxTwo = document.getElementById('sortedArray');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasForLine = document.getElementById('canvasForLine');
const context = canvasForLine.getContext('2d');


const randomValue = function (max) {
    return (Math.floor(Math.random() * max));
}

const drawingLines = function (x, y) {
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x * 5, 200);
    context.lineTo(x * 5, 200 - (y * 20));
    context.stroke();
}

let arr = [];
let arrLine = [];
for (i = 0; i < 73; i++) {
    arr.push(randomValue(10));
}



for (i = 0; i < 73; i++) {-
    arrLine.push(arr[i]);
}

let generatedString = arr.join([' ']);
boxOne.innerHTML = generatedString;

for (i = 0; i < 73; i++) {
    setTimeout(function () {
        context.clearRect(0, 0, 500, 200);
        for (j = 0; j < 73; j++) {
            if (arr[j] > arr[j + 1]) {
                let storage = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = storage;
            }
            drawingLines(j, arr[j]);
        }
        let sortedString = arr.join([' ']);
        boxTwo.innerHTML = sortedString;
    }, i * 500)
}
const shiftLeft = function(){
    let x = 0;
    let clear = setInterval(() => {
        ctx.clearRect(0, 0, 500, 200);
        ctx.fillStyle = 'black';
        ctx.fillRect(60-x, 35, 30, 30);
        ctx.fillStyle = 'white';
        ctx.fillRect(20-x, 35, 30, 30);
        for (i=0;i<6;i++){
            ctx.fillRect(i * 50 + 110 - x, 35, 30, 30);
        }
        x++;
        if (x == 60){
            clearInterval(clear);
            moveUp();
        }
    }, 30);
}

const moveLeft = function(){
    let x = 40;
    let clear = setInterval(() => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.fillStyle = 'black';
        ctx.fillRect(x, 50, 30, 30);
        ctx.fillStyle = 'white';
        x--;
        if (x == 0){
            ctx.clearRect(0, 0, 200, 200);
            clearInterval(clear);
            moveUp();
        }
    }, 30);
}

const moveDown = function(){
    let y1 = 20;
    let y2 = 50
    let clear = setInterval(() => {
        ctx.clearRect(0, 0, 90, 200);
        ctx.fillStyle = 'black';
        ctx.fillRect(60, y1, 30, 30);
        ctx.fillStyle = 'white';
        ctx.fillRect(20, y2, 30, 30);
        y1++;
        y2--;
        if (y1 == 35) {
            clearInterval(clear);
            //moveLeft();
            shiftLeft();
        }
    }, 30);
}

const moveRight = function (){
    let x1 = 20;
    let x2 = 60;
    let clear = setInterval(() => {
        ctx.clearRect(0, 0, 90, 200);
        ctx.fillStyle = 'black';
        ctx.fillRect(x1, 20, 30, 30);
        ctx.fillStyle = 'white';
        ctx.fillRect(x2, 50, 30, 30);
        x1++;
        x2--;
        if (x1==60){
            clearInterval(clear);
            moveDown();
        }
    }, 30);
}

const moveUp = function (){
    let y1 = 35;
    let y2 = 35;
    let clear = setInterval(() => {
        ctx.clearRect(0, 0, 90, 200);
        ctx.fillStyle = 'black';
        ctx.fillRect(20, y1, 30, 30);
        ctx.fillStyle = 'white';
        ctx.fillRect(60, y2, 30, 30);
        y1--;
        y2++;
        if (y1 == 20){
            clearInterval(clear);
            moveRight();
        }
    }, 30);
}
//moveUp();
shiftLeft();


