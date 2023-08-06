function divisioninit(){

  settemplate(modes[currentmode].template, modes[currentmode].settings)

  for(var i = 0; i < 20; i++){
    adddivision(i==0, (i==0 ? [0,1] : null), currentdifficulty);
  }

}

function adddivision(main=false,setproblem=null,difficulty=0){

  let num1 = 0;
  let num2 = 0;

  if(difficulty == 0){
    num2 = Math.floor(Math.random() * 9) + 1;
    num1 = num2 * Math.floor(Math.random() * 10);
  }
  if(difficulty == 1){
    num2 = Math.floor(Math.random() * 9) + 1;
    num1 = num2 * Math.floor(Math.random() * 100);
  }
  if(difficulty == 2){
    num2 = Math.floor(Math.random() * 99) + 1;
    num1 = num2 * Math.floor(Math.random() * 100);
  }


  if(setproblem == null) problemlist.push([num1,num2]);
  else{
     problemlist.push(setproblem);
     num1 = setproblem[0]
     num2 = setproblem[1]
  }


  let problem = document.createElement("p");
  problem.innerHTML = num1 + " / " + num2 + " " + "="
  problem.classList.add("problem");
  if(main) problem.id = "mainproblem"

  let problems = document.getElementsByClassName("mainproblems")[0];
  problems.appendChild(problem);

}

function divisiontype(e){

  let input = document.getElementsByClassName("maininput")[0];

  let nonums = "";
  let nums = "0123456789"

  for(var i = 0; i < input.value.length; i++){
    if(nums.indexOf(input.value[i]) == -1) continue;
    nonums += input.value[i];
  }

  input.value  = nonums;


}

function divisionanswer(problem){
    return problem[0]/problem[1];
}

function divisionvalidate(answer, inputnumber){
  return answer==parseInt(inputnumber);
}

function divisionenter(e, press=false){
  validateanswer(e, divisionvalidate, adddivision, divisionanswer, press);
}
