/**
 * Bases numéricas
 * Author: jm2c
 * 
 * Conversor y calculadora de bases numéricas.
 *
 * Todas las funciones reciben algunos datos de tipo string por dos motivos, primero, porque
 * los datos que se obtienen a partir de formulario web son de tipo texto y segundo, si la
 * base es mayor que 10 entonces se utilizan letras mezacladas con números, por lo mismo todas
 * las funciones regresan un string.
 */


/**
 * Convierte un número de una base a otra
 * @param {string} num El número a ser convertido.
 * @param {number} from La base en la que "num" está escrito.
 * @param {number} to La base a la cual se requiere convertir "num".
 * @return {string}
 */
function convert(num, from, to) {
    if(arguments.length != 3)
        throw 'Wrong number in parameters';
    
    if(from < 2 || from > 36 || to < 2 || to > 36)
        throw 'Base out of range';

    if(num.startsWith('-')) 
        throw 'Negative number';

    if(num.indexOf('.') >= 0)
        throw 'Possible float number';
    
    const number = parseInt(num, from);
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numArray = num.toString().split('');
    
    if(isNaN(number) || /[^A-Z0-9]/i.test(num))
        throw 'Wrong argument';
        
    for(let i = 0; i < numArray.length; i++){
        if( chars.indexOf(numArray[i]) >= from )
            throw 'Wrong formed number';
    }

    return number.toString(to).toUpperCase();
}

/**
 * Realiza la suma de dos números escritos en la base indicada.
 * @param {string} num1 El primer sumando.
 * @param {string} num2 El segundo sumando.
 * @param {number} base La base numérica en la cual están escritos num1 y num2.
 * @return {string} El resultado de la suma en la misma base que los números.
 */
function add(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a+b).toString(), 10, base);
}

/**
 * Realiza la resta de dos números escritos en la base indicada.
 * @param {string} num1 El minuendo.
 * @param {string} num2 El sustraendo.
 * @param {number} base La base numérica en la cual están escritos num1 y num2.
 * @return {string} El resultado de la resta en la misma base que los números.
 */
function substract(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a-b).toString(), 10, base);
}

/**
 * Realiza producto de dos números escritos en la base indicada.
 * @param {string} num1 El primer factor.
 * @param {string} num2 El segundo factor.
 * @param {number} base La base numérica en la cual están escritos num1 y num2.
 * @return {string} El resultado del producto en la misma base que los números.
 */
function multiply(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a*b).toString(), 10, base);
}

/**
 * Obtiene el cociente de hacer la división de dos números escritos en la base indicada.
 * @param {string} num1 El dividendo.
 * @param {string} num2 El divisor.
 * @param {number} base La base numérica en la cual están escritos num1 y num2.
 * @return {string} El cociente entero de num1/num2 en la misma base que los números.
 */
function quotient(num1, num2, base) {
    if(num2 === 0 || parseInt(num2) === 0)
        throw 'Division by zero';
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    const q = Math.floor(a/b);
    return convert(q.toString(), 10, base);
}

/**
 * Obtiene el residuo de hacer la división de dos números escritos en la base indicada.
 * @param {string} num1 El dividendo.
 * @param {string} num2 El divisor.
 * @param {number} base La base numérica en la cual están escritos num1 y num2.
 * @return {string} El residuo de num1/num2 en la misma base que los números.
 */
function residue(num1, num2, base) {
    if(num2 === 0 || parseInt(num2) === 0)
        throw 'Division by zero';
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a%b).toString(), 10, base);
}

module.exports = {
    convert: convert,
    add: add,
    substract: substract,
    multiply: multiply,
    quotient: quotient,
    residue: residue,
};

