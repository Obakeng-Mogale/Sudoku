
for (let index = 0; index < 9; index++) {
    let clicked_square = document.getElementById(index.toString()+index.toString()).addEventListener("click",selectNumber)
    
}  
function selectNumber(){
    // if (this.innerHTML != " "){
    //     this.classList.add("highlight")
    //     alert("you selected ${index}")
    // }
    console.log(this.innerHTML)
    
}