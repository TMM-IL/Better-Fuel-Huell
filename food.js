class Food {
    constructor(value, speed, img) {
        this.w = 30;
        this.h = 30;
        this.x = random(this.w / 2, width - this.w / 2);
        this.y = random(-30, -10);

        this.value = value;
        this.speed = speed;
        this.img = img;
    }

    show() {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.w, this.h);
    }

    update() {
        this.y += speedMultiplier * this.speed;
    }

    copy() {
        return new Food(this.value, this.speed, this.img);
    }
}