// Estrutura de repetição
// while

let lContinue = true;
let iProgressLine = 0;
let lToUp = true;
let iCountCurrent = 0;
let iCountMax = 14;
let sChar = "@"
let sCharSpace = " ";
let sTextOutPut = new String();
let iMaxWidth = 80;
let iRepeatSpace = 0;
let iRepeatChar = 0;

while (lContinue) {

    iProgressLine++;

    if (lToUp && (iCountCurrent === iCountMax)) {lToUp = false;}    

    iCountCurrent += lToUp ? 1 : -1;

    if (iCountCurrent === 0) {
        lContinue = false;
        continue;
    }

    iRepeatChar = Number((iMaxWidth / iCountMax) * iCountCurrent).toFixed(0);
    iRepeatSpace = Number((iMaxWidth - iRepeatChar)/2).toFixed(0);
    sTextOutPut = sCharSpace.repeat(iRepeatSpace);
    sTextOutPut += sChar.repeat(iRepeatChar);

    console.log(sTextOutPut);
    
}