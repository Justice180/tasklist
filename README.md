Task Manager Application

This is a simple Task Manager application built using HTML, CSS, and JavaScript. It allows users to add, remove, filter, and persist tasks using the browser's local storage.

Features

Add Tasks: Users can add new tasks to the list.

Remove Tasks: Each task can be removed individually.

Clear All Tasks: Option to remove all tasks at once.

Filter Tasks: Users can filter tasks based on their text.

Persistent Storage: Tasks are stored in the browser's local storage, ensuring they persist across page reloads.

Prerequisites

To run this project locally, you need:

A modern web browser (e.g., Chrome, Firefox, Edge).

Getting Started

Clone the Repository:



git clone https://github.com/yourusername/task-manager.git

Navigate to the Project Directory:

cd task-manager

Open the index.html File:

You can open the index.html file directly in your web browser by double-clicking it.

Alternatively, if you have a live server extension installed in your code editor, you can use it to serve the project.

Usage

Adding a Task:

Enter the task description in the input field.

Click the "Add Task" button.

The task will appear in the list below.

Removing a Task:

Click the delete icon (×) next to the task you wish to remove.

Clearing All Tasks:

Click the "Clear Tasks" button to remove all tasks from the list.

Filtering Tasks:

Use the filter input to search for tasks. The list will dynamically update to match the entered text.

Code Structure
HTML (index.html): Contains the structure of the application, including the task input field, buttons, and the task list.

CSS (styles.css): Provides styling for the application, ensuring a user-friendly interface.

JavaScript (app.js): Contains the logic for adding, removing, filtering, and persisting tasks. Key functions include:

addTask(e): Adds a new task to the list and stores it in local storage.

getTasks(): Retrieves tasks from local storage and displays them.

removeTask(e): Removes a specific task from the list and local storage.

clearTasks(): Clears all tasks from the list and local storage.

filterTasks(e): Filters displayed tasks based on user input.

Dependencies

Font Awesome: Used for icons in the application. Ensure you include the Font Awesome CDN link in the <head> section of your index.html file:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

Contributing

Contributions are welcome! If you have suggestions or improvements

License

This project is licensed under the MIT License.
