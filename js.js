/*PARTS
1. HTTP Request library
2. DOM Library
 */

/*1.
HTTP REQUESTS START*/
function POSTJONEL(url,params){
    var http = new XMLHttpRequest();
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}

function GETJONEL(){

}

function PUTJONEL(){

}

function DELETEJONEL(){

}
/*HTTP REQUESTS END*/


/*2.
DOM library START*/
//initiators
var BUTTONJONEL=function(name){
    return new button_call(name);
}

//callers
function button_call(name){
    this.click = function a(){
        document.getElementById(name).onclick = function(){
            if(Object.keys(post).length>0){ //check if the button click is for posting because button click can be more than purpose
                POSTJONEL(post.url,post.param);
                post={}; //clear it to reset
            } 
            
        }
    }
}


/*DOM library END*/
