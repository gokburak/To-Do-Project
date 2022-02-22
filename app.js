const inputDiv = document.querySelector(".inputDiv")
const input = document.getElementById("input")
const button = document.getElementById("button")
const contentDiv = document.querySelector(".contentDiv")

count = 0;

button.addEventListener("click", toDoAdd)
input.addEventListener("keyup",(e)=>{
if(e.keyCode == 13){
    toDoAdd();
}
})

function toDoAdd(){

    if(input.value !=""){
        count+=1;
        let toDoSpan = document.createElement("span");
        let deleteButton = document.createElement("div")
        let finishButton = document.createElement("div")
        toDoSpan.classList.add("toDoSpan")
        deleteButton.classList.add("deleteButton")
        finishButton.classList.add("finishButton")
        finishButton.innerText ="Tamamlandı"
        deleteButton.innerText ="Sil"
        toDoSpan.innerText = `${count } -) ${input.value}`;
        contentDiv.appendChild(toDoSpan);
        toDoSpan.appendChild(finishButton)
        toDoSpan.appendChild(deleteButton)
        input.value ="";

        deleteButton.addEventListener("click",()=>{
            count--;
           contentDiv.removeChild(toDoSpan) ;
        })

        finishButton.addEventListener("click",()=>{
    toDoSpan.style.textDecoration="line-through"
     
        })
    }
    else{
        alert("Lütfen To Do giriniz")
    }
    
}













