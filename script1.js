// Initialize variables
let taskleft = 0;
let totaltask = 0;
let completed = 0;

// Function to add a new task to the list
function addnewlistelement() {
    let li = document.createElement("li");
    let task = document.getElementById("myinput").value;
    let textnode = document.createTextNode(task);
    li.appendChild(textnode);

    // Add close button
    let span = document.createElement("span");
    let closebutton = document.createTextNode("X");
    span.className = "close";
    span.appendChild(closebutton);
    li.appendChild(span);

    if (task === "") {
        alert("Please enter task to ADD to TODO list");
    } else {
        document.getElementById("myul").appendChild(li);
        totaltask = totaltask + 1;
        taskleft++;
        let updatedtotal = document.getElementById("totaltaskcount");
        let div1 = document.getElementById("totaltask");
        updatedtotal.textContent = totaltask;
        div1.appendChild(updatedtotal);
        let updatedtaskleft = document.getElementById("taskleftcount");
        let div3 = document.getElementById("taskleft");
        updatedtaskleft.textContent = taskleft;
        div3.appendChild(updatedtaskleft);
    }

    document.getElementById("myinput").value = "";
}

// Event listener to add a new task when the button is clicked
let addtask = document.getElementById("inputtextbutton");
addtask.addEventListener('click', addnewlistelement);

// Event listener to remove a task when the close button is clicked
document.getElementById("myul").addEventListener('click', function (ev) {
    if (ev.target.classList.contains('close')) {
        ev.target.parentElement.remove();
        // completed++;
        taskleft = taskleft - 1;

        let updatedtaskleft = document.getElementById("taskleftcount");
        let div3 = document.getElementById("taskleft");
        updatedtaskleft.textContent = taskleft;
        div3.appendChild(updatedtaskleft);
    }
});

// Event listener to mark a task as completed when clicked
document.getElementById("myul").addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        if (ev.target.classList.contains('checked')) {

            completed++;
        } else {

            completed--;
        }
        let updatedtaskcompleted = document.getElementById("completedcount");
        let div2 = document.getElementById("completed");
        updatedtaskcompleted.textContent = completed;
        div2.appendChild(updatedtaskcompleted);
    }
});

// Event listener to mark ALL task as completed when clicked ALLtask

document.getElementById("completeallbutton").addEventListener('click', function () {
    let lis = document.querySelectorAll('#myul li');
    console.log(lis)
    lis.forEach(li => {
        li.classList.add('checked');
        completed = totaltask;
        let updatedtaskcompleted = document.getElementById("completedcount");
        updatedtaskcompleted.textContent = completed;

        taskleft = 0;
        let updatedtaskleft = document.getElementById("taskleftcount");
        updatedtaskleft.textContent = taskleft;
    });
});

// event listener to clear the to do list

document.getElementById("clearcompletedbutton").addEventListener('click',function(){
    let li = document.querySelectorAll('#myul');
    
    li.forEach(li => {
        li.textContent="";
    })

})

