const mobToggleBtnBelangrijkBtn = document.querySelector('#mobToggleBtnBelangrijk');
const mobToggleBtnLaatsteNieuwsBtn = document.querySelector('#mobToggleBtnLaatsteNieuws');
const toggleChoiceBox = document.querySelector('#mob-toggle-btn-choice');
const nieuwsbriefAanmeldBtn = document.querySelector('#nieuwsbriefAanmeldBtn');
const laatsteNieuws = document.querySelector('#laatsteNieuws');     //laatste nieuws = rechter content
const belangrijkNieuws = document.querySelector('#belangrijkNieuws');               //belangrijk nieuws = linker content

//toggle tussen belangrijk en laatste nieuws. Alleen bij kleine schermen.
toggleChoiceBox.addEventListener('click', function (e){
    //als breedte scherm kleiner dan tablet (768px)
    if(window.screen.width < 767){
        if(e.target.id == 'mobToggleBtnBelangrijk'){
            if(belangrijkNieuws.classList.contains('hide-element')){
                belangrijkNieuws.classList.remove('hide-element');
                laatsteNieuws.classList.add('hide-element');
            }
        }
        else if(e.target.id == 'mobToggleBtnLaatsteNieuws'){
            if(laatsteNieuws.classList.contains('hide-element')){
                laatsteNieuws.classList.remove('hide-element');
                belangrijkNieuws.classList.add('hide-element');
            }
        }
    }
});
