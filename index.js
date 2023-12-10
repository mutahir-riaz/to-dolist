let input = document.getElementById("input")
let bth_input = document.getElementById("btn")
let emptybtn = document.getElementById("empty")
let tasklist = document.getElementById("task-list")
tasklist.addEventListener('click',(e)=>{
if(e.target.tagName ==='LI'){
    e.target.classList.toggle("checked")
}
})
bth_input.addEventListener("click",addTask())
function addTask(){
    if(input.value.length>0){
    let li = document.createElement('li')
    // let text = input.value
    var bold = document.createElement("b")
    var litext = document.createTextNode(input.value)
    bold.appendChild(litext)
    bold.setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
    // bold.setAttribute("onclick","cutter(this)")
    // let btn = document.createElement("button ")
    // li.textContent=text
    // btn.TEXT_NODE="del"
    // li.appendChild(btn)
    li.appendChild(bold)
    var editButton = document.createElement("button")
            var editText = document.createTextNode("Edit")
            editButton.setAttribute("class","btn btn-warning")
            editButton.appendChild(editText)
            var deletButton = document.createElement("button")
            var deleteText = document.createTextNode("\u00d7")
            deletButton.setAttribute("class","btn btn-danger")
            deletButton.appendChild(deleteText)
            // deletButton.setAttribute("style","")
            deletButton.setAttribute("style","border-radius:50%;margin-left:8px; ")
            deletButton.setAttribute("onclick","DeleteButton(this)")
            editButton.setAttribute("onclick","editBtn(this)")
            li.appendChild(editButton)
            li.appendChild(deletButton)
            
            li.setAttribute("onclick","cutter(this)")
    
            tasklist.appendChild(li)
    input.value=""}
   emptyshow()
}
input.addEventListener("keydown",(e)=>{
    if(e.keyCode===13){
        addTask()
    }
    })
function emptyshow(){
    if(tasklist.children.length>=2){
        emptybtn.style.display="block"
    }
    else{
        emptybtn.style.display="none"
    }
}
function editBtn(e) {
    let prevtext = e.parentNode.children[0].innerText 
    let edited = prompt("Edit the task",prevtext)
    console.log(edited.length);
    if(edited.length>1){

        e.parentNode.children[0].innerText = edited
        
    }
}
function cutter(e){
    // console.log(e.children);
    if (e.children[0].getAttribute("class")=="cutter") {
        e.children[0].setAttribute("class","normal")
        }
    else{

        e.children[0].setAttribute("class","cutter")
    }
    // console.log(e.children[0].getAttribute("class"));
    emptyshow()
}
function DeleteButton(x) {
    x.parentNode.remove()
}
function empty(){
   console.log(tasklist.children)
   tasklist.innerHTML=""
}