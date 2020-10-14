const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode (expr) {
 
    function getIndividualSign (symbolOfNum){ // return string of '-...--' or '.'  
        let arrSign = [];
        arrSign[0] = symbolOfNum.substring(0,2);
        arrSign[1] = symbolOfNum.substring(2,4);
        arrSign[2] = symbolOfNum.substring(4,6);
        arrSign[3] = symbolOfNum.substring(6,8);
        arrSign[4] = symbolOfNum.substring(8,10);
        let arrSignMorze = '';

        for (let i=0; i<arrSign.length; i++){
            if (arrSign[i] === '10'){
                arrSignMorze = arrSignMorze + '.';
            } else {
                if (arrSign[i] === '11')
                arrSignMorze  = arrSignMorze + '-';
            }
        }
        return arrSignMorze;
    }//end getIndividualSign
    
    function cutExprOnSymbol(expr) { // cut enter string of individual symbol (10 elements);
      const count = expr.length/10;
      let arrOfSymbol = []; 
      let k = 10, j = 0 ;
      for (let i=0; i<count; i++) {
            arrOfSymbol[i] = expr.substring(j,k);
            j = k;
            k = k+10;
      }  

      return arrOfSymbol;
    } // end cutExprOnSymbol
function morzeDecoding (arrOfSymbol){ // принимаем массив и декодируем его посимвольно
    arrSymbolMorze = [];
    for (let i = 0; i<arrOfSymbol.length; i++){
      arrSymbolMorze[i] = getIndividualSign(arrOfSymbol[i]);
    }
    return  arrSymbolMorze;
}// end morzeDecoding

function getDecodeStringResult(arrSymbolMorze){
    let str = '';
    for (let i = 0; i< arrSymbolMorze.length; i++){
        if (arrSymbolMorze[i] === undefined || arrSymbolMorze[i] === '') {
            str = str + ' ';
        } else { str = str + MORSE_TABLE[arrSymbolMorze[i]]; }
        
    }
    return str;
}// end getDecodeStringResult 
 
  
return getDecodeStringResult(morzeDecoding(cutExprOnSymbol(expr)));

}// end global function

module.exports = {
    decode
}