/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){

    var tooltips = document.getElementsByClassName('tooltip');
    var tooltip1 = tooltips[0];
    var tooltip2 = tooltips[1];
    var tooltip3 = tooltips[2];


    tooltip1.addEventListener('mouseover', function(){
        var newSpan1 = document.createElement('span');
        newSpan1.className = 'tooltipText';
        newSpan1.innerText = this.dataset.text;
        this.append(newSpan1);
    })

    
    })
    tooltip2.addEventListener('mouseover', function(){
        var newSpan2 = document.createElement('span');
        newSpan2.className = 'tooltipText';
        newSpan2.innerText = this.dataset.text;
        this.append(newSpan2);
    })
    tooltip3.addEventListener('mouseover', function(){
        var newSpan3 = document.createElement('span');
        newSpan3.className = 'tooltipText';
        newSpan3.innerText = this.dataset.text;
        this.append(newSpan3);
    })

    // for (var i = 0; i < tooltips.length; i++){
    //     var newSpan = document.createElement('span');
    //     newSpan.className = 'tooltipText';
    //
    //     tooltips[i].addEventListener('mouseover', function () {
    //
    //         newSpan.innerText = this.dataset.text;
    //         this.appendChild(newSpan);
    //
    //     })
    //     tooltips[i].addEventListener('mouseout', function () {
    //         this.parentElement.removeChild(newSpan);
    //     })
    // }



})

/*
 <span class="tooltipText">Text tooltipa</span>
 */
