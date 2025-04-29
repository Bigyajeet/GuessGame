const max=prompt('enter the maximum number till you guess');

const random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("user guess was right congrats");
        break;
    }
    else if(guess<random){
        guess=prompt("your guess was too small");
    }
    else{
        guess=prompt("your guess was too high");
    }
}