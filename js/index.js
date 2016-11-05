// JavaScript File
//Math.pow(base, exponent)
    
    var a = Number(prompt('Enter a'));
    var b = Number(prompt('Enter b'));
    var c = Number(prompt('Enter c'));
    var x = 'x';
    var x1 = 'x1';
    var x2 = 'x2';
    


function mathPow(a, b, c, x, x1, x2) {
    var mathPow = a * Math.pow(x, 2) + b*x + c;
    var sqrtD = Math.pow(b, 2) + (4 * a + c);
    var mathSqrt1 = ( -b + Math.sqrt(sqrtD))/ 2 * a;
    var mathSqrt2 = ( -b - Math.sqrt(sqrtD))/ 2 * a;


}
document.write(sqrtD);
document.write(mathSqrt1);