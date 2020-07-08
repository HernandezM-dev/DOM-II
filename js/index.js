// Your code goes here
const nav = document.querySelector('nav');
nav.addEventListener('click', function(event){
    event.preventDefault()
})

const allP = document.querySelectorAll('p')
const pics = document.querySelectorAll('img');
const lastPic = document.querySelector('img:nth-child(3)')

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

document.querySelectorAll('p').forEach(item =>{
    item.addEventListener('mouseup', event =>{
        t = (document.all) ? document.selection.createRange().text : document.getSelection();
        
        // debugger
        // const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        // console.log(selection);
    })
})


// var t = '';
// function gText(e) {
//     t = (document.all) ? document.selection.createRange().text : document.getSelection();

//     document.getElementById('input').value = t;
// }

// document.onmouseup = gText;
// if (!document.all) document.captureEvents(Event.MOUSEUP);