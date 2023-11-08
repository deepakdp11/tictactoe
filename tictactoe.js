let currentPlayer="X";
let gameState=["","","","","","","","",""]
let winner=document.getElementById("winner");
let winnerDeclared=false;
const winConditon=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//handlemyclick
function handleClick()
{
    let td=event.target;
    let index=td.getAttribute("index");
    if(td.innerHTML=='')
    {
        td.innerHTML=currentPlayer;
        gameState[index]=currentPlayer;

    checkWinner();
    checkDraw();
    changePlayer();
    }
    
    //checkforwinner
    
}

function changePlayer(){
    currentPlayer = currentPlayer=="X" ? "O" : "X";
}

//initilize


//check for winner
function checkWinner(){
    for(let i=0;i<8;i++)
    {
        var a=winConditon[i][0];
        var b=winConditon[i][1];
        var c=winConditon[i][2];
        if(gameState[a]==currentPlayer && gameState[b]==currentPlayer && gameState[c]==currentPlayer ){
            winnerDeclared=true;
            winner.innerHTML="Winner is " + currentPlayer;
        }
    }
}


//check for draw
function checkDraw(){
    if(!gameState.includes("") && winnerDeclared==false)
    {
        winner.innerHTML="Game is Tied";
    }
}


function init(){
    var tdCells=document.getElementsByTagName('td');
    console.log(tdCells);
    for(let i=0; i<9;i++)
    {
        tdCells[i].addEventListener("click",handleClick)
    }
}

///relaoding the game
let restart=document.getElementsByClassName("btn")[0];
restart.addEventListener("click",function(){
    location.reload();
})
init();