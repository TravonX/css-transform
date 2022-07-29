
// Get the box
let theBox = document.getElementById("box");

// Get all the buttons
let translateBtn = document.getElementById("btn1");
let rotateBtn = document.getElementById("btn2");
let scaletBtn = document.getElementById("btn3");
let scaleX_Btn = document.getElementById("btn4");
let scaleY_Btn = document.getElementById("btn5");
let skewX_btn = document.getElementById("btn6");
let skewY_btn = document.getElementById("btn7");
let skewBtn = document.getElementById("btn8");
let maxtrixBtn = document.getElementById("btn9");

translateBtn.addEventListener("click", function(){
    theBox.style.transform = "translate(20px,50px)";
});

rotateBtn.addEventListener("click", function(){
    theBox.style.transform = "rotate(20deg)";
});
scaletBtn.addEventListener("click", function(){
    theBox.style.transform = "scale(1,2)";
});
scaleX_Btn.addEventListener("click", function(){
    theBox.style.transform="scaleX(5)";
});
scaleY_Btn.addEventListener("click", function(){
    theBox.style.transform = "scaleY(4)";
});
skewX_btn.addEventListener("click", function(){
    theBox.style.transform = "skewX(10deg)";
});
skewY_btn.addEventListener("click", function(){
    theBox.style.transform = "skewY(20deg)";
});;
skewBtn.addEventListener("click", function(){
    theBox.style.transform = "skew(10deg, 15deg)";
});
maxtrixBtn.addEventListener("click", function () {
    theBox.style.transform = "matrix(1, -0.3, 0, 1, 0, 0)";
})

