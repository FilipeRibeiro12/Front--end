   
   
   function realizaroperacoes(){
   
   var A = 10 + 15;
    var B = "10" + 2;
    var C = "10" * 2;
    var D = "10" / 3;
    var F = "10" % 3;
    var G = 10 + true;
    var H = "dez" + true;
    var I = 10 + false;
    var J = 10 * false;
    var K = true + true;

    document.write('10 + 15 = ' + A + '- (number)' + '<br>');
    document.write(' "10" + 2 = ' + B + ' - (String) '+'<br>');
    document.write(' "10" * 2 = ' + C + ' - (String) '+'<br>');
    document.write(' "10" / 3 = ' + D + ' - (String) '+'<br>');
    document.write(' "10" % 3 = ' + F + ' - (String) '+'<br>');
    document.write(' 10 + true = ' + G + ' - (Boolean) '+'<br>');
    document.write(' "dez" + true = ' + H + ' - (String) '+'<br>');
    document.write(' 10 + false = ' + I + ' - (Boolean) '+'<br>');
    document.write(' 10 * false = ' + J + ' - (Boolean) '+'<br>');
    document.write('true + true = ' + K + ' - (Boolean) '+'<br>');


}

realizaroperacoes();