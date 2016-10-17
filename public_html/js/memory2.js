var nomcolor = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var choisi = new Array();
var couleur, idn2, couleurprecdente; 
var totalcase= 0 ;var revel=0; var compteur = 0; var nbtour = 0; 
//creation du tableau
function generationtable(nbr){
     var idbutt = 0;
     $('.tab').html('<table>');
     for (i = 0; i < nbr; i++) {
            $('table').append('<tr>');
            for (m = 0; m < nbr; m++) {
                    $('tr:last').append('<td>');
                    $('td:last').append('<input type="button" color="" value="" style="width:50px; height:50px">');
                    //set color
                    var alea = Math.floor(Math.random() * choisi.length);
                    couleur = choisi.splice(alea, 1);
                    $('input:last').attr('color', couleur);
                    $('input:last').attr('id', idbutt);
                    idbutt++;
                    }
        }
 }
 
 function gagne(reponse) {
     if (reponse==true) { location.href=("memorytest.html"); } //document.location.reload(true); }
     if (reponse==false) { location.href("http://www.yahoo.es");}
 }

//event clique sur un bouton
function clicsurbouton(evenement) {
        var dbclick=$('#' + idn).attr('background-color');
        compteur++;
        var idn = (evenement.target).id;
       
       /*if (idn=='yes') { location.href=("memorytest.html"); }
        else if (idn=='no') { location.href=("http://www.yahoo.es");}
       */
      
      if (dbclick=='undefined'){ //recommence
          compteur--;
          alert('doublon detecté');
      }
      else { // on execute le reste du code
          
      
        couleur = $('#' + idn).attr('color');
        $(evenement.target).css('background-color', couleur);
        // controler si identique
                if (compteur % 2 != 0) {
                        alert('premier click');
                        //enregistrer la couleur et l ide precedent
                        idn2 = idn;
                        couleurprecdente = couleur;
                }
                else {
                        alert('deuxieme click');
                        if (couleur == couleurprecdente) {
                                alert('jumelle trouvée');
                                revel++;
                                // on laisse afficher
                                // verif si toutes les cases sont trouvees avec compteur de cases?
                                if (revel == totalcase/2) {
                                        alert(' gagné félicitation !, affichage des scores ');
                                        $('.clico').html("<h2>Nombre de coups utilisés: " + (compteur / 2)+ " avec " +totalcase+ " de cases</br> Recommencer?<br></h2> ");
                                        $('.clico').append("<input id='yes' type='button' value='oui' onclick='gagne(true);' style='width:50px; height:50px'>&nbsp;&nbsp;<input id='no' type='button' value='non' onclick='gagne(false);'  style='width:50px; height:50px'>");
                                        //$('.clico').append("<div><input id='yes' type='button' value='oui' style='width:50px; height:50px'>&nbsp;&nbsp;<input id='no' type='button' value='non' style='width:50px; height:50px'></div>");
                                        //gagne = true; // load une page de win ?
                                        //  break gagne;
                                        //sortie (rejouer ou arreter)
                                }

                        }   
                        else {
                                // recacher les boutons
                                $('#' + idn2).css('background-color', "");
                                $(evenement.target).css('background-color', "");
                                $('.clico').html("<h2>nb de coups utilisés: " + (compteur / 2) + "<br>idn vaut: " + idn + " avec la couleurprecdente: " + couleurprecdente + "<br> idn2 vaut: " + idn2 + " avec la couleur: " + couleur + "<br> total de cases: "+totalcase+"<br> revel= "+revel+"</h2>");
                        }
                }
                //gagne: $('.clico').html("<h2>Gagné! avec nb de coups utilisés: "+(compteur/2)+"<br>");  
            }
}

function initi() {
//saisie du nb de cases
nb = prompt('choisir un nb paire de cases inférieur à 16 (√(147x2)');
        //verif saisie du nb de case
 while (nb % 2 != 0 || nb == null || nb == "" || nb < 1 || nb > 16 || isNaN(nb)) {
            alert('valeur incorrect, il faut resaisir');
            nb = prompt("Entrer un nb paire de cases du tableau à créer");
}
totalcase = nb * nb; //total de cases    
 var nb2 =(totalcase / 2); //couleur max total
 //on met les couleurs choisies au hasard dans le tableau choisi[]
        for (i = 0; i < nb2; i++){
                var rand = Math.round(Math.random() * nomcolor.length); // nomcolor.length =147
                //On les met en double dans le tableau (par paire)
                choisi.push(nomcolor[rand]); choisi.push(nomcolor[rand]);
                //generation du tableau
            }
}

function principal() {
initi();
        $('.contenu').html("<h1>affiche le tableau choisi[]  avec" + choisi.length + " elements </h1>: " + choisi); // a effacer, controle
generationtable(nb);
        $('.contenu').append('<h2>tableau choisi[]: ' + choisi + '</h2>'); // a effacer, controle

$('input').click(clicsurbouton);
        }

$(document).ready(principal);