// 1st Button
function handleClick1(){
    document.body.style.backgroundColor = 'orange';
    document.getElementById('first').style.backgroundColor = 'orange';
    document.getElementById('first').style.color = 'white';
    document.getElementById('footer').style.color = 'white';
    document.getElementById('footer').style.fontSize = '2rem';
    document.getElementById('footer').style.fontWeight = '600';
}
const firstButton = document.getElementById('first');
firstButton.onclick = handleClick1;
// 2nd Button 
function handleClick(){
    document.body.style.backgroundColor = 'tomato';
    document.getElementById('second').style.backgroundColor = 'tomato';
    document.getElementById('second').style.color = 'white';
    document.getElementById('footer').style.color = 'white';
    document.getElementById('footer').style.fontSize = '2rem';
    document.getElementById('footer').style.fontWeight = '600';
}
var seceondButton = document.getElementById('second');
seceondButton.onclick =  handleClick;
// 3rd Button
function handleClick3(){
    document.body.style.backgroundColor = 'lightblue';
    document.getElementById('third').style.backgroundColor = 'lightblue';
    document.getElementById('third').style.color = 'white';
    document.getElementById('footer').style.color = 'white';
    document.getElementById('footer').style.fontSize = '2rem';
    document.getElementById('footer').style.fontWeight = '600';
}
const thirdButton = document.getElementById('third');
thirdButton.onclick = handleClick3;
// 4th Button
function handleClick4(){
    document.body.style.backgroundColor = '#fdcb6e';
    document.getElementById('fourth').style.backgroundColor = '#fdcb6e';
    document.getElementById('fourth').style.color = 'white';
    document.getElementById('footer').style.color = 'white';
    document.getElementById('footer').style.fontSize = '2rem';
    document.getElementById('footer').style.fontWeight = '600';
}
const fourthButton = document.getElementById('fourth');
fourthButton.onclick = handleClick4;

