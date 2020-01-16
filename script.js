var matrix = [];
var side = 15;
grassArr = [];
grasseaterArr = [];
predatorArr = [];
carnivorousArr = [];
ominousArr = [];

function setup() {
    for (var y = 0; y < 50; y++) {
        matrix[y] = [];
        for (var x = 0; x < 50; x++) {
            matrix[y][x] = Math.round(random(5));
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var great = new GrassEater(x, y, 2);
                grasseaterArr.push(great);

            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3);
                predatorArr.push(predator);

            } else if (matrix[y][x] == 4) {
                var carnivorous = new Carnivorous(x, y, 4);
                carnivorousArr.push(carnivorous);
            }
            else if (matrix[y][x] == 5) {
                var ominous = new Օminous(x, y, 5);
                ominousArr.push(ominous);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }


            rect(x * side, y * side, side, side);




        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in carnivorousArr) {
        carnivorousArr[i].move();
        carnivorousArr[i].eat();
        carnivorousArr[i].mul();
        carnivorousArr[i].die();
    }
    for (var i in ominousArr) {
        ominousArr[i].move();
        ominousArr[i].eat();
        ominousArr[i].mul();
        ominousArr[i].die();
    }
}