/// Deklarerar variabler/////////////////////

let figureEl = document.querySelectorAll('figure');
let main = document.querySelector('main');
let imgs = document.querySelectorAll('img');

let ash = imgs[2];
let fire = imgs[3];
let water = imgs[4];
let ashFigure = figureEl[0]
let fireFigure = figureEl[1]
let waterFigure = figureEl[2]
////Skapar nya element och lägger till i dom Hämtar element från dom och deklarerar dem med variabler/////
let resetBtn = document.createElement('button')
let textBtn = document.createElement('button')
let colorBtn = document.createElement('button')
let firstArticle = document.querySelector('.art-1')
let secondArticle = document.querySelector('.art-2')
let thirdArticle = document.querySelector('.art-3')
firstArticle.appendChild(textBtn)
secondArticle.appendChild(colorBtn)
thirdArticle.appendChild(resetBtn)
let btns = document.querySelectorAll('button');
let bgBtn = btns[2]
let imgBtn = btns[0];
let btnColor = btns[3]
let liBtn = btns[4];
////////här ändrar jag Text innehåll i Knapparna så man vet vad man trycker på///////////
liBtn.innerHTML = 'List';
btnColor.innerHTML = 'ChangeMe'
imgBtn.innerHTML= 'ImgMagic';
textBtn.innerHTML= 'TextMagic';
bgBtn.innerHTML= 'BgMagic';
resetBtn.innerHTML='Reset';

/////////////////////////lägger skapar en eventlistener på RESET KNAPPEN/////////////
resetBtn.addEventListener('click', resetAll)
////skapar en function med functioner i som ska hjälpa till att reseta//
function resetAll(){
    imgUndoMagic()
    textUndoMagic()
    bgUndoMagic()
    colorUndo()
    listUndoMagic()
}
///////////////// skapar en listener 'click' på knappen och matar sedan in functionen imgMagic////
imgBtn.addEventListener('click', imgMagic)

function imgMagic(){
    ash.parentNode.removeChild(ash);
    fire.parentNode.removeChild(fire);
    water.parentNode.removeChild(water);
    ashFigure.appendChild(fire)
    waterFigure.appendChild(ash)
    fireFigure.appendChild(water)
}
////// en function som återställer bilderna till original ordningen///////////
function imgUndoMagic(){
    ashFigure.appendChild(ash)
    waterFigure.appendChild(water)
    fireFigure.appendChild(fire)
}
///////////////// skapar en listener 'click' på knappen och matar sedan in functionen textMagic////
textBtn.addEventListener('click', textMagic)
function textMagic(){
  let firstText =  document.querySelector(' .art-1 h3').innerHTML = ('Fire');
  let secondText =  document.querySelector('.art-2 h3').innerHTML = ('Water');
  let thirdText =  document.querySelector('.art-3 h3').innerHTML = ('Ash');
}
////// En function som återställer den ändrade texten till Original ordningen
function textUndoMagic(){
    let firstText =  document.querySelector('.art-1 h3').innerHTML = ('Ash');
    let secondText =  document.querySelector('.art-2 h3').innerHTML = ('Fire');
    let thirdText =  document.querySelector('.art-3 h3').innerHTML = ('Water');
  }
  ////////// Ändrar backgrundsfärgen på body till röd////
  bgBtn.addEventListener('click', bgMagic)
  function bgMagic(){
    document.body.style.backgroundColor = "red";
  }
  ///////återställer färgen på body till originalet Vit
  function bgUndoMagic (){
    document.body.style.backgroundColor = "white";
  }
  //// Ändrar färgen på knappen till blå
  colorBtn.addEventListener('click', buttonColor)
  
  function buttonColor() {
      colorBtn.style.backgroundColor = 'blue';
  }
  ///återställer knappens färg till originalet
  function colorUndo() {
    colorBtn.style.backgroundColor = '#222';
 }
////////här skapar jag en Div med class div och sedan lägger skapar jag en for loop 
////////som ska skapa 5 li element som appendas i ul när man tryckt på knappen och ger dem border.
 liBtn.addEventListener('click', listMagic)
 function listMagic() {
    let div = document.createElement('div');
    div.setAttribute('class','div')
    let ul = document.createElement('ul');
     main.appendChild(div);
     div.appendChild(ul)
     for(i=0; i <5; i++){
         let li= document.createElement('li')
         ul.appendChild(li)
         div.appendChild(ul)
         let text = document.createTextNode('Hi im element number ' + i);
         li.appendChild(text)
         li.style.border = ' 1px solid black'
     }
      
 }
 function listUndoMagic (){
     // hämta div med class div
let divList = document.querySelector('.div');

// så länge div har några children så ta bort dem
while (divList.hasChildNodes()) {  
    divList.parentNode.removeChild(divList);

}
 }
