/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 function generationtable(nbr) {
       $('.tab').append('<table>');
       for (a = 0; a < nbr; a++) {
            $('table').append('<tr>');
                for (b = 0; b < nbr; b++) {
                     $('tr:last').append('<td>');
                    $('tr:last').append('<input type="button" value="" onclick="" style="width:50px; height:50px">');
                }
          }
 }

 function generationtable(nbr) {
       $('.tab').html('<table>');
       for (a = 0; a < nbr; a++) {
            $('table').html('<tr>');
                for (b = 0; b < nbr; b++) {
                     $('tr:last').html('<td>');
                    $('tr:last').html('<input type="button" value="" onclick="" style="width:50px; height:50px">');
                }
            }
 }
 */

//elle fonctionne
function generationtable(nbr){
    $('.tab').html('<table>');
    for (i=0;i<nbr;i++) {
        $('table').append('<tr>');
            for(m=0;m<nbr;m++) {
                $('tr:last').append('<td>');
                $('td:last').append('<input type="button" value="" style="width:50px; height:50px">');
                
            }
}
}
function principal() {
    generationtable(4);
}
 $(document).ready(principal);
