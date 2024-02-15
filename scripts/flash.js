// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);

//     // show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList);
// }

function handlekeyboardbuttonpress(event){
    const playerpressed = event.key;
    console.log("payer pressed " , playerpressed);

    // get the expected to pressed
    const currentAlphabateelement =document.getElementById('currente-alphabate')
    const currentAlphabet = currentAlphabateelement.innerText;
    const expectedAlphabat = currentAlphabet.toLowerCase();
    console.log(playerpressed ,expectedAlphabat);

    // check matched or not
    if(playerpressed === expectedAlphabat){
        console.log('You get a point');
    }
    else{
        console.log("You lossed your game");
    }
}

document.addEventListener('keyup', handlekeyboardbuttonpress);

function continuegame(){
    //step-1 : genarate a random alphabat 

    const alphabet = getalphabet();
    console.log('your random alphabet',alphabet);

    // set randomly genarate alphabate to the screen (show it)
    const currentAlphabateelement = document.getElementById('currente-alphabate');
    currentAlphabateelement.innerText = alphabet;
    setcolorelementByid(alphabet);
}

function play(){
    hideElement('home-screen');
    showElement('play-ground');
    continuegame();
}




