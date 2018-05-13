var express = require('express')
var app = express()
const port = process.env.PORT || 8080;

app.get('/sudoku/board', function (req, res) {
  var emptyBoard = generateEmptyBoard();
  var solvedBoard = generateSolution(emptyBoard)
  var flatSolvedBoard = solvedBoard.map(function(cell){
    return cell.value;
  });
  res.send(flatSolvedBoard);
})

app.listen(port, function () {
  console.log('Sudoku app listening on port '+ port)
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
    while (i>=0 && i<=80){
        //find row neighbours
        var rowFinder = board.filter(function(cell){
            return cell.row == board[i].row;
        })
        //find column neighbours
        var columnFinder = board.filter(function(cell){
            return cell.column == board[i].column;
        })
        //find block neighbours
        var blockFinder = board.filter(function(cell){
            return cell.block == board[i].block;
        })       
        
        for (var j=0; j<board[i].available.length; j++){
            //this is the number we gonna test
            var valuetoTest = board[i].available[j];
            //find values in the row that match
            var duplicateinRow = rowFinder.filter(function(cell){
                return cell.value == valuetoTest
            })
            //find values in the column that match
            var duplicateinColumn = columnFinder.filter(function(cell){
                return cell.value == valuetoTest
            })
            //find values in the block that match
            var duplicateinBlock = blockFinder.filter(function(cell){
                return cell.value == valuetoTest
            })
        
            //if valuetoTest is not in rowFinder & columnFinder & blockFinder
            if (duplicateinRow.length === 0 && duplicateinColumn.length === 0 && duplicateinBlock.length === 0){
                board[i].value=valuetoTest;
                board[i].available.splice(0, j+1);
                break;
            }

        }
        
        if (board[i].value === null){
            //if can not find will reset removed numbers and move back 1 cell
          board[i].available =shuffle([1,2,3,4,5,6,7,8,9]);
          board[i-1].value = null;
          i--;
        } else {
            //move forward 1 cell
            i++;
        }
       
    }
   //map objs to ints
    return board;
}

exports._test = {
    generateEmptyBoard: generateEmptyBoard,
    generateSolution: generateSolution,
    shuffle: shuffle
}