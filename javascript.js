// script it

const container = document.querySelector('#grid-container');
for (i=0; i<16; i++) {
    const column = document.createElement('div');
    container.appendChild(column);
    for (j=0; j<16; j++) {
        const square = document.createElement('div');
        square.style.border = '1px solid black';
        square.style.width = '40px';
        square.style.height = '40px';
        square.setAttribute('class', 'square');
        column.appendChild(square);
    };
};
// set up hover effect
// for each div, add hover event listener, changes color on hover
// figure out how to revert back afterwards

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'pink';
    });
    // square.addEventListener('mouseout', () => {
    //     square.style.backgroundColor = 'white';
    // });
});