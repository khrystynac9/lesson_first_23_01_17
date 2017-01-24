var i = Number(prompt("Input the number"));
var name = prompt("Input the name");
while (i < 16) {
    document.write("Happy birthday" + "<br>");
    i++;
}
document.write("Happy birthday  " + name +"<br>");
document.write("ura, ura, ura");

var mas = "he is funny" + " " + "boy";
console.log(mas);

var word = "bottles";
var count = 10;
while (count > 0) {
    console.log(count +" "+ word + " of beer on the wall");
    console.log(count +" "+ word + " of beer");
    console.log("Take one down");
    count --;
    if (count > 0) {
        console.log(count +" "+ word + " of beer on the wall");
    } else {
        console.log("No more " + word + " of beer on the wall");
    }
}