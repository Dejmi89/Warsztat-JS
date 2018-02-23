/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){

    var addTaskButton = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');
    var addedTasks = taskList.children;
    var taskName = document.getElementById('taskInput');
    var removeButton = document.getElementById('removeFinishedTasksButton');
    var counter = 0;

    var taskCounter = document.createElement('h1');
    taskCounter.innerText = "Tasks to finish: "+ counter;
    var body = document.querySelector('body');
    body.insertBefore(taskCounter, taskList);


    //punkt 1
        addTaskButton.addEventListener('click', function(){

        //punkt 5

        if (taskName.value.length < 5){
            return alert('Zadanie ma a krotki opis! Dopis cos jeszcze.');
        }
        else if (taskName.value.length > 99){
            return alert('Zadanie jest zbyt dokladnie opisane, ogólniej proszę!');
        }

        var insideTaskList = document.createElement('li');
        var h1Task = document.createElement('h1');
        h1Task.innerText = taskName.value;
        var completeButton = document.createElement('button');
        completeButton.innerText = "Complete";
        completeButton.className = "complete";
        var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";


        insideTaskList.appendChild(h1Task);
        insideTaskList.appendChild(completeButton);
        insideTaskList.appendChild(deleteButton);
        taskList.appendChild(insideTaskList);
        counter += 1;
        taskCounter.innerText = "Tasks to finish: " + counter;

        taskName.value=" "; //punkt 6

        var completeButtons = document.getElementsByClassName('complete');
        var deleteButtons = document.getElementsByClassName('delete');

        //punkt 2

        for (var i = 0; i < completeButtons.length; i++){
            var count = 0;
            completeButtons[i].addEventListener('click', function() {

                    if (count === 0){
                        this.parentElement.children[0].style.color = "red";
                        count = 1;
                        this.parentElement.id = "done";
                    }
                    else if (count == 1){
                        this.parentElement.children[0].style.color = "black";
                        count = 0;
                    }

                })




        }

        //punkt 3
        for (var i = 0; i < deleteButtons.length; i++){
            deleteButtons[i].addEventListener('click', function(){
               this.parentElement.parentElement.removeChild(this.parentElement);
               counter -= 1 ;
                taskCounter.innerText = "Tasks to finish: " + counter;

            })
        }
        //punkt 4
        removeButton.addEventListener('click', function(){
            var completedTasks = taskList.children;
            for (var i = 0; i<completedTasks.length; i++){
                if (completedTasks[i].id === "done"){
                    completedTasks[i].parentElement.removeChild(completedTasks[i]);
                }
            }

            counter = taskList.children.length;
            taskCounter.innerText = "Tasks to finish: " + counter;
        })

    })









//punkt 4
//     removeButton.addEventListener('click', function(){
//         addedTasks.parentElement.removeChild(addedTasks);
//
//     })





})










