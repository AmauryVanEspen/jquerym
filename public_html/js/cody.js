function blocaa(nomFichCible) {
    $('.contenu').load(nomFichCible);

}

function blocbb() {
    //$('#1').attr("id");
    //$('.contenu').load('blocb.html');
    var a = "";//$('.menu').val();
    //a = $('.menu input').val();
    a = $('.menu input').id();
    //$('.menu input').attr("id");
    // $('.contenu').html('$(('.menu').input).val()');
    if (a == "#1") {
        $('.contenu').load("bloca.html");
        a = "";
    }
    if (a == "#2") {
        $('.contenu').load("blocb.html");
        a = "";
    }
    if (a == "#3") {
        $('.contenu').load("blocc.html");
        a = "";
    }
    // $('.contenu').html(a);
    //alert(a);
    // $( "input" ).button( $( "p" ).text($(this).val()));
}

function bloccc(a) {
    if (a == "1") {
        $('.contenu').load("bloca.html");
    }
    if (a == "2") {
        $('.contenu').load("blocb.html");
    }
    if (a == "3") {
        $('.contenu').load("blocc.html");
    }
}

       function chargejson() {
                    $.getJSON("json/films.json", function (data){
                        var tabfilms = data.films;
                        var a="";
                        for (i=0;i<tabfilms.length;i++) {
                            a +=" <p>nom du film:" +tabfilms[i].titre + "<br> synopsis: "+tabfilms[i].synopsis  +"</p>" ;
                            $('#contenu').html(a);
                        }
                    });
    }