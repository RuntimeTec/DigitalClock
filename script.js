document.addEventListener("load",changeColor);
function changeColor() {
    var hex_codes = ["0","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hex_numbers = '';
    for(var i =0; i < 6; i++ ) {
        var index_num = Math.floor(Math.random()*hex_codes.length);
        hex_numbers += hex_codes[index_num];
    }
    document.getElementById("hex-code").innerHTML = hex_numbers;
    document.getElementById("hex-code").style.transition = "0.5s";
    document.getElementsByTagName("body")[0].style.background = "#" + hex_numbers;
    document.getElementsByTagName("body")[0].style.transition = "0.5s";
    setTimeout(changeColor, 2000);
}
