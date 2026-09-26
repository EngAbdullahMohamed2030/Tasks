const tasks =["First Task","Second Task","Third Task","Fourth Task"];
function dis_tasks()
{
    console.clear();
    tasks.forEach((task,index)=>
    {
        console.log(`${index + 1} => ${task}`);
    })
}
function add_tasks()
{
    let taskName = prompt("Enter New Task");
    tasks.push(taskName);
    dis_tasks();
}
function del_tasks()
{
    let taskNum = prompt("Enter Number to delete Task");
    tasks.splice(taskNum -1 ,1);
    dis_tasks();
}
function upd_tasks()
{
    let taskNum = prompt("Enter Number to update Task");
    let taskName = prompt("Enter Name to update Task");
    tasks.splice(taskNum -1 ,1,taskName);
    dis_tasks();
}