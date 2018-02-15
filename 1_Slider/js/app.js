/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){

    var buttonNext = document.getElementById('nextPicture');
    var buttonPrev = document.getElementById('prevPicture');
    var sliderElements = document.querySelectorAll('li');

    var sliderElementsTable =[];
    for (var i = 0; i<sliderElements.length; i++){
        sliderElementsTable.push(sliderElements[i]);
    }

    var pictureIndex = 0;

    sliderElementsTable[0].className = 'visible';

    buttonNext.addEventListener('click', function(){
        sliderElementsTable[pictureIndex].className = '';
        if(pictureIndex >= sliderElementsTable.length-1){
            pictureIndex = 0;
        }

        else{
            pictureIndex += 1;
        }

        sliderElementsTable[pictureIndex].className = 'visible';


    })

    buttonPrev.addEventListener('click', function(){
        sliderElementsTable[pictureIndex].className = '';
        if(pictureIndex <= 0){
            pictureIndex = sliderElementsTable.length-1;
        }
        else{
            pictureIndex -= 1;
        }

        sliderElementsTable[pictureIndex].className = 'visible';

    })


    // PODPUNKT 7 --> wszystko dziala ladnie pieknie do momentu skonczenia zakresu - trzeba pozmieniac zakresy tak aby index nie wykraczal poza nie.


})