/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){
    var gallery = document.getElementById('gallery');
    var galleryElements = gallery.children;
    var hideButton = document.getElementById('hideButton');
    var showButton = document.getElementById('showButton');
    var input = document.getElementById('tagInput');


    showButton.addEventListener('click', function(){

        var tags = [];
        for (var i = 0; i <galleryElements.length; i++){
            tags.push(galleryElements[i].dataset.tag)
        }

        var shouldBeInvisible = [];
        for (var i = 0; i <tags.length; i++){
            if(tags[i].indexOf(input.value) === -1){
            shouldBeInvisible.push(tags[i]);
            }
        }

        for (var i = 0; i <galleryElements.length; i++){
            for (var j =0; j <shouldBeInvisible.length; j++){
                if (galleryElements[i].dataset.tag === shouldBeInvisible[j]){
                    galleryElements[i].className = 'invisible';
                }
            }
        }
        // console.log(shouldBeInvisible);

    })

    hideButton.addEventListener('click', function(){
        // input.value = '';

        var tags = [];
        for (var i = 0; i <galleryElements.length; i++){
            tags.push(galleryElements[i].dataset.tag)
        }

        var shouldBeInvisible = [];
        for (var i = 0; i <tags.length; i++){
            if(tags[i].indexOf(input.value) !== -1){
                shouldBeInvisible.push(tags[i]);
            }
        }

        for (var i = 0; i <galleryElements.length; i++){
            for (var j =0; j <shouldBeInvisible.length; j++){
                if (galleryElements[i].dataset.tag === shouldBeInvisible[j]){
                    galleryElements[i].className = 'invisible';
                }
            }
        }
    })

})

//Filtr dziala, tak jak nalezy, brakuje mi tylko przycisku "reset", ktory pokazywalby ponownie cala galerie.