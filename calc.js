// document.getElementById("1").onclick=()=>{
//     document.getElementById("display").innerHTML+=1;
// }
// document.getElementById("2").onclick=()=>{
//     document.getElementById("display").innerHTML+=2;
// }
// document.getElementById("3").onclick=()=>{
//     document.getElementById("display").innerHTML+=3;
// }
// document.getElementById("4").onclick=()=>{
//     document.getElementById("display").innerHTML+=4;
// }
// document.getElementById("5").onclick=()=>{
//     document.getElementById("display").innerHTML+=5;
// }
// document.getElementById("6").onclick=()=>{
//     document.getElementById("display").innerHTML+=6;
// }
// document.getElementById("7").onclick=()=>{
//     document.getElementById("display").innerHTML+=7;
// }
// document.getElementById("8").onclick=()=>{
//     document.getElementById("display").innerHTML+=8;
// }
// document.getElementById("9").onclick=()=>{
//     document.getElementById("display").innerHTML+=9;
// }
// document.getElementById("0").onclick=()=>{
//     document.getElementById("display").innerHTML+=0;
// }
let input = document.getElementById("input").value;
input=Number(input);
input.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace" || key === "Delete") {
        display.innerHTML= display.innerHTML.toString().slice(0,-1);
    }else if(key=="0"){
        display.innerHTML+='0';
    }
});