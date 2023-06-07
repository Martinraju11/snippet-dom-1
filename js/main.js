function change() {
    var a = document.getElementById("color-box");
    var b = a.value;
    a.style.backgroundColor = b;

}
function changes() {
    var c = document.getElementById("color-box2");
    var e = c.value;
    var d = document.getElementsByTagName("body");
    d[0].style.backgroundColor = e;
}
function para() {
    var f = document.getElementsByClassName("fs");
    f[0].style.fontSize = "40px";

}