let generateColorBtn = document.querySelector("#generateColorBtn"); 
let applyBackgroundBtn = document.querySelector("#applyBackgroundBtn"); 
let generateTextColorBtn = document.querySelector("#generateTextColorBtn");
let copyColorBtn = document.querySelector("#copyColorBtn");
let copyTextBtn = document.querySelector("#copyTextColorBtn")



// Event listener for the "Generate Color" button
generateColorBtn.addEventListener("click", function() {
    let h3 = document.querySelector(".change-row:first-child .change h3"); // Selects the first h3 in the first row
    let colorBox = document.querySelector(".colorBox");
  
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    colorBox.style.backgroundColor = randomColor;
});

// Event listener for the "Generate Text Color" button
generateTextColorBtn.addEventListener("click", function() {
    let h3 = document.querySelector(".change-row:last-child .change h3"); // Selects the h3 in the second row
    let colorBox = document.querySelector(".colorBox");
  
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    colorBox.style.color = randomColor; // Updates the text color in the colorBox
});

// Event listener for the "Apply to Background" button
applyBackgroundBtn.addEventListener("click", function() {
    let body = document.body;
    let h3 = document.querySelector(".change-row:first-child .change h3");

    body.style.backgroundColor = h3.innerText; // Apply the color from the h3 text to the background
});

// Event listener for the "Copy Color" button
copyColorBtn.addEventListener("click",function(){
    let h3 = document.querySelectorAll(".change h3")[0];
    copyToClipboard(h3.innerText);
});
// Event listener for the "Copy Text Color" button
copyTextBtn.addEventListener("click",function(){
    let h3 = document.querySelectorAll(".change h3")[1];
    copyToClipboard(h3.innerText);
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(()=>{
        alert("RGB code copied to clipboard: " + text)
    });
}


