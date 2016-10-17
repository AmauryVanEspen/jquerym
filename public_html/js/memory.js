/* 
 var nb2 = (Math.pow(nb, 2)) / 2;
 
 for (var i = 0; i < nb2; i++) { //nb2=(nb²)/2 ->nb total de couleurs utilisées
 // Randomly pick one from the array of nomcolor2
 var rdind = Math.floor(Math.random(nomcolor2.length));
 var jeton = jeton[rdind];
 // Push 2 copies onto array
 choisi.push(jeton);
 choisi.push(jeton);
 // Remove from jeton array so we don't re-pick
 jeton.splice(rdind, 1);
 }
 */

var nomcolor = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var nomcolor2 = new Array();
   //     nomcolor2 = nomcolor; //ne duplique pas mais reference
 var choisi=new Array();
 var choisi2=new Array();
var couleur;

 function melange() {
     var l=choisi.length;
     var temp=new Array();
     var couleur;
     var nb;
     
     //on met les couleurs generées aleatoirement en double dans le tableau temp[] (copie).
     for (i=0;i<=choisi.length;i++){
         temp[i]=choisi[i];
     }
       //temp=choisi; // referencement et non duplicat.
       
       //debut premiere methode de melange mais pb de , et de nb d'elements.
 /*  for (i=0;i<l;i++)
    {
        var alea= Math.round(Math.random()*l);
     /* temp.push(choisi[i]); 
     //temp = choisi[i];
      choisi[i] = choisi[alea];
      choisi[alea] = temp; //a optim avec les virgules
     
     //fin de premiere methode
         
choisi.splice(0,choisi.length); // vider un tableau mais pb de perf  et referencement     
      
    }*/ // debut methode splice
     for (i=0;i<=temp.length;i++)
    {
         var alea= Math.round(Math.random()*temp.length);
   couleur =  temp.splice(alea, 1);
   choisi2.push(couleur);
 }
 //fin methode splice
 
//vider un tableau (methode splice) 
    //choisi.splice(0,choisi.length);  
    //choisi.lenght=0;
    
    //tentative de vider un tableau (methode while) mais ca plante , pourquoi ca boucle a l'infini?
// while(choisi.length > 0) {
//    choisi.pop();
//}

//vider un tableau methode pop ou shift mais pb de perf avec nb >4
     //for (i=0;i<=choisi.length;i++){ 
         //choisi.pop();
     
    //verif de doublon a faire
$('.tableau').html(' tableau temp avec '+temp.length+' elements: '+temp+'<br><br> tableau de choisi avec '+choisi.length+' elements: '+choisi+'<br><br> tableau de choisi2 avec '+choisi2.length+' elements: '+choisi2);
 }
 
//creation du tableau
function generationtable(nbr){
    var idn=0;
    $('.tab').html('<table align="center">');
    for (i=0;i<nbr;i++) {
        $('table').append('<tr>');
            for(m=0;m<nbr;m++) {
                $('tr:last').append('<td>');
                $('td:last').append('<input type="button" color="" value="" style="width:50px; height:50px">');
                //set color
                var alea= Math.floor(Math.random()*choisi.length);
                couleur =  choisi.splice(alea, 1);
                $('input:last').attr('color',couleur);
                $('input:last').attr('id',idn);
                idn++;
            }
}
}

        
function initi() {
    //saisie du nb de cases
     nb=prompt('choisir un nb paire de cases inférieur à 16 (√(147x2)');
   
    //verif saisie du nb de case
    while (nb % 2 != 0 || nb == null || nb == "" || nb < 1 || nb > 16 || isNaN(nb)) {
            alert('valeur incorrect, il faut resaisir');
            nb = prompt("Entrer un nb paire de cases du tableau à créer");
            }
    
    var nb2=(Math.pow(nb,2)/2); //couleur max total
    //on met les couleurs choisies au hasard dans le tableau choisi[]
    for(i=0;i<nb2;i++){
var rand = Math.round(Math.random() *nomcolor.length); // nomcolor.length =147
//On les met en double dans le tableau (par paire)
choisi.push(nomcolor[rand]); choisi.push(nomcolor[rand]);
//on melange le tableau choisi[] comprenant les couleurs
 
//on cree le tableau avec les boutons
//
 //generation du tableau
 //pb si fonction appelée ici avec nb >4
    }    
    }

function principal() {
initi();
// melange(); inutile
$('.contenu').html("<h1>affiche le tableau choisi[]  avec"+choisi.length+ " elements </h1>: "+choisi);
generationtable(nb);
}

$(document).ready(principal);