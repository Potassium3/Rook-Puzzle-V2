const GRIDSIZE = 5; 

function getHtml(puzzle) {
    result = "";
    even = false
    for (let y=0; y<GRIDSIZE; y++) {
        for (let x=0; x<GRIDSIZE; x++) {
            let full = Math.random() > 0.5;
            let id = "s" + y + "-" + x;

            if (x == 0 && y == 0) {
                result += 
                `<div id='${id}' class='square square-full square-${even ? "even" : "odd"}'>
                    <div class='square-dot'></div>
                    <div class="square-cover"></div>
                    <input class='square-check' type='radio' name="squares" checked/>
                    <input class="square-disable" type='checkbox'></input>
                </div>`
                even = !even;
                continue;
            }
            result += 
            `<div id='${id}' class='square square-${full ? "full" : "empty"} square-${even ? "even" : "odd"}'>
                
                <div class='square-dot'></div>
                <div class="square-cover"></div>
                <input class='square-check' type='radio' name="squares"/>
                <input class="square-disable" type='checkbox'></input>
            </div>`;
            even = !even
        }
        if (GRIDSIZE % 2 == 0) {
            even = !even
        }
    }
    console.log(result);
    return result;
}

function show(puzzle, elem) {
    elem.style.gridTemplateColumns = "repeat("+GRIDSIZE+", auto)";
    elem.innerHTML = getHtml(puzzle);
}
show(null, document.getElementById("grid-0"));