
var eventKeyAnsText = document.getElementById('event-key-ans')
var eventLocationAnsText = document.getElementById('event-location-ans');
var eventWhichAnsText = document.getElementById('event-which-ans');
var eventCodeAnsText = document.getElementById('event-code-ans');


document.body.addEventListener('keydown',function(e){

    e.preventDefault();
    // Key Name
    var key = e.key;
    // where on the keyboard 0 , 1, 2, 3
    var keyLocation = e.location;
    //  Key Number
    var keyWhich = e.which;
    // Key Name + Location
    var code = e.code

    document.getElementById('event-key-ans').innerText = key;
    document.getElementById('event-location-ans').innerText = keyLocation;
    document.getElementById('event-which-ans').innerText = keyWhich;
    document.getElementById('event-code-ans').innerText = code;
    document.getElementById('main-text-ans').innerText = "Key : "+key;

    
});
