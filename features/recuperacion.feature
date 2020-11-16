# language: es
# encoding: utf-8

Característica: Recuperar una lista ordenada con las claves

Escenario: Una lista con tres elementos desordenados, al recuperar la lista de claves, la misma esta ordenada
    Dado una lista con los siguientes elementos
    | "claveInicial" | "valor"|
    Cuando se agrega la pareja { "claveMayor": "valor2" }
    Y se agrega la pareja { "claveAgregadaMenor": "valor3" }
    Y se recupera la lista de claves
    Entonces la lista de claves esta ordenada 