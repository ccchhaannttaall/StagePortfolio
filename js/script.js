var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting = 'Goedenavond!';
} else if (hourNow > 12) {
  greeting = 'Goedemiddag!';
} else if (hourNow > 0) {
  greeting = 'Goedemorgen!';
} else {
    greeting = 'Welkom!';
}
document.write ('<h3>' + greeting + '</h3>' );
