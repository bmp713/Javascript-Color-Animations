/*  scrollColor()
    On up or down scroll method enables gradual color change on any element.
    Many other color effects possible with miniumal changes.
    Any color combination, any speed, any element */

window.addEventListener("scroll", scrollColor);
var query = '#content_1';
var red = 0; var green = 0; var blue = 0;
var opacity = 0.7;
var current = 0; 
var previous = 0;

function scrollColor(){
    current = window.pageYOffset;

    if( current <= 255 ){
        //red = current;
        blue = current;
        //green = current; 
    }
    if( current >= previous )
        previous = current + 1;
    else if( current <= previous )
        previous = current - 1;
    
    document.querySelector( query ).style.backgroundColor = 
        'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ',' + opacity.toString() + ')';    
}



