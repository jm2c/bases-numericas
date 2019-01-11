const bases = require('./bases');
// Conversion de una base a otra
describe('Conversiones', () => {
    test('No convertir si es la misma base', () => {
        expect(bases.convert('5', 10, 10)).toBe('5');
        expect(bases.convert('1A', 16, 16)).toBe('1A');
        expect(bases.convert('A1', 16, 16)).toBe('A1');
    });

    test('Conversiones sistema decimal', () => {
        expect(bases.convert('12', 10, 2)).toBe('1100');
        expect(bases.convert('1100', 2, 10)).toBe('12');
        expect(bases.convert('240', 10, 16)).toBe('F0');
        expect(bases.convert('F0', 16, 10)).toBe('240');
    });
    
    test('Conversiones entre bases', () => {
        expect(bases.convert('101111', 2, 8)).toBe('57');
        expect(bases.convert('1212', 3, 16)).toBe('32');
        expect(bases.convert('C4', 16, 5)).toBe('1241');
        expect(bases.convert('P', 32, 20)).toBe('15');
    });

    test('Números mal formados', () => {
        expect(bases.convert('uno', 10, 16)).toThrow();
        expect(bases.convert('1A', 10, 16)).toThrow();
        expect(bases.convert('3', 2, 10)).toThrow();
        expect(bases.convert('-3', 10, 10)).toThrow();
        expect(bases.convert('2+2', 10, 10)).toThrow();
        expect(bases.convert('3.5', 10, 10)).toThrow();
    });

    test('Parámetros incorrectos', () => {
        expect(bases.convert()).toThrow();
        expect(bases.convert('10')).toThrow();
        expect(bases.convert('10', 10)).toThrow();
    });
});

// SUMA
describe('Suma', () => {
    test('Suma de dos números', () => {
        expect(bases.add('4', '5', 10)).toBe('9');
        expect(bases.add('4', '5', 8)).toBe('11');
        expect(bases.add('8', '4', 16)).toBe('C');
        expect(bases.add('1001', '11', 2)).toBe('1100');
    });
});

// RESTA
describe('Resta', () => {
    test('Resta de dos números', () => {
        expect(bases.substract('9', '5', 10)).toBe('4');
        expect(bases.substract('11', '5', 8)).toBe('4');
        expect(bases.substract('C', '4', 16)).toBe('8');
        expect(bases.substract('10', '2', 16)).toBe('E');
        expect(bases.substract('1100', '11', 2)).toBe('1001');
    });
});

// MULTIPLICACIÓN
describe('Multiplicación', () => {
    test('Multiplicación de dos números', () => {
        expect(bases.multiply('9', '5', 10)).toBe('45');
        expect(bases.multiply('7', '7', 8)).toBe('61');
        expect(bases.multiply('C', '4', 16)).toBe('30');
        expect(bases.multiply('7', '2', 16)).toBe('E');
        expect(bases.multiply('1100', '11', 2)).toBe('100100');
    });
});

// DIVISIÓN
describe('División y residuo', () => {
    test('División de dos números', () => {
        expect(bases.quotient('7', '7', 10)).toBe('1');
        expect(bases.residue('7', '7', 10)).toBe('0');
        
        expect(bases.quotient('5', '10', 10)).toBe('0');
        expect(bases.residue('5', '10', 10)).toBe('5');

        expect(bases.quotient('8', '2', 10)).toBe('4');
        expect(bases.residue('8', '2', 10)).toBe('0');

        expect(bases.quotient('20', '3', 10)).toBe('6');
        expect(bases.residue('20', '3', 10)).toBe('2');

        expect(bases.quotient('20', '3', 8)).toBe('5');
        expect(bases.residue('20', '3', 8)).toBe('1');

        expect(bases.quotient('20', '3', 16)).toBe('A');
        expect(bases.residue('20', '3', 16)).toBe('2');

        expect(bases.quotient('1E', '10', 16)).toBe('1');
        expect(bases.residue('1E', '10', 16)).toBe('E');

        expect(bases.quotient('1100', '101', 2)).toBe('10');
        expect(bases.residue('1100', '101', 2)).toBe('10');
        
        expect(bases.quotient('1', '0', 10)).toThrow();
        expect(bases.residue('1', '0', 10)).toThrow();
        expect(bases.quotient('1', '0', 5)).toThrow();
        expect(bases.residue('1', '0', 5)).toThrow();
    });
});
