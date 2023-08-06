function subtractioninit(){

  settemplate(modes[currentmode].template, modes[currentmode].settings)

  for(var i = 0; i < 20; i++){
    addsubtraction(i==0, (i==0 ? [0,0] : null), currentdifficulty);
  }

}

function addsubtraction(main=false,setproblem=null,difficulty=0){

  let num1 = 0;
  let num2 = 0;

  if(difficulty == 0){
    num1 = Math.floor(Math.random() * 10)
    num2 = Math.floor(Math.random() * 10);
  }
  if(difficulty == 1){
    num1 = Math.floor(Math.random() * 100)
    num2 = Math.floor(Math.random() * 100);
  }
  if(difficulty == 2){
    num1 = Math.floor(Math.random() * 1000)
    num2 = Math.floor(Math.random() * 1000);
  }

  if(setproblem == null) problemlist.push([num1,num2]);
  else{
     problemlist.push(setproblem);
     num1 = setproblem[0]
     num2 = setproblem[1]
  }


  let problem = document.createElement("p");
  problem.innerHTML = num1 + "-" + num2 + " " + "="
  problem.classList.add("problem");
  if(main) problem.id = "mainproblem"

  let problems = document.getElementsByClassName("mainproblems")[0];
  problems.appendChild(problem);

}

function subtractiontype(e){

  let input = document.getElementsByClassName("maininput")[0];

  let nonums = "";
  let nums = "-0123456789"

  for(var i = 0; i < input.value.length; i++){
    if(nums.indexOf(input.value[i]) == -1) continue;
    nonums += input.value[i];
  }

  input.value  = nonums;


}
function subtractionanswer(problem){
    return problem[0]-problem[1];
}

function subtractionvalidate(answer, inputnumber){
  return answer==parseInt(inputnumber);
}

function subtractionenter(e, press=false){
  validateanswer(e, subtractionvalidate, addsubtraction, subtractionanswer, press);
}
