let langCode = 0, engBtnRef, hinBtnRef, benBtnRef;

const setButtonColors = (btnRef) =>{
    renderLang();
    $('.lang-btns').css({color: regColor});
    btnRef.css({color: highlightedColor});
    $('#navbar-dropdown').slideUp(500);
}

$(document).ready(function(){
    engBtnRef = $('.eng-btn');
    hinBtnRef = $('.hin-btn');
    benBtnRef = $('.ben-btn');
    
    engBtnRef.click(function(){
        langCode = 0;
        setButtonColors(engBtnRef);
    });
    hinBtnRef.click(function(){
        langCode = 1;
        setButtonColors(hinBtnRef);
    });
    benBtnRef.click(function(){
        langCode = 2;
        setButtonColors(benBtnRef);
    });
});