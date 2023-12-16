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
        let dataCheck = validateMyData(input)
    
    let li = document.createElement('li')
    // let text = input.value
    var bold = document.createElement("b")
    var litext = document.createTextNode(input.value)
    bold.appendChild(litext)
    bold.setAttribute("style","width:60% !important;display:inline-block;overflow:hidden;")
    // bold.setAttribute("onclick","cutter(this)")
    // let btn = document.createElement("button ")
    // li.textContent=text
    // btn.TEXT_NODE="del"
    // li.appendChild(btn)
    var inputField = document.createElement("input")
    inputField.setAttribute("style","display:none")
    inputField.addEventListener("keypress",(e)=>{
        if(e.keyCode===13){
            updateBtn(inputField)
        }
    })
    // inputField.setAttribute("onKeyPress","handleKeyPress(event)")
    li.appendChild(inputField)
    li.appendChild(bold)
    var editButton = document.createElement("button")
            var editText = document.createTextNode("Edit")
            editButton.setAttribute("class","btn btn-warning special")
            editButton.appendChild(editText)
            var deletButton = document.createElement("button")
            var deleteText = document.createTextNode("\u00d7")
            deletButton.setAttribute("class","btn btn-danger special")
            deletButton.appendChild(deleteText)
            // deletButton.setAttribute("style","")
            deletButton.setAttribute("style","margin-left:5px")
            deletButton.setAttribute("onclick","DeleteButton(this)")
            editButton.setAttribute("onclick","editBtn(this)")
            
            var updateButton = document.createElement("button")
            var updateTextno = document.createTextNode("Update")
            updateButton.setAttribute("class","btn btn-primary special-hy")
            updateButton.appendChild(updateTextno)
            updateButton.setAttribute("style","display:none;")
            updateButton.setAttribute("onClick","updateBtn(this)")
            // updateButton.setAttribute("onkeydown","")

            li.appendChild(editButton)
            li.appendChild(deletButton)
            li.appendChild(updateButton)
            // console.log(li)
            li.setAttribute("onclick","cutter(this)")
    
            tasklist.appendChild(li)
    input.value=""} emptyshow()
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
    // let prevtext = e.parentNode.children[0].innerText 
    // let edited = prompt("Edit the task",prevtext)
    // console.log(edited.length);
    // if(edited.length>1){

    //     e.parentNode.children[0].innerText = edited
        
    // }
    for(var i = 1;i<tasklist.childNodes.length;i++){
        tasklist.childNodes[i].childNodes[0].setAttribute("style","display:none")
        tasklist.childNodes[i].childNodes[1].setAttribute("style","width:60% !important;display:inline-block;overflow:hidden; margin-right:5px")
        tasklist.childNodes[i].childNodes[2].setAttribute("style","display:inline")
        tasklist.childNodes[i].childNodes[3].setAttribute("style","display:inline")
        tasklist.childNodes[i].childNodes[4].setAttribute("style","display:none")
    }
    // e.parentNode.childNodes[1].setAttribute("class","normal")
    // cutter(e.parentNode)
    e.parentNode.childNodes[0].value = e.parentNode.childNodes[1].innerText
    e.parentNode.childNodes[0].setAttribute(
        "style","display:inline;width:60%;margin-right:10px"
    )
    e.parentNode.childNodes[1].setAttribute("style","display:none")
    e.parentNode.childNodes[2].setAttribute("style","display:none")
    e.parentNode.childNodes[3].setAttribute("style","display:none")
    e.parentNode.childNodes[4].setAttribute("style","display:inline")
}
function cutter(e){
    console.log(e.children);
    if (e.children[1].getAttribute("class")=="cutter") {
        e.children[1].setAttribute("class","normal")
        }
    else{

        e.children[1].setAttribute("class","cutter")
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
   emptyshow()
}
const validateMyData=(data)=>{
let checkdata = false
for(const i = 0;i<data.value.length;i++){
    if(data.value.toString().charCodeAt(i) != 32){
        checkdata = true
        break
    }
    return checkdata
}
} 
function updateBtn(e){
 e.parentNode.childNodes[1].innerHTML=e.parentNode.childNodes[0].value
 e.parentNode.childNodes[1].setAttribute("class","cutter")
 e.parentNode.childNodes[0].setAttribute("style","display:none")
 e.parentNode.childNodes[4].setAttribute("style","display:none")
 e.parentNode.childNodes[1].setAttribute("style","width:60% !important;display:inline-block;overflow:hidden;")
 e.parentNode.childNodes[2].setAttribute("style","display:inline;margin-right:5px")
 e.parentNode.childNodes[3].setAttribute("style","display:inline")
}
// if(tasklist.children.length>0){
//     console.log(tasklist.children[0]);
// }
// else{
//     console.log("no element yet");

// }
