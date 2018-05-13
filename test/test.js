var index = require('../index.js');
var assert = require('assert');

var sample= [{"value":null,"available":[1,6,9,3,4,5,2,7,8],"row":1,"column":1,"block":1},{"value":null,"available":[9,1,6,4,3,8,2,7,5],"row":1,"column":2,"block":1},{"value":null,"available":[9,3,5,2,4,1,6,7,8],"row":1,"column":3,"block":1},{"value":null,"available":[8,5,2,1,7,3,6,9,4],"row":1,"column":4,"block":2},{"value":null,"available":[5,7,2,1,8,3,6,9,4],"row":1,"column":5,"block":2},{"value":null,"available":[4,5,7,1,3,2,8,6,9],"row":1,"column":6,"block":2},{"value":null,"available":[5,6,2,4,1,8,3,7,9],"row":1,"column":7,"block":3},{"value":null,"available":[2,4,1,5,7,8,9,3,6],"row":1,"column":8,"block":3},{"value":null,"available":[5,4,3,8,1,7,2,9,6],"row":1,"column":9,"block":3},{"value":null,"available":[4,3,1,5,2,8,9,6,7],"row":2,"column":1,"block":1},{"value":null,"available":[5,3,7,4,6,2,1,8,9],"row":2,"column":2,"block":1},{"value":null,"available":[5,2,7,4,8,6,3,9,1],"row":2,"column":3,"block":1},{"value":null,"available":[4,9,7,6,3,5,1,2,8],"row":2,"column":4,"block":2},{"value":null,"available":[6,4,5,2,9,3,7,1,8],"row":2,"column":5,"block":2},{"value":null,"available":[2,8,3,5,6,7,4,1,9],"row":2,"column":6,"block":2},{"value":null,"available":[8,3,7,4,9,1,2,5,6],"row":2,"column":7,"block":3},{"value":null,"available":[9,6,2,5,4,8,3,7,1],"row":2,"column":8,"block":3},{"value":null,"available":[9,4,3,2,8,7,1,5,6],"row":2,"column":9,"block":3},{"value":null,"available":[4,8,9,3,7,6,5,2,1],"row":3,"column":1,"block":1},{"value":null,"available":[7,6,9,8,2,1,5,4,3],"row":3,"column":2,"block":1},{"value":null,"available":[9,1,5,6,3,7,4,8,2],"row":3,"column":3,"block":1},{"value":null,"available":[4,3,9,1,2,6,7,8,5],"row":3,"column":4,"block":2},{"value":null,"available":[1,4,2,9,5,8,6,3,7],"row":3,"column":5,"block":2},{"value":null,"available":[8,6,9,1,2,4,3,5,7],"row":3,"column":6,"block":2},{"value":null,"available":[9,1,4,2,5,8,3,7,6],"row":3,"column":7,"block":3},{"value":null,"available":[2,9,4,7,5,6,3,8,1],"row":3,"column":8,"block":3},{"value":null,"available":[8,1,5,7,6,2,3,4,9],"row":3,"column":9,"block":3},{"value":null,"available":[8,2,1,7,4,6,5,9,3],"row":4,"column":1,"block":4},{"value":null,"available":[7,4,9,8,5,2,3,6,1],"row":4,"column":2,"block":4},{"value":null,"available":[5,4,3,1,7,2,8,9,6],"row":4,"column":3,"block":4},{"value":null,"available":[4,5,2,8,1,9,3,7,6],"row":4,"column":4,"block":5},{"value":null,"available":[8,3,9,6,4,1,7,2,5],"row":4,"column":5,"block":5},{"value":null,"available":[4,5,8,2,7,1,6,3,9],"row":4,"column":6,"block":5},{"value":null,"available":[3,4,1,5,7,6,8,9,2],"row":4,"column":7,"block":6},{"value":null,"available":[6,8,4,9,5,2,7,1,3],"row":4,"column":8,"block":6},{"value":null,"available":[9,3,4,8,6,7,2,5,1],"row":4,"column":9,"block":6},{"value":null,"available":[4,1,9,2,7,6,5,8,3],"row":5,"column":1,"block":4},{"value":null,"available":[2,4,6,9,1,7,5,8,3],"row":5,"column":2,"block":4},{"value":null,"available":[6,7,2,3,4,8,1,5,9],"row":5,"column":3,"block":4},{"value":null,"available":[1,8,3,4,6,9,5,7,2],"row":5,"column":4,"block":5},{"value":null,"available":[8,9,5,4,3,2,6,7,1],"row":5,"column":5,"block":5},{"value":null,"available":[5,3,9,6,8,4,1,7,2],"row":5,"column":6,"block":5},{"value":null,"available":[2,1,4,3,8,6,5,7,9],"row":5,"column":7,"block":6},{"value":null,"available":[1,6,3,4,9,2,5,8,7],"row":5,"column":8,"block":6},{"value":null,"available":[5,4,6,9,2,3,8,1,7],"row":5,"column":9,"block":6},{"value":null,"available":[5,3,8,1,6,9,2,7,4],"row":6,"column":1,"block":4},{"value":null,"available":[8,4,9,7,5,1,2,6,3],"row":6,"column":2,"block":4},{"value":null,"available":[5,1,4,7,3,6,2,9,8],"row":6,"column":3,"block":4},{"value":null,"available":[9,2,4,3,1,7,5,6,8],"row":6,"column":4,"block":5},{"value":null,"available":[5,8,4,6,3,7,1,2,9],"row":6,"column":5,"block":5},{"value":null,"available":[1,6,3,2,4,8,9,5,7],"row":6,"column":6,"block":5},{"value":null,"available":[2,5,4,1,9,3,8,6,7],"row":6,"column":7,"block":6},{"value":null,"available":[9,2,8,1,6,4,5,7,3],"row":6,"column":8,"block":6},{"value":null,"available":[7,6,3,8,4,1,2,5,9],"row":6,"column":9,"block":6},{"value":null,"available":[8,3,9,2,5,1,4,7,6],"row":7,"column":1,"block":7},{"value":null,"available":[6,3,9,2,8,4,5,1,7],"row":7,"column":2,"block":7},{"value":null,"available":[2,5,9,6,1,7,8,3,4],"row":7,"column":3,"block":7},{"value":null,"available":[4,9,2,7,3,1,5,8,6],"row":7,"column":4,"block":8},{"value":null,"available":[9,8,4,7,5,6,1,2,3],"row":7,"column":5,"block":8},{"value":null,"available":[5,2,9,6,4,8,1,3,7],"row":7,"column":6,"block":8},{"value":null,"available":[1,9,5,4,2,6,7,3,8],"row":7,"column":7,"block":9},{"value":null,"available":[3,7,9,8,1,5,6,4,2],"row":7,"column":8,"block":9},{"value":null,"available":[4,1,2,8,3,6,9,7,5],"row":7,"column":9,"block":9},{"value":null,"available":[7,1,3,8,5,6,2,4,9],"row":8,"column":1,"block":7},{"value":null,"available":[3,4,5,9,2,7,8,6,1],"row":8,"column":2,"block":7},{"value":null,"available":[4,5,3,9,7,1,2,8,6],"row":8,"column":3,"block":7},{"value":null,"available":[7,2,3,8,4,9,5,1,6],"row":8,"column":4,"block":8},{"value":null,"available":[1,6,9,7,2,5,3,8,4],"row":8,"column":5,"block":8},{"value":null,"available":[5,7,1,3,2,6,4,9,8],"row":8,"column":6,"block":8},{"value":null,"available":[9,3,8,2,4,6,1,7,5],"row":8,"column":7,"block":9},{"value":null,"available":[8,7,2,9,5,4,1,3,6],"row":8,"column":8,"block":9},{"value":null,"available":[5,9,1,6,7,3,8,4,2],"row":8,"column":9,"block":9},{"value":null,"available":[6,8,3,7,4,1,9,2,5],"row":9,"column":1,"block":7},{"value":null,"available":[7,2,4,9,6,8,3,1,5],"row":9,"column":2,"block":7},{"value":null,"available":[2,7,8,6,9,5,1,4,3],"row":9,"column":3,"block":7},{"value":null,"available":[8,6,4,3,1,2,5,7,9],"row":9,"column":4,"block":8},{"value":null,"available":[8,5,3,9,1,4,6,7,2],"row":9,"column":5,"block":8},{"value":null,"available":[4,6,2,3,9,1,5,7,8],"row":9,"column":6,"block":8},{"value":null,"available":[6,4,7,2,1,5,8,9,3],"row":9,"column":7,"block":9},{"value":null,"available":[2,4,6,9,1,8,7,5,3],"row":9,"column":8,"block":9},{"value":null,"available":[3,9,4,7,6,8,1,5,2],"row":9,"column":9,"block":9}];
var sampleSolution=index._test.generateSolution(index._test.generateEmptyBoard());

