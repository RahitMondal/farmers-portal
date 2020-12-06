let homeBtnRef, abtBtnRef, mjrCrpBtnRef, pstHvstBtnRef;
let highlightedColor = '#ffdd00', regColor = '#ffffff';

const renderDropdown = () => {
    $('#navbar-dropdown').slideToggle(500);
    $('#navbar-dropdown').css({display:'flex'});
}

$(document).ready(function(){
    homeBtnRef = $('.home-btn');
    abtBtnRef = $('.abt-btn');
    mjrCrpBtnRef = $('.maj-crp-btn');
    pstHvstBtnRef = $('.pst-hvst-btn');
    $('.sec').css({minHeight: `${window.innerHeight}px`});

    $(window).resize(()=>{
        if(window.innerWidth>=792) $('#navbar-dropdown').hide();
    });

    $('#toggle-btn').click(function(){
        renderDropdown();
    });

    $('#navbar-dropdown > .menu-btn').click(function(){
        renderDropdown();
    });

    homeBtnRef.click(function(){
        // renderDropdown();
        renderContent(homeRef, homeBtnRef);
    });
    abtBtnRef.click(function(){
        renderContent(abtRef, abtBtnRef);
    });
    mjrCrpBtnRef.click(function(){
        renderContent(mjrCrpsRef, mjrCrpBtnRef);
    });
    pstHvstBtnRef.click(function(){
        renderContent(pstHvstRef, pstHvstBtnRef);
    });
});