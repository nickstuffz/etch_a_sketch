// script it

const container = document.querySelector('#grid-container');
for (i=0; i<16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    for (j=0; j<16; j++) {
        const grid = document.createElement('div');
        grid.style.border = '1px solid black';
        grid.style.width = '40px';
        grid.style.height = '40px';
        row.appendChild(grid);
    };
};
