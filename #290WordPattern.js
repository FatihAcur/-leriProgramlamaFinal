/**
* Anahtar: önce str'yi bir diziye dönüştürür
  * İki harita: 1) ilk harita dizesini dize dizisine eşler,
  * 2) ikinci harita dizeyi desene eşler
  * Deseni ve dizeyi eşleştirmek için sadece bir harita kullanırsanız, farklı desen [i]
  * dize dizisinden aynı dizeye sahip olabilir.
 *
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strArray = str.split(" ");
    if (pattern.length !== strArray.length) return false;
    var patternToStr = {};
    var strToPattern = {}
    for (var i = 0; i < pattern.length; i++) {
        if (pattern[i] in patternToStr) {
            if (patternToStr[pattern[i]] !== strArray[i]) {
                return false;
            }
        } else if (strArray[i] in strToPattern) {
            if (strToPattern[strArray[i]] !== pattern[i]) {
                return false;
            }
        }else {
            patternToStr[pattern[i]] = strArray[i];
            strToPattern[strArray[i]] = pattern[i];
        }
    }
 
    return true;
 };
 
 // same as first solution, just a bit concise, 80ms
 var wordPattern = function(pattern, str) {
     var strArray = str.split(" ");
     if (pattern.length !== strArray.length) return false;
     var patternToStr = {};
     var strToPattern = {}
     for (var i = 0; i < pattern.length; i++) {
         if (patternToStr[pattern[i]] && (patternToStr[pattern[i]] !== strArray[i])) {
             return false;
         } else if (strToPattern[strArray[i]] && (strToPattern[strArray[i]] !== pattern[i])) {
             return false;
         } else {
             patternToStr[pattern[i]] = strArray[i];
             strToPattern[strArray[i]] = pattern[i];
         }
     }
 
     return true;
 };
