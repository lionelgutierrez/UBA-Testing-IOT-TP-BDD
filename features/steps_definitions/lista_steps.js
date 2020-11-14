const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const Dado = require('@cucumber/cucumber').Given;
const Cuando = require('@cucumber/cucumber').When;
const Entonces = require('@cucumber/cucumber').Then;
const Lista = require("../../src/lista");

let contexto = {};

Dado('una lista vacía', function () {
    contexto.lista = new Lista();
});

Dado('una lista con los siguientes elementos', function (tabla) {
    contexto.lista = new Lista();
    tabla.rawTable.forEach(pareja => {
        contexto.lista.add(eval(pareja[0]), eval(pareja[1]));
    });
});

Cuando('se agrega la pareja {}', function (pareja) {
    pareja = JSON.parse(pareja);
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

Cuando('se busca la clave {string}', function (clave) {
    contexto.encontrado = contexto.lista.find(clave);
});

Cuando('se elimina la clave {string}', function (clave) {
    contexto.lista.delete(clave);
});

Cuando('se recupera la lista', function () {
    contexto.listaRecuperada = contexto.lista.devolverListaArray();
});

Entonces('el valor del primer elemento es {string}', function (valor) {
    expect(contexto.listaRecuperada[0].valor).is.equal(valor);
});

Entonces('el valor del segundo elemento es {string}', function (valor) {
    expect(contexto.listaRecuperada[1].valor).is.equal(valor);
});

Entonces('se obtiene el valor NaN', function () {
    expect(contexto.encontrado).is.NaN;
});

Entonces('se obtiene el valor {string}', function (valor) {
    expect(contexto.encontrado).is.equal(valor);
});

Entonces('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});
