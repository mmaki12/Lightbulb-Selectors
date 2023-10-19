/// Write your code here
//<div id="lightbulb1" class="item lightbulb active">💡</div>
//<div id="lightbulb2" class="item lightbulb active">💡</div>
//<div id="lightbulb3" class="item lightbulb">💡</div>
//<h3 class = "subtitle">You've clicked the lights 0 times</h3>

let count = 0;
let output = document.querySelector("h3.subtitle");
const lightbulb1 = document.querySelector("#lightbulb1");
lightbulb1.addEventListener("click", function() {
    count ++
    output.innerHTML = "You've clicked the lights "+count+ " times"
    lightbulb1.classList.toggle("active")
})
const lightbulb2 = document.querySelector("#lightbulb2");
lightbulb2.addEventListener("click", function() {
    count ++
    output.innerHTML = "You've clicked the lights "+count+ " times"
    lightbulb2.classList.toggle("active")
})
const lightbulb3 = document.querySelector("#lightbulb3");
lightbulb3.addEventListener("click", function() {
    count ++
    output.innerHTML = "You've clicked the lights "+count+ " times"
    lightbulb3.classList.toggle("active")
})





