window.onload = () => {
  const options = document.querySelectorAll('.options button');
  const backgroundElentColor = document.getElementById('background-color').children;
  const body = document.querySelector('body');
  
  for (let index = 1; index < backgroundElentColor.length; index += 1) {
    backgroundElentColor[index].addEventListener('click', (event) => {
      body.style.backgroundColor = event.target.innerHTML
      localStorage.setItem('backgroundColor', event.target.innerHTML)

    })
  }

  body.style.backgroundColor = localStorage.getItem('backgroundColor');
  
  // fonte
  const fontColor = document.getElementById('font-color').children;
  for (let index = 1; index < fontColor.length; index += 1) {
    fontColor[index].addEventListener('click', (event) => {
      body.style.color = event.target.innerHTML;
      localStorage.setItem('fontColor', event.target.innerHTML)
    })
  }

  body.style.color = localStorage.getItem('fontColor');

  // Tamanho fonte 
  const fontSize = document.getElementById('font-size').children;
  for (let index = 1; index < fontSize.length; index += 1) {
    fontSize[index].addEventListener('click', (event) => {
      body.style.fontSize = event.target.innerHTML;
      localStorage.setItem('fontSize', event.target.innerHTML)
    })
  }
  body.style.fontSize = localStorage.getItem('fontSize');


  // Espaçamento 
  const lineHeight = document.getElementById('line-height').children;
  for (let index = 1; index < lineHeight.length; index += 1) {
    lineHeight[index].addEventListener('click', (event) => {
      body.style.lineHeight = event.target.innerHTML;
      localStorage.setItem('lineHeight', event.target.innerHTML)
    })
  }
  body.style.lineHeight = localStorage.getItem('lineHeight');


  // Tipo da fonte
  const fontFamily = document.getElementById('font-family').children;
  for (let index = 1; index < fontFamily.length; index += 1) {
    fontFamily[index].addEventListener('click', (event) => {
      body.style.fontFamily = event.target.innerHTML;
      localStorage.setItem('fontFamily', event.target.innerHTML)
    })
  }
  body.style.fontFamily = localStorage.getItem('fontFamily');

  // const addEvent = (elements, styleChoice) => {
  //   for (let index = 1; index < elements.length; index += 1) {
  //     elements[index].addEventListener('click', (event) => {
  //       body.style[styleChoice] = event.target.innerHTML;
  //     })
  //   }
  // }


  // const lineHeight = document.getElementById('line-height').children
  // const fontFamily = document.getElementById('font-family').children


  // addEvent(backgroundElentColor,'backgroundColor')
  // addEvent(fontColor,'color')
  // addEvent(fontSize,'fontSize')
  // addEvent(lineHeight,'lineHeight')
  // addEvent(fontFamily,'fontFamily')
}