const gridElement = document.querySelector(".grid")
const numberSqElement = document.querySelector("#numberSq")



function start(n){

    let nSquares = n;
    let sizeSquares = (100 - nSquares/4)/nSquares;

    for( let row = 0; row < nSquares; row++){
        for( let column=0; column < nSquares; column++ ){
            let squareEl = document.createElement("div");
            squareEl.id = `${row}${column}`;
            squareEl.className = "square";
            squareEl.style.backgroundColor = "black";
            squareEl.style.width = `${sizeSquares}%`;
    
            squareEl.addEventListener("dblclick", () => {
                console.log (squareEl.style.backgroundColor)
                if (squareEl.style.backgroundColor == "black")
                    squareEl.style.backgroundColor = "red";
                else squareEl.style.backgroundColor = "black";
            });
    
            // squareEl.addEventListener("mouseover", () => {
            //     if (squareEl.style.backgroundColor == "black")
            //         squareEl.style.backgroundColor = "red";
            //     else squareEl.style.backgroundColor = "red";
            // });
    
            // squareEl.addEventListener("mouseout", () => {
            //     if (squareEl.style.backgroundColor == "black")
            //         squareEl.style.backgroundColor = "red";
            //     else squareEl.style.backgroundColor = "black";
            // });
            gridElement.append(squareEl);
        }
    }
}

numberSqElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        nSquares = numberSqElement.value;
        start(nSquares);
    }
});





