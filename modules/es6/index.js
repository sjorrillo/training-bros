// javascript no es tipado y los errores se conocen en tiempo de ejecución.

// DECLARAR VARIABLES
var nomber = "José"; // ya no se debe usar
let nomber02 = "Javier";
const nomber03 = "Noe";

nomber02 = "aaa";

// OPERADORES:
// +, -, *, /, %, <, > <=, >=, ==, ===, !=, !==, !
const value = Math.pow(3, 2);
console.log(value);

// JSON
const a = {
    nombre: "javier",
    saludar: () => {
        console.log("hola");
    }
}

a.saludar();

// ESTRUCTURAS DE DATOS
// array
const list = [5,4,3,10,20, 4, 3];
// Sets -> lista de elementos únicos. 
// Maps ->  objeto clave valor,
// Los sets y maps se instancian -> new Set(), new Map()

const unicos = [];
for (let index = 0; index < list.length; index++) {
    if (!unicos.includes(list[index])) {
        unicos.push(list[index]);
    }
}

console.log(list);
console.log(unicos);
console.log([...new Set(list)]); // conviertes un iterable a array
console.log(Array.from(new Set(list)));// conviertes un iterable a array

const flags = new Set();

flags.add("pe");
console.log(flags);

// PRIMITIVOS
const valueStr = "100"; // string
const valueNum = 100; // numero
const valueDouble = 100.00; // numero
const valueBool = true; // booleano
const valueNull = null; // null
const valueUndefined = undefined; // undefined
// NaN -> Not a Number, ocurre cuando tratas de convertir una cadena a numero y no es posible

function saludar(a, b) {
    console.log("Hola " + a + " " + b);
    console.log(`Hola ${a} - ${b}`); // Template string
}

saludar("jose", "a");

// Estructuras de control
// if, else, switch, for, while
// coerción, implicita y explicita -> es pasar de un tipo a otro o convertir

const left = "10";
const right = 10;
if (left == right) { // coerción implicita compara el valor... aquí existe un concepto llamado coerción
    console.log("son iguales con dos =");
}

if (left === right) { // compara valor y tipo... 99.9% de las veces se debe usar este 
    console.log("son iguales con tres =");
}

console.log(typeof left);
console.log(typeof right);
console.log(`${right}`);
console.log(+left); // para convertir de sring a numero: +cadena, parseInt, parseFloat

// FUNCTIONS
// functions antes de ES6
function factorial(numero) {
    if (numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
}

function sumar(a, b) {
    return a + b;
}

console.log(`factorial de 5 -> ${factorial(5)}`);
console.log(sumar(3, 2));

// functiones flecha
const factorial02 = (numero) => {
    if (numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
};


const sumar02 = (a,b) =>  a + b;

console.log(`factorial de 6 -> ${factorial(6)}`);
console.log(sumar(3, 3));

// HIGH ORDER METHODS -> los high order -> son funciones que aceptan como parametro otra funcion.
// funciones que trabajan con arrays: 
    // filter: filtrar elementos -> toma un array y retorna otro con menos elementos
    // map: mapear o convertir elenetos -> toma un array de n elementos y retorna otro array de n elementos
    // some: Verifica si almenos un elemento cumple una condicion -> toma un array y retorna un boleano
    // find: encuentra un elemento -> toma un array y retorna un elemento, si el elemento no existe retorna null
    // reduce: acumula los elementos -> toma un array y puede retornar un scalar (string, numero, etc), un array o un objeto.
    // every: verifica si cada elemento cumple una condicion => toma un array y retorna un boleano -> (si el array esta vacio retorna true)
    // findIndex: retorna la posicion en la que se encuentra el elemento => toma un array y retotna un numero -> si lo encuentra retorna la posicion si no lo encuentra retorna -1;


const numeros = [1,2,3,4,5,10];

const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);

const incrementos = numeros.map((valor) => valor + 5);
console.log(incrementos);

const existeElTres = numeros.some((valor) => valor === 3);
console.log(existeElTres);

const elDiez = numeros.find((valor) => valor === 10);
console.log(elDiez);

const theSum = numeros.reduce((acc, valor) => {
    console.log(`${acc} - ${valor}`);
    acc += valor;
    return acc;
}, 0);

console.log(theSum);

// `Es Par -> ${valor}`
const result1 = numeros
    .filter((valor) => valor % 2 === 0)
    .map((x => `Es Par -> ${x}`));

console.log(result1);

const result2 = numeros.reduce((acc, valor) => {
    if (valor % 2 === 0) {
        acc.push(`Es Par -> ${valor}`);
    } 
    return acc;

}, []);

console.log(result2);

// {
//     1: `Es Par -> ${valor}`,
//     2: `Es Par -> ${valor}`,
// }
const result3 = numeros.reduce((acc, valor) => {
    acc[`key_${valor}`] = `Es Par -> ${valor}`;
    return acc;
}, {});

console.log(result3);

// CONCEPTOS QUE NECESITAS SABER PARA REACT
// desctructuring, se puede hacer para objetos y arrays
// spread operator (...)
const data = {
    el_nombre: "José",
    apellido: "Perez",
    edad: 20,
};

const x = data.el_nombre;
const { el_nombre: nombre, ...restProps } = data;
console.log({ x, nombre });
console.log("rest props", restProps);

const values = [10,20, 30, 40];
const [primervalor, ...restValues] = values;
console.log(primervalor)
console.log("todos los demas", restValues);

// en javascript totos los objetos son por referencia
// mas spreadoperator, para copia
const invoice = {
    monto: 200,
    ruc: "123456789",
};

const incrementarMonto = (factura) => {
    factura.monto += 20;
    return factura;
}

// const resultX = incrementarMonto(invoice);
const resultX = incrementarMonto({ ...invoice }); // estas creando otro objeto con las mismas propiedades
console.log("invoice", { invoice, resultX });

// CALLBACK
// es una funcion que se pasa como argumenteo, la cual puede ser llamada si una condicion es cumplida
const subirArchivo = (elArchivo, onSuccess) => {
    console.log("inicio");
    setTimeout(() => {
        console.log(`El archivo -> ${elArchivo}`);
        if (onSuccess) {
            onSuccess(`callback: El archivo -> ${elArchivo}`);
        }
        // onSuccess && onSuccess(`callback: El archivo -> ${elArchivo}`);
    }, 2000);
    console.log("termino");
};

subirArchivo("image.jpg", (mensaje) => {
    console.log(mensaje);
});

// CLOSURES: es una funcion dentro de otra, tiene que ver con contextos (scopre)
// los clousres se crean con el objetivo de tener acceso a la funcion padre

const sumarXConFactor = (left) => {
    const factorX = 10;
    return (right) => {
        return left + right + factorX;
    };
}

const sumaCinco = sumarXConFactor(5);
console.log(sumaCinco(4));
console.log(sumaCinco(5));
console.log(sumaCinco(6));

// PROMESAS
// javascript es asincrono
// new Promise
// async await
// const getUsers = () => new Promise((resolver, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "GET",
//         "Content-Type": "application/json",
//     }).then(response => {
//         console.log("response", response);
//         resolver();
//     }).catch(error => {
//         console.log("error", error);
//         reject();
//     })
// });

// getUsers();
console.log("despues de promesa");
