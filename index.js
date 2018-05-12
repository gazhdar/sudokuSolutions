var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var emptyBoard = generateEmptyBoard();
  
  res.send(
    generateSolution(emptyBoard)

  )
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

/**
 *  Create an empty board for sudoku
 */
function generateEmptyBoard(){
    var sudokuNumbers = [];
    
    for (var i = 0; i<=80; i++){
        var rowValue = Math.floor(i/9) + 1;
        var colValue = i%9+1; 
        var blockValue; 
        
        //block 1 = row 1,2,3 & col 1,2,3
        if (rowValue<=3 && colValue<=3) {
            blockValue = 1;
        }
        //block 2 = row 1,2,3 & col 4,5,6
        else if (rowValue<=3 && colValue>=4 && colValue<=6) {
            blockValue = 2;
        }
        //block 3 = row 1,2,3 & col 7,8,9
        else if (rowValue<=3 && colValue>=7) {
            blockValue = 3;
        }
        //block 4 = row 4,5,6 & col 1,2,3
        else if (rowValue>=4 && rowValue<=6 && colValue<=3) {
            blockValue = 4;
        }
        //block 5 = row 4,5,6 & col 4,5,6
        else if (rowValue>=4 && rowValue<=6 && colValue>=4 && colValue<=6) {
            blockValue = 5;
        }
        //block 6 = row 4,5,6 & col 7,8,9
        else if (rowValue>=4 && rowValue<=6 && colValue>=7) {
            blockValue = 6;
        }
        //block 7 = row 7,8,9 & col 1,2,3
        else if (rowValue>=7 && colValue<=3) {
            blockValue = 7;
        }
        //block 8 = row 7,8,9 & col 4,5,6
        else if (rowValue>=7 && colValue>=4 && colValue<=6) {
            blockValue = 8;
        }
        //block 9 = row 7,8,9 & col 7,8,9
        else if (rowValue>=7 && colValue>=7) {
            blockValue = 9;
        }
        
        var sudokuCell = {
            value:null,
            available:shuffle([1,2,3,4,5,6,7,8,9]),
            row:rowValue,
            column:colValue,
            block:blockValue
        };
        sudokuNumbers.push(sudokuCell);
    }

    return sudokuNumbers;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function generateSolution(board){
    
    var  i=0;
    while (i<=80){
        //if works i++ if not i--
        board[i].value=board[i].available[0]
        i++;
    }
    return board;
}