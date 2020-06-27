// Maksimum toplam, 9 rakamı içeren bir sayıdır
// 9 ^ 5 = 59049
// 99 => 118098
// 999 => 177147
// 9999 => 236196
// 99999 => 295245
// 999999 => 354294

// Böylece üst sınırı 354294'e yerleştirebilir
var upper = 354294;
var total = 0;
for(var i = 2; i < upper; i++){
    var n = 0;
    var sum = 0;
    while(Math.pow(10,n) <= i && sum <= i){
        var digit = parseInt((i.toString()).substr(n,1));
        sum += Math.pow(digit,5);
        n++;
    }
    if(sum == i){
        total += i;
        // console.log(i);
    }
}

console.log(total);
