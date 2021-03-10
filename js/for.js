// Estrutura de repetição
// For
// break - Interrompe a execução do loop
// Continue - pula a execução do momento

let sOutPut = new String("");
let sChar = "@";
let sSpace = " ";
let iMaxRepeat = 50;
let iSpaceEdge = 0;

for (let iLine = 0; iLine <= iMaxRepeat; iLine++) {
    
    iSpaceEdge = (iMaxRepeat - iLine) / 2;

    if ((iLine > 1) && ((iLine % 2) === 0))
        continue;

    sOutPut += sSpace.repeat(iSpaceEdge);
    sOutPut += sChar.repeat(iLine);

    console.log(sOutPut);
    sOutPut = "";
}
