// Temel 10 basamaklı sayı
function numDigits(n){
    
    return String(n).length;

// Aşağıdaki teoride çalışır, ancak kayan nokta hatası
// bazı hatalar oluşturur (örneğin 1000 için 3 döndürür)
// dönüş 1 + Math.floor (Math.log (n) /Math.LN10);
}

function dofN(n){

    var i = 0;
    var digits = 0;
    while(digits < n){
        i++;
        digits += numDigits(i);
    }

    console.log(i,n-digits,String(i).substr(numDigits(i)-1+(n-digits),1));
    return parseInt(String(i).substr(numDigits(i)-1+(n-digits),1));
}

console.log(dofN(1) * dofN(10) * dofN(100) * dofN(1000) * dofN(10000) * dofN(100000) * dofN(1000000));
