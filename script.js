const btn = document.getElementById('change');
let randomNumber = () => {
    let randomNum = (Math.floor(Math.random() * 255));
    return randomNum;
}

let Changer = () => {
    let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = randomColor;
}
btn.addEventListener('click', Changer);
window.addEventListener('load', Changer);