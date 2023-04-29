const container = document.querySelector('#grid-container');

let initial = 16; // initial squares per side, default
gridCreator(initial);
hover();

function gridCreator(num) {
    for (i=0; i<num; i++) {
    const column = document.createElement('div');
    column.setAttribute('class', 'column');
    container.appendChild(column);
        for (j=0; j<num; j++) {
            const square = document.createElement('div');
            square.style.border = '1px solid black';
            square.style.width = '40px';
            square.style.height = '40px';
            square.setAttribute('class', 'square');
            column.appendChild(square);
        };
    };
}

function hover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'pink';
        });
        // square.addEventListener('mouseout', () => {
        //     square.style.backgroundColor = 'white';
        // });
    });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    input = prompt("How many squares per side?");
    if (input === null) {
        return;
    }
    num = Number(input);
    if (!(num > 0 && Number.isInteger(num))) {
        return alert("Error: Input must be a positive integer.");   
    }
    else if (num > 100) {
        return alert("Too large! Maximum input of 100.")
    }
    else {
        container.replaceChildren();
        gridCreator(num);
        hover();
    }
});