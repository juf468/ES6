var lastName = 'David';
lastName = 'Oscar';
console.log(lastName); // Oscar, porque se reasigno la variable.
//............................................................//

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);// Kiwi, se reasigna tambien.

//............................................................//

const animal = 'Dog';
animal = 'Cat';
console.log('animal :>> ', animal);// ERROR, Las constantes no se reasignan.

//............................................................//

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';//FUNCTION SCOPE
        let fruit2 = 'Kiwi';// BLOCK SCOPE (SOLO PUEDEN SER ACCEDIDAS DENTRO DEL BLOQUE DONDE SON DECLARADAS)
        const fruit3 = 'Banana';//BLOCK SCOPE (SOLO PUEDEN SER ACCEDIDAS DENTRO DEL BLOQUE DONDE SON DECLARADAS)
    }
    console.log('fruit1 :>> ', fruit1);
    console.log('fruit2 :>> ', fruit2);
    console.log('fruit3 :>> ', fruit3);
}
fruits(); //ERROR AL EJECUTAR, SOLO ENTRA EN CLO FRUIT2 PORQUE NO SE ENCONTRO EL VALOR,

//............................................................//
//EN ESTE EJEMPLO SI SON ACCEDIDAS DENTRO DEL IF Y FUNCIONAN LOS CLO
const Fruits = () => {
    if (true) {
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log('fruit2 :>> ', fruit2);//Kiwi
        console.log('fruit3 :>> ', fruit3);//Banana
    }
  
}
fruits()