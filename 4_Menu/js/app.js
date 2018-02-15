/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){

    var listElements = document.querySelector('.nav ul').children;
    var elements =[];

    for (var i = 0; i<listElements.length; i++){
        elements.push(listElements[i].innerText);
    }
    console.log(elements);



})