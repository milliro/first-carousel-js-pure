/*
  - Implemente um carousel. O desafio é que o resultado final seja este: 
    https://youtu.be/Auw2VJgwRjo

  - Quando o botão de "próximo slide" for clicado:
    1 Remova, de todos os slides, as classes que os deixam visíveis;
    2 Adicione, em todos os slides, as classes que os deixam invisíveis;
    3 Adicione, apenas no slide que deve ser exibido, a classe que deixa um 
      slide visível;
      3.1 Para saber qual slide deve ficar visível, quando o arquivo .js for 
        carregado, inicialize uma variável com 0. Ela representa o index do 
        slide exibido atualmente;
      3.2 Antes de adicionar e remover as classes dos slides, verifique o index 
        do slide exibido atualmente;
          3.3 Se ele corresponder ao index do último slide (3º), o 1º slide deve 
            ser exibido;
          3.4 Se ele não corresponder ao index do último slide, o próximo slide 
            deve ser exibido.

  - Quando o botão de "slide anterior" for clicado:
    1 Execute os passos 1, 2 e 3 acima;
    2 No passo 3.3, se o slide exibido atualmente corresponder ao index do 1º 
      slide, o último slide (3º) deve ser exibido;
    3 No passo 3.4, se o slide exibido atualmente não corresponder ao index do 
      1º slide, o slide anterior deve ser exibido.
*/

const carouselItems = document.querySelectorAll('[data-js="carousel__item"]')
const nextBtn = document.querySelector('[data-js="carousel__button--next"]')
const prevBtn = document.querySelector('[data-js="carousel__button--prev"]')

let i = 0

const showNextSlide = () => {
  carouselItems.forEach(item => {
    item.classList.remove('carousel__item--visible')
    item.classList.add('carousel__item--hidden')
  })
  if (i === carouselItems.length - 1) {
    i = 0 
    return carouselItems[i].classList.add('carousel__item--visible') 
  } 
  i += 1
  carouselItems[i].classList.add('carousel__item--visible')
}

const showPrevSlide = () => {
  carouselItems.forEach(item => {
    item.classList.remove('carousel__item--visible')
    item.classList.add('carousel__item--hidden')
  })

  if (i === carouselItems.length - 3) {
    i = 2
    return carouselItems[i].classList.add('carousel__item--visible') 
  }
  i -= 1  
  carouselItems[i].classList.add('carousel__item--visible')
}

nextBtn.addEventListener('click', showNextSlide)
prevBtn.addEventListener('click', showPrevSlide)
// setInterval(showNextSlide, 10000) brinde$
