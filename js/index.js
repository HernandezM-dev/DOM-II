// Your code goes here
const nav = document.querySelector('nav');
nav.addEventListener('click', function(event){
    event.preventDefault()
})

const pics = document.querySelectorAll('img');
 const lastPic = document.querySelector('img:nth-child(3)')
 console.log(lastPic);

document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.opacity = '.5';
        
        setTimeout(function(){
            event.target.style.opacity = '1';
        },500)
    })
}, false)

let keyDownBox = "";
document.addEventListener('keydown', event =>{
   
    console.clear()
    keyDownBox += event.key;
    console.log(keyDownBox)
})

const colors = ['red', 'blue', 'green', 'yellow'];
let i = 0;
document.addEventListener('wheel', event => {
    document.body.style.backgroundColor = colors[i];

    if(i > 3){
        i = 0;
    }else{
        i++
    }    
})

const firstTitle = document.querySelector('h1')
firstTitle.addEventListener('mouseover', event =>{
    firstTitle.setAttribute('id', 'draggable');
    firstTitle.setAttribute('draggable', 'true');
    // debugger
})
firstTitle.addEventListener('drag', event =>{
    event.preventDefault();
    firstTitle.innerHTML = 'Secret Text';
}, false)

document.addEventListener('dragend', event => {
    firstTitle.innerHTML = 'Fun Bus';
}, false)

document.addEventListener('copy', event =>{
    event.target.style.color = 'red';
},)

lastPic.addEventListener('dblclick', event =>{
    event.target.style.transform = ('scale(2)');
    event.target.style.transition = ('transform .6s')
    
    setTimeout(function(){
        event.target.style.transform = ('scale(1)');
    },2000)
})


