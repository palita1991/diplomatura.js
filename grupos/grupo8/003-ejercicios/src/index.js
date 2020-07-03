import {Collection} from './1.collection';
import {d} from './3.delay';
//import {api} from './4.api';
import {api2} from './5.api';
//import {delay, run} from './6.delay'
import {Vector} from './2.vector'

/*
let lista = [1,2,3,4];

var col = new Collection(lista);

console.log(col);

console.log(col.has(8));

d.delay("HOLA MUNDO", 3000);

d.run();
*/ 

console.log(new Vector(1, 2).sumar(new Vector(2, 3)));
