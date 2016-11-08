// JavaScript File
//Math.pow(base, exponent)

    var a = Number(prompt('Enter a'));
    var b = Number(prompt('Enter b'));
    var c = Number(prompt('Enter c'));

    var sqrtPov = (Math.pow(b, 2)) - 4 * a * c;
    console.log(sqrtPov);
    var sqrtD = Math.sqrt(sqrtPov);
    console.log(sqrtD);

    if (sqrtD > 0) {
        b=-b;
        var x1 = (b + sqrtD) / (2 * a);
        document.write('D > 0 / ',x1);
        var x2 = (b - sqrtD) / (2 * a);
        document.write(' D > 0 / ',x2);
    }  else {
        var x3 = - b / (2 * a);
        var x4 = - b / (2 * a);
        document.write('0 / ', x2, x3);
    }