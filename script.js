const GRIDSIZE = 5; 

function getHtml(puzzle) {
    result = "";
    even = false
    for (let y=0; y<GRIDSIZE; y++) {
        for (let x=0; x<GRIDSIZE; x++) {
            let full = Math.random() > 0.5;
            let id = "s" + y + "-" + x;
            result += 
            `<div id='${id}' class='square square-${full ? "full" : "empty"} square-${even ? "even" : "odd"}'>
                <a href="#${id}">
                    <input class='square-check' type='checkbox' /
                </a>
                <div class="square-cover"></div>
            </div>`;
            even = !even
        }
        if (GRIDSIZE % 2 == 0) {
            even = !even
        }
    }
    return result;
}

function show(puzzle, elem) {
    elem.style.gridTemplateColumns = "repeat("+GRIDSIZE+", auto)";
    elem.innerHTML = getHtml(puzzle);
}
show(null, document.getElementById("grid-0"));