const GRIDSIZE = 5;

document.getElementById("grid-0").style.gridTemplateColumns = "repeat("+GRIDSIZE+", auto)";
even = false
for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
        let full = Math.random() > 0.5;
        document.getElementById("grid-0").innerHTML += 
        `<div class='square square-${full ? "full" : "empty"} square-${even ? "even" : "odd"}'>
        <input class='radio' type='radio' name='squares' />
        <input class='check' type='checkbox' /></div>`;
        even = !even
    }
}