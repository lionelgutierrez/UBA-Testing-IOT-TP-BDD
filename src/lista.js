module.exports = class Lista {
    #elementos;

    constructor(){
        this.#elementos = [];
    }

    add(key,value) {
        this.#elementos.push({"clave":key,"valor":value});  
    }

    count() {
        return this.#elementos.length; 
    }

    delete(key) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (this.#elementos[indice].clave == key) {
                this.#elementos.splice(indice, 1);
                return;
            }
        }
        return this.#elementos.splice(indice,1);
    }

/*
    
    constructor(){
        
    }
        count() {
        

    }

    find(clave) {
        var i = this.indice(clave);
        if (i >= 0) {
            return this.#elementos[i].valor;
        }
        else {
            return NaN;
        }
    }

    add(clave,valor){
        
        var i = this.indice(clave);
        if (i >= 0) {
            this.#elementos[i].valor = valor;
        }
        else {
            this.#elementos.push({clave,valor});  
        }
        
    }

    devolverListaArray() {
        var listasalida = this.#elementos.slice();
        listasalida.sort(function(a,b) {return ((a.clave < b.clave) ? -1 : ((a.clave >  b.clave) ? 1 : 0));});
        return listasalida;
    }

    delete(clave) {
        
        var i = this.indice(clave);
        if (i >= 0) {
           this.#elementos.splice(i,1);
        }
    }

    indice(clave) {
        for(var i=0; i<this.#elementos.length;i++ )  {
            if (this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return -1;
    }

*/


}