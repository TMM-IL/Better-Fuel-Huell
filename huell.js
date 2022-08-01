class Huell {
    constructor() {
        this.x = width / 2;
        this.w = 50;
        this.h = 50;
        this.v = 30;
    }

    show() {
        //rectMode(CENTER);
        //rect(this.x, height-this.h/2, this.w, this.h);
        imageMode(CENTER);
        image(huellIMG, this.x, height - this.h / 2, this.w, this.h);
    }

    update() {
        for (let i = 0; i < this.v; i++) {
            this.x += Math.sign(mouseX - this.x);
            this.x = constrain(this.x, this.w / 2, width - this.w / 2);
        }

        for (let i = foods.length - 1; i >= 0; i--) {
            let food = foods[i];
            let y = height - this.h / 2;
            if (abs(y - food.y) <= 5 && abs(this.x - food.x) <= this.w / 3) {
                //eat
                score += food.value;
                foods.splice(i, 1);
            }
        }
    }
}