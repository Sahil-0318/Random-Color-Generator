let btn = document.querySelector('button');
let mainBg = document.querySelector('main');
let bgColorName = document.querySelector('#color-name');

let rgbColorRange = ()=>{
    return Math.floor(Math.random()*255)
}

btn.addEventListener('click', ()=>{
    let randomColor = `rgb(${rgbColorRange()}, ${rgbColorRange()}, ${rgbColorRange()})`
    
    bgColorName.textContent=randomColor;
    
    mainBg.style.backgroundColor=randomColor;
})
