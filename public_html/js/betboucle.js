function clicsurbouton(evenement) {
        compteur++;
        var idn = (evenement.target).id;
        couleur = $('#' + idn).attr('color');
        $(evenement.target).css('background-color', couleur);
        // controler si identique
        if (compteur % 2 == 0) {
                alert('deuxieme click');
                        if (couleur == couleurprecdente) {
                                alert('jumelle trouvee');
                                revel++;
                        }
                        // verif si toutes les cases sont trouvees avec compteur de cases?
                                if (revel == totalcase) {
                                        alert(' gagné félicitation !');
                                        gagne = true; // load une page de win ?
                                        //sortie (rejouer ou arreter)
                                }
                                 else {
                                // recacher les boutons
                                $('#' + idn2).css('background-color', "");
                                $(evenement.target).css('background-color', "");
            
        }
        }
        //controler si identique
                if (compteur % 2 != 0) {
                        alert('premier click');
                        //enregistrer la couleur et l ide precedent
                        idn2 = idn;
                        couleurprecdente = couleur;
                }
            }