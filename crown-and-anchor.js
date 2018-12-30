function rand(m,n){
    return m + Math.floor((n-m+1) * Math.random());
}

function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"] [rand(0,5)];
}

$(document).ready(function(){
    'use strict';
    console.log('Loading crown-and-anchor.js...');

    let funds = 50;
    let round = 0;

    while(funds > 1 && funds < 100){
        round++;

        console.log(`${round} round:`);
        console.log(`Remaining fund: ${funds}`);

        let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
        let totalBet = rand(1, funnds);

        if(totalBet === 7){
            totalBet = funds;
            bets.heart = totalBet;
        } else {
            let remaining = totalBet;
            do {
                let bet = rand(1, remaining);
                let face = randFace();
                bets[face] = bets[face] + bet;
                remaining = remaining - bet;
            } while (remaining > 0);
        } 
        funds = funds - totalBet;
    
        const hand = [];
        for(let roll = 0; roll < 3; roll++){
            hand.push(randFace());
        }

        let winnings = 0;
        for(let die = 0; die < hand.length; die++){
            let face = hand[dice];
            if(bets[face] > 0){
                winnings = winnings + bets[face];
            }
        }

        funds += winnings;

    }

    console.log(`Last remaining fund: ${funds}`);

});