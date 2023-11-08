let difficultyLevel = document.getElementById('difficultyLevel');
let cellNum = '';
let grid = document.getElementById('grid');
let playBtn = document.getElementById('playBtn');
let squareSize = '';

// start game

playBtn.addEventListener('click', function () {

    // void
    grid.innerHTML = '';

    // set difficulty level
    if(difficultyLevel.value == 'easy') {
        cellNum = 100;
        squareSize = 'squareEasy';

    }else if(difficultyLevel.value == 'medium') {
        cellNum = 81;
        squareSize = 'squareMedium';

    }else{
        cellNum = 49;
        squareSize ='squareHard';
    }

    for (let i = 1; i <= cellNum; i++) {
        let oneCell = buildSquare(i);
        grid.appendChild(oneCell);
        oneCell.innerHTML = i;
    }
    
});

// buildSquare function

function buildSquare(num) {
    const cell = document.createElement('div');
    cell.classList.add(squareSize);

    cell.addEventListener('click', function () {
        cell.classList.toggle('selected');
    });
    return cell;
}