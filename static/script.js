/*didnt copy and paste following code segment directly but learned how to do this from the w3schools website*/
    $(document).ready(function(){
        $("button").click(function(){
            $(".trivia").fadeToggle("slow");
        });
    });


function checkValidMail() {
    const w = document.getElementById("zip");
    const x = document.getElementById("name");
    const y = document.getElementById("email");
    const z = document.getElementById("phone");
    if (!x.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!y.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!z.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!w.checkValidity()) {
        document.getElementById("valid").style.display = "block";
    }
}
function checkValid() {
    const x = document.getElementById("name");
    const y = document.getElementById("email");
    const z = document.getElementById("comment");
    if (!x.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!y.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!z.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
}
/*learned how to make the geolocation function from w3schools */
const x = document.getElementById("geo")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser";
    }
}
function success(position) {
    alert("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude); 
}
function error() {
    alert("Sorry, no position available");
}