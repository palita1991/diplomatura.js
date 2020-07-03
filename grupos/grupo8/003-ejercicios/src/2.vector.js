export class Vector{

constructor(x,y){
    this.x=x;
    this.y=y;
}

getX(){return x}

getY(){return y}

sumar(vector2){

    let vector3 = new Vector();

    vector3.x= this.x+vector2.x;
    vector3.y= this.y+vector2.y;

    return vector3;
}

}