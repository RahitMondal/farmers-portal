let homeRef, abtRef, mjrCrpsRef, pstHvstRef;

const applyMarginTop = (navHeight)=>{
    $('.sec').css({paddingTop: `${navHeight}px`});
}

const renderContent = (conRef, btnRef) => {
    $('.sec').fadeOut();
    $('.menu-btn').css({color: regColor});
    $(conRef).fadeIn();
    $(btnRef).css({color: highlightedColor});
}

$(document).ready(function(){
    homeRef = $('#home');
    abtRef = $('#abt-us');
    mjrCrpsRef = $('#mjr-crps');
    pstHvstRef = $('#pst-hvst');

    renderContent(homeRef, homeBtnRef);

    let navHeight = document.getElementById('navbar').offsetHeight;
    applyMarginTop(navHeight);
});
