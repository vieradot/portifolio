var textRGB = document.getElementsByClassName('rgb-colorscheme');
var i;

function showRGB(){
    for(i=0;i < textRGB.length ;i++){
        textRGB[i].classList.add('rgb-show');
    }
}
function hideRGB(){
    for(i=0; i < textRGB.length; i++){
        textRGB[i].classList.remove('rgb-show');
    }
};




/* DARK MODE  START */
var bodyDark = document.body;
var welcomeBoxDark = document.getElementById('welcome-screen');
var welcomeTextDark = document.getElementById('title');
var headerDark = document.getElementById('header');
var toggleBtn = document.getElementById('darkmode-toggle');

function toggleDarkMode(){
    bodyDark.classList.toggle('body-dark');
    welcomeBoxDark.classList.toggle('welcome-screen-dark');
    welcomeTextDark.classList.toggle('welcome-text-dark');
    headerDark.classList.toggle('header-dark');
};

function toggleAnimation(){
    if(toggleBtn.style.justifyContent = 'flex-start'){
        toggleBtn.style.justifyContent = 'flex-end';
    }else{
        toggleBtn.style.justifyContent = 'flex-start';
    }
}
