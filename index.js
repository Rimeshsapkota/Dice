function handlerButton(){
    const player1=Math.floor(Math.random()*6)+1;
    const playDice=`Images/ludo${player1}.png`
    document.getElementById("dice1").setAttribute("src",playDice);

    const player2=Math.floor(Math.random()*6)+1;
    const playDice1=`Images/ludo${player2}.png`
    document.getElementById("dice2").setAttribute("src",playDice1);

    if(player1===player2){
        document.getElementById("result").innerText="Draw"
    }
    else if(player1>player2){
        document.getElementById("result").innerText="Dice 1 is winner"
    }
    else{
        document.getElementById("result").innerText="Dice 2 is winner"
    }
    
}