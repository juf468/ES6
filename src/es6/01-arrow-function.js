//SON ALTERNATIVA DE LAS FUNCTION COMUNES, SON MAS AMIGABLES EN CUANTO A SINTAXIS.
// No tiene sus propios enlaces a this o super y no se debe usar como métodos.
// No tiene argumentos o palabras clave new.target.
// No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
// No se puede utilizar como constructor.
// No se puede utilizar yield dentro de su cuerpo.

const Square = (num) => {
    return num * num;
}
//............................................................................................................//
const Square2 = num => num * num // al ser un solo parametro puedo omitir '()' y'{}' = funcion de return implicito
//............................................................................................................//


