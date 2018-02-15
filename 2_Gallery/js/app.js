/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function(){

    var galleryElements = document.querySelectorAll('img');
    var gallery = [];
    for (var i=0; i < galleryElements.length; i++){
        gallery.push(galleryElements[i]);
    }

    var body = document.querySelector('body');


    for (var i = 0; i < gallery.length; i++){
        gallery[i].addEventListener('click', function () {
            // console.log(this.querySelector('img'));
            var fullScreen = document.createElement('div');
            fullScreen.className = 'fullScreen';
                var button = document.createElement('button');
                button.className = 'close';
                button.innerText = 'Close';
                var img = document.createElement('img');
                img.setAttribute('src', this.getAttribute('src'));
            fullScreen.appendChild(img);
            fullScreen.appendChild(button);
            var fotoLarge = body.appendChild(fullScreen);

            button.addEventListener('click', function () {
                fotoLarge.parentElement.removeChild(fotoLarge);
            })
        })
    }



console.log();

})
