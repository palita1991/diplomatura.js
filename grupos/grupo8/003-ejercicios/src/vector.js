


export class Vector {




    constructor(x, y) {


        this.x = x;
        this.y = y;
    }

    getValorx() {

        return this.x;
    }

    getValory() {
        return this.y;
    }

    sumar(vec) {

        this.x = vec.getValorx() + this.getValorx();
        this.y = vec.y + this.y;

        return { x: this.x, y: this.y }

    }

}