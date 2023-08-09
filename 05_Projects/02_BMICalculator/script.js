const form = document.querySelector("form")
console.log(form)
form.addEventListener('submit',
(obje)=> {
obje.preventDefault();
console.log("hii");
const weight = Number(document.getElementById("weight").value)
const height = Number(document.getElementById("height").value)
let ans = "";
let bmiClass = "";
if(weight <=0 || isNaN(weight))
{
    ans = "Please provide valid weight value";
    document.getElementById("result").innerHTML = ans;
}
else if(height<=0 ||isNaN(height))
{
    ans = "Please provide valid height value";
    document.getElementById("result").innerHTML = ans;
}
else
{
    ans = (weight/(height*height)).toFixed(2)
    document.getElementById("result").innerHTML = `The BMI is : ${ans}`;
    if(ans<18.5)
    bmiClass ="Under weight";
    else if(ans<24.9)
    bmiClass ="Normal Weight";
    else if(ans<29.9)
    bmiClass ="Overweight";
    else
    bmiClass ="Obesity";
    document.getElementById("cla").innerHTML = `You are : ${bmiClass}`;
}


})