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

function add(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a+b).toString(), 10, base);
}

function substract(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a-b).toString(), 10, base);
}

function multiply(num1, num2, base) {
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    return convert((a*b).toString(), 10, base);
}

function quotient(num1, num2, base) {
    if(num2 === 0 || parseInt(num2) === 0)
        throw 'Division by zero';
    const a = parseInt(convert(num1, base, 10));
    const b = parseInt(convert(num2, base, 10));
    const q = Math.floor(a/b);
    return convert(q.toString(), 10, base);
}

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