# language: es
# encoding: utf-8

Característica: Recuperar una lista ordenada con las claves

Escenario: Una lista con un solo elemento es una lista ordenada
    Dado una lista con los siguientes elementos
    | "clave" | "valor"|
    Cuando se recupera la lista 
    Entonces el valor del primer elemento es "valor"

Escenario: Una lista con un solo elemento modificado es una lista ordenada
    Dado una lista con los siguientes elementos
    | "clave" | "valor"|
    Cuando se agrega la pareja { "clave": "valor2" }
    Y se recupera la lista
    Entonces el valor del primer elemento es "valor2"
