const [que,form,sco,inp] = [document.getElementById("question"),document.querySelector(".form"),document.querySelector(".score-value"),document.querySelector(".input")];

var operator = ["*","+","-","/"];
const operatorName = ["multiply by","plus","decreas","divide by"];

let [score,answer] = [0,questionGenerator()];


function questionGenerator(){
    let [num1,num2] = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
    let index = Math.floor(Math.random()*3)
    let [opre,refe] = [operator[index],operatorName[index]]
    que.textContent = `what is ${num1} ${refe} ${num2}`
    let result = eval(`${num1} ${opre} ${num2}`)
    return result
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    score += +inp.value === answer ? 1:-1
    sco.textContent = score
    answer = questionGenerator() 
    form.reset()
})