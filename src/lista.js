module.exports = class Lista {
    #elementos;
    
    constructor() {
        this.#elementos = [];
    }

    add(clave, valor) {
        this.#elementos.push({'clave': clave, 'valor': valor});
    }

    indexOf(clave) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (this.#elementos[indice].clave == clave) {
                return indice;
            }
        }
        return NaN;
    }

    delete(clave) {
        var indice = this.indexOf(clave);
        if (!isNaN(indice)) {
            this.#elementos.splice(indice, 1);
            return
        }
    }

    find(clave) {
        var indice = this.indexOf(clave);
        if (!isNaN(indice)) {
            return this.#elementos[indice].valor;
        }
        return NaN;
    }
    
    count() {
        return this.#elementos.length;
    }
}
