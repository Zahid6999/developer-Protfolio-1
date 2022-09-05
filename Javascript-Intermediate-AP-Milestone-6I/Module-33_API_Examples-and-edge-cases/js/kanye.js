
const arrawFun = () => {
    fetch('https://api.kanye.rest/')
    .then(promise => promise.json())
    .then(text => arrawCallBack(text))
}


const arrawCallBack = text => {
    console.log(text);
    const blockQuote = document.getElementById('block-quote');
    blockQuote.innerText = text.quote;
}