describe('SudokuSolutions', function() {
  describe('functions', function() {

    it('should shuffle an array', function() {
        var shuffledArray = index._test.shuffle([1,2,3,4,5,6,7,8,9]);
        assert.notEqual(shuffledArray, [1,2,3,4,5,6,7,8,9]);
    });

    it('should have 81 cells in the empty board', function() {
      assert.equal(index._test.generateEmptyBoard().length, 81);
    });

    it('should have the correct row, column and block', function() {
        var emptyBoard = 
            index._test.generateEmptyBoard().map(function(cell) {
                return {row: cell.row, column: cell.column, block: cell.block};
            });
        var testBoard = 
            sample.map(function(cell) {
                return {row: cell.row, column: cell.column, block: cell.block};
            })
        assert.deepEqual(emptyBoard, testBoard);
    });

    it('should have null values in the empty board', function() {
        var nonNullValues = index._test.generateEmptyBoard().filter(function(cell){
            return cell.value != null;
        })
        assert.equal(nonNullValues.length,0);
    });

    it('should have all unique numbers for row 1', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 1; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 2', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 2; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 3', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 3; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 4', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 4; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);  
    });

    it('should have all unique numbers for row 5', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 5; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 6', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 6; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 7', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 7; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 8', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 8; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

    it('should have all unique numbers for row 9', function() {
        var solution = sampleSolution.filter(function(cell){
            return cell.row === 9; 
        }).map(function(cell){
            return cell.value;
        })
        assert.deepEqual(solution.sort(),[1,2,3,4,5,6,7,8,9]);
    });

   for (let i = 1; i <= 9; i++){
        it('should have all unique numbers for column '+ i, function () {

            var solution = sampleSolution.filter(function (cell) {
                return cell.column === i;
            }).map(function (cell) {
                return cell.value;
            })
            assert.deepEqual(solution.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
    }
    for (let i = 1; i <= 9; i++){
        it('should have all unique numbers for block '+ i, function () {

            var solution = sampleSolution.filter(function (cell) {
                return cell.block === i;
            }).map(function (cell) {
                return cell.value;
            })
            assert.deepEqual(solution.sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
    }
});
});