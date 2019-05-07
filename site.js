/* 
 * [ 0x19e Networks ]
 *
 */

var supportedBrowser = false;
var oldIE = false;

function onDocumentLoaded() {
    $(document).ready(function() {
    if ($('html').is('.ie6, .ie7, .ie8')) {
        oldIE = true;
        }
    if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
        supportedBrowser = true;
    }
    if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
        supportedBrowser = true;
    }
    
    /* TODO */
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function checkCookie(cname) {
    var pass = getCookie(cname);
    if (pass == "1") {
        return true;
    }
    return false;
}
