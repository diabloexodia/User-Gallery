
## User Class GitHub Readme  
This is a simple JavaScript class named User that interacts with a mock API to perform CRUD operations on user data. The class provides functionality to display a list of users, add new users, edit user details, and delete users. The user interface is created dynamically using HTML and styled with CSS. The mock API used in this example is MockAPI.  


The list of users will be displayed on the web page along with options to add, edit, and delete users.

## Features  
## Display Users   
The class fetches user data from the mock API and displays it on the web page. User details include name, email, avatar, ID, and date of birth.  

## Add New User  
Click on the "+ Add New User" button to open a modal for adding a new user. Enter the required details such as name, email, avatar URL, and date of birth. Click the "Insert" button to add the user to the list.  

## Edit User Details  
Click the "Edit" button next to a user to open a modal for editing user details. Modify the name, email, and date of birth, then click the "Confirm" button to update the user's information.  

## Delete User  
Click the "Delete" button next to a user to delete that user from the list.  

## Mock API  
The class interacts with the mock API hosted at https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo. The API supports CRUD operations for user data.  

## Dependencies  
This class uses standard HTML, CSS, and JavaScript.  
Fetch API is used for making asynchronous requests to the mock API.  
