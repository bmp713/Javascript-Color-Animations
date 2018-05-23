/*  scrollColor()
    On up or down scroll method enables gradual color change on any element.
    Many other color effects possible with miniumal changes.
    Any color combination, any speed, any element */

window.addEventListener("scroll", scrollColor);
var query = '#content_1';
var red = 0; 
var blue = 0;
var green = 0; 
var opacity = 0.7;

var current = 0; 
var previous = 0;
var width = 100;
document.querySelector("#content_1").style.width = "100%";

function scrollColor(){
    //document.querySelector("#content_1").setAttribute(
    //    "style", "background:url(\"../assets/images/LA_bar20.jpg\") no-repeat fixed;"
    //); 
    current = window.pageYOffset;
    if( current == 0 ){
        width = 100;
    }
    if( current <= 255 ){
        red = current;
        //blue = current;
        //green = current; 
        console.log("red = " + red + ", green = " + green + ", blue = " + blue );
    }
    //Scroll down
    if( current >= previous ){
        previous = current + 1;
        if( width > 0 && width < 100 );
            width = width - 1;
    }
    //Scroll up
    else if( current <= previous ){
        previous = current - 1;
        if( width < 100 )
            width = width + 1;
    }
    document.querySelector("#content_1").style.width = width.toString() + '%';   
    //document.querySelector("#content_1").setAttribute("style", "width:" + width.toString() + "%;"); 
 
    document.querySelector( query ).style.backgroundColor = 
        'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ',' + opacity.toString() + ')';    
}



