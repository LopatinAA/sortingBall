// инициализация переменных, для привязки в html тегам
const boxOne = document.getElementById('faildForArray');
const boxTwo = document.getElementById('sortedArray');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasForLine = document.getElementById('canvasForLine');
const context = canvasForLine.getContext('2d');

//функция для определния рандомного числа
const randomValue = function (max) {
    return (Math.floor(Math.random() * max));
}
//рисование линий
const drawingLines = function (x, y) {          //в кчестве аргументов
    context.strokeStyle = "black";              //принимаем индекс и 
    context.lineWidth = 5;                      //значение по индексу
    context.beginPath();                        //и рисуем линии снизу
    context.moveTo(x * 5, 200);                 //вверх
    context.lineTo(x * 5, 200 - (y * 20));
    context.stroke();
}

let arr = [];                                   //пустой массив который 
for (i = 0; i < 73; i++) {                      //будем пушить рандомными
    arr.push(randomValue(10));                  //значениями 0..9
}


let generatedString = arr.join([' ']);          //склеиваваем элементы
boxOne.innerHTML = generatedString;             //массива в строку и 
                                                //добавляем в HTML
for (i = 0; i < 73; i++) {                      //сортировка начинается с того, что мы пройдемся по массиву чтолько раз, сколько элементов массива
    setTimeout(function () {                    //используем функцию setTimeout для того, чтою визуально монжо было увидеть отображени массива
        context.clearRect(0, 0, 500, 200);      //стираем область для рисования 
        for (j = 0; j < 73; j++) {              //в этом цикле проверяем текущий и следующий элемент, если текущий больше, то меняем их местами
            if (arr[j] > arr[j + 1]) {          
                let storage = arr[j];           
                arr[j] = arr[j + 1];            
                arr[j + 1] = storage;
            }
            drawingLines(j, arr[j]);            //рисуем в конце второго цикла, когда значение массива уже изменилось
        }
        let sortedString = arr.join([' ']);     //так же добавляем этот массив на страничку для того чтоб в реальном времени видеть, как сортируются элементы 
        boxTwo.innerHTML = sortedString;
    }, i * 500)
}
const shiftLeft = function(){                                   //методы moveUp moveRight moveDown shiftLeft применяются для того, чтоб анимировать движение квадратиков 
    let x = 0;                                                  //сначала мы вызываем метод shiftLeft, для того чтоб он нарисовал все квадратики что есть 
    let clear = setInterval(() => {                             //затем, методы вызывают друг друга по очери, и тем самым отрисовывают квадратики с помощью setInterval
        ctx.clearRect(0, 0, 500, 200);                          //как показаал практика важно использовать clearInterval для того, чтоб программа не старалась постоянно прорисоывать
        ctx.fillStyle = 'black';                                //методы похожи друг на друга, меняются толбко координаты построения квадратиков
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

/*const moveLeft = function(){
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
}*/

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
shiftLeft(); //вызов метода, для того чтоб начать анимацию


