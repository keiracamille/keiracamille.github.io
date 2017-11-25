function changePageFunction(text){
    document.getElementById('demo').innerHTML = text;
}


function clickHandler(){

   var inputText= document.getElementById('jamesInput').value
    changePageFunction(inputText)
}

console.log("ello")