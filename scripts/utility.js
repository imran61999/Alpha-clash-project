function hideElement(elementID){
    const element =document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElement(elementID){
    const element =document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setcolorelementByid(elementID){
    const element =document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function getalphabet(){
    // get or create an alphabet array

    const alphabetstring ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet =alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}