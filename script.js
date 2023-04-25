const MobilHamburguerMenu = document.querySelector('.navbar__hamburguer-menu');
const MobilMenu = document.querySelector('.aside');

function toggleMobilMenu(){
    MobilMenu.classList.toggle('inactive');
}
MobilHamburguerMenu.addEventListener('click', toggleMobilMenu);

console.log('Holii');