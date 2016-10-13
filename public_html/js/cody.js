function blocaa(nomFichCible) {
    $('.contenu').load(nomFichCible);

}

function blocbb() {
    //$('.contenu').load('blocb.html');
    var a = "";//$('.menu').val();
    a = $('.menu input').val();
    // $('.contenu').html('$(('.menu').input).val()');
    if (a=="bouton1") {$('.contenu').load("bloca.html"); a="";}
    if (a=="bouton2") {$('.contenu').load("blocb.html"); a="";}
    if (a=="bouton3") {$('.contenu').load("blocc.html"); a="";}
   // $('.contenu').html(a);
    //alert(a);
}
