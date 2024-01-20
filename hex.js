let btn = document.querySelector('button');
let mainBg = document.querySelector('main');
let bgColorName = document.querySelector('#color-name');

let hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

let randomHexColorIndex = ()=>{
    return Math.floor(Math.random()*hexColor.length);
}

btn.addEventListener('click', ()=>{
    let randomColor = `#${hexColor[randomHexColorIndex()]}${hexColor[randomHexColorIndex()]}${hexColor[randomHexColorIndex()]}${hexColor[randomHexColorIndex()]}${hexColor[randomHexColorIndex()]}${hexColor[randomHexColorIndex()]}`
    
    bgColorName.textContent=randomColor;
    
    mainBg.style.backgroundColor=randomColor;
})
