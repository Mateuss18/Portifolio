//Fazendo o scroll do menu de navegação mais suave
const intensMenu = document.querySelectorAll('.menu a[href^="#"]')

intensMenu.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 40

    scrollToPosition(to)
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    })
    //smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation para navegadores que não suportam
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

//Efeito maquina de escrever da area apresentação
function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(()=>
      elemento.innerHTML += letra, 75 * i)
  })
}

const titulo = document.getElementById('nome')
typeWriter(titulo)

//Animação dos elementos aparecendo
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: false
});

sr.reveal('.image', { delay: 400 });
sr.reveal('.informacoes', { delay: 400 });
sr.reveal('.title', { delay: 400 });
sr.reveal('.description', { delay: 600 });
sr.reveal('.cardsInterval', { interval: 300 });