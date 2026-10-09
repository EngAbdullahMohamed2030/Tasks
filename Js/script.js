let tasks =[];
let nam = document.querySelector("#taskName");
let desc = document.querySelector("#taskDesc");
let statu=document.querySelector("#taskStatus");
let add = document.querySelector("#add");
let tbody =document.querySelector("#taskList");


function addTasks()
{
    let Adding=
    {
        fir:nam.value,
        sec:desc.value,
        thi:statu.value
    };
    tasks.push(Adding);
    displayTasks();
    nam.value="";
    desc.value="";
    statu.value="";
}
add.addEventListener("click",addTasks);
function displayTasks()
{
    if(tasks.length>0)
        {
        tbody.innerHTML="";
        tasks.forEach((el,index) =>
        {
        let isDone =el.thi.trim().toLowerCase() ==="done";
        tbody.innerHTML+=`
        <tr>
            <td>${index+1}</td>
            <td>${el.fir}</td>
            <td>${el.sec}</td>
            <td><button class="btn ${isDone?'btn-success':'btn-danger'}" onclick="toggleStatus(${index})">${el.thi}</button></td>
            <td>    
                <button class="btn btn-primary" onclick="updateTasks(${index})">Update</button>
                <button class="btn btn-danger" onclick="deleteTasks(${index})">Delete</button>
            </td>
        </tr>`
        })
    }
    else{
        tbody.innerHTML="No Task Set";
    }
}
function deleteTasks(index)
{
    tasks.splice(index,1);
    displayTasks();
}
function toggleStatus(index)
{
    let isDone =tasks[index].thi.trim().toLowerCase() ==="done";
    tasks[index].thi=isDone?'Not Done':'Done';
    displayTasks();
}

let modal=document.querySelector(".update");
let updateName=document.querySelector("#nameUpdate");
let updateDesc=document.querySelector("#descUpdate");
let updateStatus=document.querySelector("#statusUpdate");
let update=document.querySelector("#update");
let close=document.querySelector("#close");
let cancel=document.querySelector("#cancel");
let currentInd=null;

function updateTasks(index)
{
    currentInd=index;
    updateName.value=tasks[index].fir;
    updateDesc.value=tasks[index].sec;
    updateStatus.value=tasks[index].thi;
    modal.style.display="flex";
} 
function saveUpdate()
{
    tasks[currentInd].fir=updateName.value;
    tasks[currentInd].sec=updateDesc.value;
    tasks[currentInd].thi=updateStatus.value;
    displayTasks();
    hideModal();
}
function hideModal()
{
    modal.style.display="none";
    currentInd=null;
}
update.addEventListener("click",saveUpdate);
close.addEventListener("click",hideModal);
cancel.addEventListener("click",hideModal);
