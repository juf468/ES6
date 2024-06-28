//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log('a, b :>> ', a, b);// clo = Apple, Banana
console.log('fruits[1] :>> ', fruits[1]);// clo = Banana

//Object destructuring

let user = {username: 'Oscar', age: 34};
let { username, age} = user;
console.log('username, age :>> ', username, age); //clo= Oscar, 34
console.log('user.age :>> ', user.age);// clo = 34

//* SPREAD OPERATOR *//

let person = {name: 'Oscar', age: 24};
let country = 'MX';

let data = {...person, country}//desestructura person, trae esos datos y los une con el de country
console.log('data :>> ', data); //clo = data :>>  { name: 'Oscar', age: 24, country: 'MX' }

//EJ 2:
let person2 = {name: 'Oscar', age: 24};
let country2= 'MX';

let data2 = {id: 1, ...person2, country2}
console.log('data2 :>> ', data2); //clo = data2 :>>  { id: 1, name: 'Oscar', age: 24, country2: 'MX' }

// REST

function sum(num, ...values){
    console.log('values :>> ', values);
    console.log('num + values[0] :>> ', num + values[0]);
    return num + values[0]
}

sum(1, 1, 2, 3)//num tomara el primer 1 y values el resto de valores, values en posicion 0 es 1

/// EJERCICIO///
// En este deafío recibirás dos objetos JSON por parámetros.

// Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

// JSON 1:

// {
//     name: "Mr. Michi",
//     food: "Pescado"
// }

// JSON 2:

// {
//     age: 12,
//     color: "Blanco"
// }

// La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no envíar los parámetros.

// Input:

// solution({
//     name: "Bigotes",
//     food: "Pollito"
// }),

// Output:

// {
//     name: "Bigotes",
//     food: "Pollito",
//     age: 12,
//     color: "Blanco"
// }

export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {
      ...json1,
      ...json2,
    };
  }

  //otr forma
  export function solution(json1 = {}, json2 = {}) {
    const defaultJson1 = {
      name: "Mr. Michi",
      food: "Pescado"
    }
    const defaultJason2 = {
      age: 12,
      color: "Blanco"
    }
    return {...defaultJson1, ...json1, ...defaultJason2, ...json2}
  }
  