import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export class Collection {

    constructor(lista=[]){
        this.lista=lista;
    };

    add(elem) {
        this.lista.push(elem);
    }

    delete(elem){

    }

    has(elem){
        return this.lista.includes(elem);
    }
}
