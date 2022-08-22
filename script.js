const btn = document.getElementById("btn");
const clicksElement = document.getElementById("clicks");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");

var clickCount = 0;
load();

btn.addEventListener("click", click);
saveBtn.addEventListener("click", save);
loadBtn.addEventListener("click", load);


function click(){
  clickCount++;
  update();
  save();
}

function update(){
  clicksElement.innerHTML = clickCount + " Clicks";
}

function save(){
  localStorage.setItem("clickCount", clickCount);
}

function load(){
  if(localStorage.hasOwnProperty("clickCount")){
    clickCount = localStorage.getItem("clickCount")
    update();
  }
}
