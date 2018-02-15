/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){

    var listElements = document.querySelector('.nav ul').children;


    for (var i = 0; i < listElements.length; i++){
        listElements[i].addEventListener('mouseover', function(){
            var hiddenList = this.querySelector('ul');
            if ( hiddenList !== null){
                hiddenList.style.display = "inline-block";
            }

        })

    }


    for (var i = 0; i < listElements.length; i++){
        listElements[i].addEventListener('mouseout', function(){
            var hiddenList = this.querySelector('ul');
            if ( hiddenList !== null) {
                hiddenList.style.display = "none";
            }
        })

    }


})