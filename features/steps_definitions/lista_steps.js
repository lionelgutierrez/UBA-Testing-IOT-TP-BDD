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

Cuando('se agrega la pareja {}', function (pareja) {
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

Entonces('la lista tiene {int} elemento almacenado', function (cantidad) {
    expect(contexto.lista.count()).to.equal(1);
});