let wheatRef, sugerRef, juteRef, curCrop;

const renderCrops = (cropRef) =>{
    wheatRef.fadeOut();
    sugerRef.fadeOut();
    juteRef.fadeOut();
    cropRef.fadeIn();
}
$(document).ready(function(){
    wheatRef = $('#wheat');
    sugerRef = $('#sugercane');
    juteRef = $('#jute');

    $('#crop-selector-right').click(function(){
        curCrop = $('#crop-selector-right').val();
        switch(curCrop){
            case 'wheat' :
                renderCrops(wheatRef); break;
            case 'suger' :
                renderCrops(sugerRef); break;
            case 'jute' :
                renderCrops(juteRef); break;

        }
    })
});

