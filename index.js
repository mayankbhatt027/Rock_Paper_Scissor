function openPopup()
{
    document.getElementById("popup").style.display="block";
}

function closePopup()
{
    document.getElementById("popup").style.display="none";
}

function next()
{
    document.getElementById("game").style.display="none";
    document.getElementById("cong").style.display="block";
    document.getElementById("rules-button").style.display="block";
}

function reload()
{
    document.location.reload();
}
const buttons = document.querySelectorAll('.pick'); 
const cScore = document.getElementById('cs');
const uScore = document.getElementById('us');

const main = document.getElementById('main');
const selection = document.getElementById('select');
const reset = document.getElementById('reset');

const user_select = document.getElementById('user_select'); 
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

// const openBtn = document.getElementById('open'); 
// const closeBtn = document.getElementById('close'); 
// const modal= document.getElementById('modal');
const choices = ['paper', 'rock', 'scissor'];

let cs = 0;
let us = 0;
let userChoice = undefined;

buttons.forEach((button) => {
button.addEventListener('click', () => {
userChoice = button.getAttribute('dchoice');




console.log(userChoice);
checkWinner();
});
});


reset.addEventListener('click',()=>{
    main.style.display='flex';
selection.style.display='none';
document.getElementById("next-button").style.display="none";
});

// openBtn.addEventListener('click',()=>{
//     main.style.display='flex';
// });
// closeBtn.addEventListener('click',()=>{
//     main.style.display='none';
// });




function checkWinner()
{
const computerChoice = pickRandomChoice();



updateSelection(user_select,userChoice);
updateSelection(computer_select,computerChoice);




if(userChoice==computerChoice)
{
    //draw
    winner.innerText='TIE UP';
}
else if((userChoice==='paper' && computerChoice==='rock')||(userChoice==='rock' && computerChoice==='scissor')||(userChoice==='scissor' && computerChoice==='paper'))
{
    //win
    updateUserScore(1);
    //updateComputerScore(-1);
    document.getElementById("winner").innerHTML = "<p>YOU WIN</p>";
}
else{
    //lose
    updateComputerScore(1);
    //updateUserScore(-1);
    document.getElementById("winner").innerHTML = "<p>YOU LOST</p>";
    //winner.innerText=;
}

main.style.display='none';
selection.style.display='flex';
}




function updateComputerScore(value) {
cs += value;
cScore.innerText = cs;
}

function updateUserScore(value) {
    us += value;
    uScore.innerText = us;
    }

function pickRandomChoice() {

let c = choices[Math.floor(Math.random() * choices.length)] 
console.log(c);
return c;
}



function updateSelection (selectionEl, choice)
{
// class reset
selectionEl.classList.remove('btn-paper'); 
selectionEl.classList.remove('btn-rock'); 
selectionEl.classList.remove('btn-scissor');
// update the img
const img = selectionEl.querySelector('img');
selectionEl.classList.add(`btn-${choice}`);
 img.src=`./assets/${choice}.svg`;
img.alt =choice;
document.getElementById("next-button").style.display="block";

}