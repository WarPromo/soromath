let divisionpreset = {
  id: "divisionequation",
  diffs: [0,1,2],
  template: "template1equation",
  addproblem: adddivision,
  ontype: divisiontype,
  getanswer: divisionanswer,
  validate: divisionvalidate,
  speechText: divisionspeech,
  name: "division",
  settings: {
    preset: "easy",
    presets:{
      "easy":{
        range1: [0,9],
        range2: [0,9]
      },
      "medium":{
        range1: [0,99],
        range2: [0,99]
      },
      "hard":{
        range1: [0,999],
        range2: [0,999]
      },
      "custom":{}
    },
    range1: [0,9],
    range2: [0,9],
  },
  settingsgui: {

    range1: null,
    range2: null,
    doneinit: false,
    init: basicpresetgen("Divisor Range", "Answer Range"),
    setpreset: setpreset,
    matchpreset: matchpreset,

  }
}


function adddivision(main=false,self=divisionpreset,name=null){

  let num1 = Math.floor(Math.random() * (self.settings.range1[1] - self.settings.range1[0] + 1) + self.settings.range1[0]);
  let num2 = Math.floor(Math.random() * (self.settings.range2[1] - self.settings.range2[0] + 1) + self.settings.range2[0]);

  if(main == false) problemlist.push([name,[num1,num2]]);
  else{
    num1 = 1
    num2 = 1
    problemlist.push([name,[num1,num2]]);
  }


  let problem = document.createElement("p");
  problem.innerHTML = num1 + "/" + num2 + " " + "="
  problem.classList.add("problem");
  if(main) problem.id = "mainproblem"

  let problems = document.getElementsByClassName("mainproblems")[0];
  problems.appendChild(problem);

  return problem;

}

function divisionspeech(problem){

  return (problem[0] < 0 ? "negative " : "") + Math.abs(problem[0]) + " over " + (problem[1] < 0 ? "negative " : "") + Math.abs(problem[1]);



}


function divisiontype(e){

  let input = document.getElementsByClassName("maininput")[0];

  let nonums = "";
  let nums = "-0123456789"

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
