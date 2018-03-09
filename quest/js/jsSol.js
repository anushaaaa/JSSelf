var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isIE Edge: ' + isEdge + '<br>';
$("#browserInfo").html(output);
/**
 * Created by avemuri on 1/14/2016.
 */
$(document).ready(function(e){

    var quest1Solution1 = function(){
        var startDest=['c','a','d','b'];
        var endDest = ['d','b','e','c'];
        var start; var end;
        for(var i=0; i<startDest.length;i++){
            if(endDest.indexOf(startDest[i]) == -1){
                start = startDest[i];
            }
        }
        for(i=0; i<endDest.length;i++){
            if(startDest.indexOf(endDest[i]) == -1){
                end=endDest[i];
            }
        }
        $('#quest1Sol1Res').text('Start: '+ start + '.  End: '+end);
    };
    $('#quest1Sol').on('show.bs.collapse', function () {
        $('#quest1Sol1').text(' '+ quest1Solution1);
        quest1Solution1();
    });
    var quest2Solution1 = function(){
        var stringVal = 'abcd';
        var isNum = true;
        for(var i=0; i<stringVal.length;i++){
            if(stringVal[i] < 0 || stringVal[i] >9){
                isNum = false;
            }
        }
        $('#quest2Sol1Res').text(isNum.toString());
    };
    $('#quest2Sol').on('show.bs.collapse', function () {
        $('#quest2Sol1').text(' '+ quest2Solution1);
        quest2Solution1();
    });
});