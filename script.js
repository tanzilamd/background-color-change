// 1st Button
function handleClick1(){
    document.body.style.backgroundColor = 'orange';
    document.body.style.color = 'white';
}
const firstButton = document.getElementById('first');
firstButton.onclick = handleClick1;
// 2nd Button 
function handleClick(){
    document.body.style.backgroundColor = 'tomato';
    document.body.style.color = 'white';
}
var seceondButton = document.getElementById('second');
seceondButton.onclick =  handleClick;
// 3rd Button
function handleClick3(){
    document.body.style.backgroundColor = 'lightblue';
}
const thirdButton = document.getElementById('third');
thirdButton.onclick = handleClick3;
// 4th Button
function handleClick4(){
    document.body.style.backgroundColor = 'lightyellow';
}
const fourthButton = document.getElementById('fourth');
fourthButton.onclick = handleClick4;