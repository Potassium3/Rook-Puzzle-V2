const GRIDSIZE = 5; 

function show(puzzle, elem) {
    elem.style.gridTemplateColumns = "repeat("+GRIDSIZE+", auto)";
    even = false
    for (let y=0; y<GRIDSIZE; y++) {
        for (let x=0; x<GRIDSIZE; x++) {
            let full = Math.random() > 0.5;
            let id = "s" + y + "-" + x;
            elem.innerHTML += 
            `<div class='square square-${full ? "full" : "empty"} square-${even ? "even" : "odd"}'>
            <a href="#${id}"><input id='${id}' class='square-check' type='radio' name='squares' /></a>
            <div class="square-cover"></div>
            </div>`;
            even = !even
        }
        if (GRIDSIZE % 2 == 0) {
            even = !even
        }
    }
}
show(null, document.getElementById("grid-0"));