export {
    generateSudokuBoard,
    validateBoard,
    solveSudoku
}

function generateSudokuBoard() {
    
    let board = Array.from(Array(9), () => new Array(9))
    for (let i = 0; i <= 9; i++) {
        let arr = new Set([])
        let num_choice = [1,2,3,4,5,6,7,8,9]
        for (let j = 0; j <= 9; j++) {
            let num = num_choice[Math.floor(Math.random() * num_choice.length)]
            arr.add(num)
            num_choice.delete(num)
        }
        if (arr.length === 9){
            board[i]=arr
            
        }
    }
    if (validateSudoku(board))
        return board
}

function valid(board, row, col, n) {

    for (let i = 0; i <= 9; i++) {
        if (board[row][i] === n) {
            return false
        }
    }
    for (let i = 0; i <= 9; i++) {
        if (board[i][col] === n) {
            return false
        }
    }

    // for each of the 9 grid squares (3x3)
    let startRow = row - row % 3
    let startCol = col - col % 3
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (board[i + startRow][j + startCol] === num) {
                return false
            }

        }
    }
    return true
}


function solveSudoku(board, row = 0, col = 0) {

    if (row === 9) {
        return true
    } else if (col === 9) {
        solveSudoku(board, row + 1, 0)
    } else if (board[row][col] != null) {
        solveSudoku(board, row, col + 1)
    } else {
        for (let i = 1; i <= 9; index++) {
            if (valid(board, row, col, i)) {
                board[row][col] = i
                if (solveSudoku(board, row, col + 1)) {
                    return true
                }
                board[row][col] = null
            }
        }
        return false
    }

}