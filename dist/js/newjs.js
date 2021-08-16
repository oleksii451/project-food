'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColouredRectangleWithText extends Rectangle {
    constructor(height, width, bgColour, text) {
        super(height, width);
        this.text = text;
        this.bgColour = bgColour;
    }

    showMyProps() {
        console.log(`Tekst: ${this.text}, cvet:${this.bgColour}`);
    }
}

const ColouredRect = new ColouredRectangleWithText(20, 20, 'blue', 'come on');

ColouredRect.showMyProps();
console.log(ColouredRect.calcArea());

// const square = new Rectangle(20,20);
// const long = new Rectangle(300,10);
//
// console.log(square.calcArea(), long.calcArea());