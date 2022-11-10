'use strict';

/*Variables*/
/********************************/
let taskForm = document.querySelector('#add-task');

let addedTask = document.querySelector('#added-task');

let taskList = document.querySelector('#list-items');
let list = document.querySelectorAll('#list-items li');

//Button references
let taskEdit = document.querySelector('#edit');
let mark = document.querySelector('#mark');
let remove = document.querySelector('#remove');
let removeAll = document.querySelector('#remove-all');

let disclaimerDiv = document.querySelector('#disclaimer');

//New elements
let newList = document.createElement('ul');
let doneButton = document.createElement('input');         //Done button to "send user back to root page"
let title = document.createElement('h5');
let disclaimer = document.createElement('h6');            //Title to let user know what to do


// let removeButton = document.createElement('input');
// let clicked = false;



/*Listeners*/
/*******************************************/

/*Task Form */
taskForm.addEventListener('submit', e => {
  e.preventDefault();

  // Text input and Submit button

  title.innerText = 'Your Tasks:'

  //Creates a new list item
  let newTask = document.createElement('li');
  newTask.innerText = addedTask.value;

  // Creates a new button for each list item
  let editButton = document.createElement('input');       //Random button to be used for each button event listener
  editButton.type = 'hidden';
  editButton.className = 'buttons secondary-button';
  editButton.id = 'edit-button';

  let markButton = document.createElement('input');       //Random button to be used for each button event listener
  markButton.type = 'hidden';
  markButton.className = 'buttons secondary-button';
  markButton.id = 'edit-button';

  let removebtt = document.createElement('input');       //Random button to be used for each button event listener
  removebtt.type = 'hidden';
  removebtt.className = 'buttons secondary-button';
  removebtt.id = 'edit-button';

  // Submit button actions
  if (addedTask.value === '') {
    alert('Please enter a value!');
  } else {
    newTask.appendChild(editButton);                      //Adds edit button to new Task
    newList.appendChild(newTask);                         //Adds new Task to unordered list
    disclaimerDiv.appendChild(title);                     //Adds title to Disclaimer div
    taskList.appendChild(newList);                        //Adds unordered list to task list div
    list = document.querySelectorAll('#list-items li');   //Redeclaring list to update everytime a new task is added
    taskEdit.type = 'button';                             //Sets the button type from hidden to button to reveal it
    mark.type = 'button';
    remove.type = 'button';
    removeAll.type = 'button';
  }


  // Edit items button
  taskEdit.addEventListener('click', () => {

    disclaimer.innerText = '  Click the Edit Button to Change your Task.';  //Disclaimer for each button page
    disclaimerDiv.appendChild(disclaimer);

    editButton.type = 'button';
    editButton.value = 'Edit Task';
    newTask.appendChild(editButton);

    doneButton.type = 'button';
    doneButton.value = 'Done';
    doneButton.className = 'buttons secondary-button';
    taskList.appendChild(doneButton);

    editButton.addEventListener('click', () => {
      let edit = document.createElement('input');
      edit.type = 'text';
      edit.id = 'editTask';
      newTask.appendChild(edit);
      editButton.type = 'hidden';

      let doneEdit = document.createElement('input');
      doneEdit.type = 'button';
      doneEdit.id = 'doneEdit';
      doneEdit.value = 'Done';
      doneEdit.className = 'buttons secondary-button';
      newTask.appendChild(doneEdit);

      doneEdit.addEventListener('click', () => {
        if (edit.value === '') {
          alert('Please enter a value!');
        } else {
          newTask.innerText = edit.value;
          editButton.type = 'button';
        }
      })
    });

    doneButton.addEventListener('click', () => {
      disclaimer.remove();
      editButton.remove();
      doneButton.remove();
    });
  });

  // Marking items button
  mark.addEventListener('click', e => {

    e.preventDefault();

    disclaimer.innerText = '  Click the Task to Mark it Complete.';
    disclaimerDiv.appendChild(disclaimer);

    markButton.addEventListener('click', () => {
      if (newTask.style.textDecoration === 'none') {
        newTask.style.textDecoration = 'line-through';
      } else {
        newTask.style.textDecoration = 'none';
      }
    });

    // let editButton = document.createElement('input');
    markButton.type = 'button';
    markButton.value = 'Complete';
    newTask.appendChild(markButton);

    doneButton.type = 'button';
    doneButton.value = 'Done';
    doneButton.className = 'buttons secondary-button';
    taskList.appendChild(doneButton);

    doneButton.addEventListener('click', () => {
      disclaimer.remove();
      markButton.remove();
      doneButton.remove();
    });
  });

  addedTask.value = '';

  // Removing items button
  remove.addEventListener('click', e => {
    e.preventDefault();

    disclaimer.innerText = '  Note: Only Tasks Marked Complete can Be Removed!';
    disclaimerDiv.appendChild(disclaimer);

    removebtt.type = 'button';
    removebtt.value = 'Remove Task';
    newTask.appendChild(removebtt);

    doneButton.type = 'button';
    doneButton.value = 'Done';
    doneButton.className = 'buttons secondary-button';
    taskList.appendChild(doneButton);

    removebtt.addEventListener('click', () => {
      list.forEach(e => {
        if (e.style.textDecoration === 'line-through') {
          e.remove();
        }
      })
    });

    doneButton.addEventListener('click', () => {
      disclaimer.remove();
      removebtt.remove();
      doneButton.remove();
    });
  });
});

// Remove all items button
removeAll.addEventListener('click', e => {
  e.preventDefault();

  alert("All Tasks Removed!");

  title.remove();
  taskEdit.type = 'hidden';
  mark.type = 'hidden';
  remove.type = 'hidden';
  removeAll.type = 'hidden';

  list.forEach(e => {
    e.remove();
  })

});




