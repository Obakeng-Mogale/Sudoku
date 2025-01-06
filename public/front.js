for (let index = 0; index < 9; index++) {
    for (let jdex = 0; jdex < 9; jdex++) {
        let clicked_square = document.getElementById(index.toString()+jdex.toString()).addEventListener("click",selectNumber)
    }
}  
let clicked_square_prev=null
function selectNumber(){
    if (clicked_square_prev!=null){
        clicked_square_prev.classList.remove("highlight")
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    }
    clicked_square_prev = this
    
    this.classList.add("highlight")
     
 
    
}