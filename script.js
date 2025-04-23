const GRIDSIZE = 5;

document.getElementById("grid-0").style.gridTemplateColumns = "repeat("+GRIDSIZE+", auto)";
even = false
for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
        document.getElementById("grid-0").innerHTML += 
        "<div class='square square-full square-"+(even ? "even" : "odd")+"'></div>";
        even = !even
    }
}