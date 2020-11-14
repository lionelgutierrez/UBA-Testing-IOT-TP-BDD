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

Cuando('se elimina la clave {string}', function (clave) {
    // Write code here that turns the phrase above into concrete actions
    contexto.lista.delete(clave);
});

Entonces('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});