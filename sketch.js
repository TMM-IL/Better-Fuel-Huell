let huellIMG, kimIMG, hamburgerIMG;

function preload() {
    huellIMG = loadImage("huell.png");
    hamburgerIMG = loadImage("hamburger.png");
    kimIMG = loadImage("kim.png");
}

let score = 0;
let bestScore;
let hp = 5;

let speedMultiplier = 1;

let huell;
let foods = [];
function setup() {
    createCanvas(400, 400);
    huell = new Huell();

    bestScore = getItem("bestScore") || 0;

    foodTypes = [
        new Food(10, 1, hamburgerIMG),
        new Food(10, 1, hamburgerIMG),
        new Food(10, 1, hamburgerIMG),
        new Food(10, 1, hamburgerIMG),
        new Food(30, 1.25, kimIMG)
    ]
}



function draw() {
    background(55);

    huell.update();
    huell.show();

    for (let food of foods) {
        food.update();
        food.show();
    }

    textSize(32);
    fill(255);
    textAlign(LEFT, TOP);
    text("Score: " + score, 0, 0);

    if (frameCount % floor(30 + 70 / speedMultiplier) == 0) {
        let food = random(foodTypes);
        foods.push(food.copy());
    }

    for (let i = foods.length - 1; i >= 0; i--) {
        if (foods[i].y >= height + foods[i].h / 2) {
            hp--;
            foods.splice(i, 1);
        }
    }

    if (speedMultiplier < 5) speedMultiplier += 0.001;

    if (hp <= 0) {
        if (score > bestScore) {
            bestScore = score;
            storeItem("bestScore", score);
        }
        foods = [];
        score = 0;
        hp = 5;
        speedMultiplier = 1;

        textSize(128);
        textAlign(CENTER, CENTER);
        fill("red");
        text("GAME", width / 2, height / 2 - 100);
        text("OVER", width / 2, height / 2);

        fill("green");
        textSize(48);
        text("Press to start over", width / 2, 270);

        fill("white");
        text("Best score: " + bestScore, width / 2, 320);
        noLoop();
    }

    if (isLooping()) {
        textSize(32);
        let txt = "";
        for (let i = 0; i < hp; i++) {
            txt += '❤️';
        }
        textAlign(RIGHT, TOP);
        text(txt, width, 0);
    }
}

function mousePressed() {
    loop();
}