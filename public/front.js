
for (let index = 0; index < 9; index++) {
    document.getElementsByClassName("number-btn")[index].addEventListener('click',()=>{alert("i have been clicked")})
    for (let jdex = 0; jdex < 9; jdex++) {
        let clicked_square = document.getElementById(index.toString()+jdex.toString()).addEventListener("click",selectNumber)

    }
}  
let clicked_square_prev=null
function selectNumber(){
    let row = +this.id[0]
    let col = +this.id[1] 
    if (clicked_square_prev!=null){
        clicked_square_prev.classList.remove("highlight")
        unhighlight(clicked_square_prev.id[0],clicked_square_prev.id[1],clicked_square_prev.innerHTML)
    }
    // if (clicked_square.innerHTML===' '){
    //     return
    // }
    clicked_square_prev = this
    
    this.classList.add("highlight") 

    for (let i = 0; i <9; i++) {
        const rowElements = document.getElementById(i.toString()+col.toString());
        const colElements = document.getElementById(row.toString()+i.toString());
        
        for (let j = 0; j<9; j++){
            const element = document.getElementById(i.toString()+j.toString())
           
            if (element.innerHTML === this.innerHTML && this.id != element.id && this.innerHTML!="" ){
               
                element.classList.add("num-darker-highlight");
            };
            let startRow = Math.floor(row/3)*3+(i%3);
            let startCol = Math.floor(col/3)*3+(j%3);
            const inGrid = document.getElementById(startRow.toString()+ startCol.toString());
            if (this.id!=inGrid.id){
               
                inGrid.classList.add("darker-highlight")
            }
        }
        if (this.id!= String(rowElements.toString()+colElements.toString())){
            
            rowElements.classList.add("darker-highlight");
            colElements.classList.add("darker-highlight");
        }
        
    } 
}

function unhighlight(row,col,num){
    for (let i = 0; i <9; i++) {
        const rowElements = document.getElementById(i.toString()+col.toString());
        const colElements = document.getElementById(row.toString()+i.toString());
        for (let j = 0; j<9; j++){
            const element = document.getElementById(i.toString()+j.toString())
            console.log(this.innerHTML)
            if (element.innerHTML === num){
                element.classList.remove("num-darker-highlight");
            };
            let startRow = Math.floor(row/3)*3+(i%3)
            let startCol = Math.floor(col/3)*3+(j%3)
            
            const inGrid = document.getElementById(startRow.toString()+ startCol.toString());
            inGrid.classList.remove("darker-highlight")
           
        }
        rowElements.classList.remove("darker-highlight");
        colElements.classList.remove("darker-highlight");
        
        
    } 
}