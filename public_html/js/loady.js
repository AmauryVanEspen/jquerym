/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function charge() {
    location.reload(true);
}
function chargee() {
    location.href=("memorytest.html");
   // location.href=("http://www.yahoo.es");
    //document.location.href="http://www.toto.com";
}
function principal() {
    $('.contenu').html("voila le texte de depart");
    $('.contenu').append("<input type='button' onclick='chargee();' value='voici un bouton' >");
}

$(document).ready(principal);