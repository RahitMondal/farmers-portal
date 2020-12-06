const renderLang = () =>{
    if(langCode==0) curObj = englishObj;
    else if(langCode==1) curObj = hindiObj;
    else curObj = benObj;

    $('.abt-btn').text(curObj.menu[0]);
    $('.maj-crp-btn').text(curObj.menu[1]);
    $('#state-selector-left').text(curObj.menu[2]);
    $('#maha').text(curObj.menu[3]);
    $('#pun').text(curObj.menu[4]);
    $('#wb').text(curObj.menu[5]);

    $('#home-cover > p').text(curObj.welcome);

    $('#p1').text(curObj.p1);
    $('#p2').text(curObj.p2);
    $('#p3').text(curObj.p3);
    $('#p4').text(curObj.p4);

};