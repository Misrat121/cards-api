//  1. button event handler setup
//  2. get input value 
//  3. error handling for string value

const searchButton = () => {
    const input = document.getElementById("input-value");
    const error = document.getElementById("error");
    // console.log(error);
    const inputValue = parseInt(input.value) ;
    if(isNaN(inputValue)|| inputValue == ""){ //isNan check number or string or others - true

        // alert("please enter a number");
        error.innerText = "please give a number";
        input.value = "";
    }
    else if(inputValue <= 0){
        error.innerText = "please give a valid number";
        input.value = "";
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))
        input.value="";
    }
}
const cardsDisplay = (cards) =>{
    // cards= cards.cards;
    console.log(cards);
    
    for(const card of cards){
       
    }

}