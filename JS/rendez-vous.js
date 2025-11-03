/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});
