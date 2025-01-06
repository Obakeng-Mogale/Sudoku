import express from "express"
import ejs from "ejs"
import { generateSudokuBoard } from "./sudoku"
//Imports
const app = express()



app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')
app.use(express.static("public"))

var board = [
    [null,null,7,4,9,1,6,null,5],
    [2,null,null,null,6,null,3,null,9],
    [null,null,null,null,null,7,null,1,null],
    [null,5,8,6,null,null,null,null,4],
    [null,null,3,null,null,null,null,9,null],
    [null,null,6,2,null,null,1,8,7],
    [9,null,4,null,7,null,null,null,2],
    [6,7,null,8,3,null,null,null,null],
    [8,1,null,null,4,5,null,null,null]
]



app.get('/',function(req,res){
    res.render('index.ejs',{board:board})
})
app.post('/',function(req,res){
    const btn = req.query.button
    if (btn===sol_board[i][j]){
        board[i][j]=btn
    }
    board = board
    res.render('index.ejs',{board:board})
})

app.listen(3000,()=>{
    console.log("app open on port 3000")
})