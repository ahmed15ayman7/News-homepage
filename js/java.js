let menu= document.querySelector('.navbar-nav');
let menu_tog= document.querySelector('.navbar-toggler');
let iconMenu= document.querySelector('.iconMenu');

console.log(menu);
menu_tog.onclick=e=>{

    menu.classList.add('d-flex')
    menu.classList.remove('d-none')
    
    e.preventDefault();
};
iconMenu.onclick=e=>{
    console.log('c')
    menu.classList.add('d-none')
    menu.classList.remove('d-flex')
    
    
    e.preventDefault();
};

