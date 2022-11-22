const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootPassword',
      database: 'employee_db'
    },
    console.log(`Connected to the  database.`)
  );


function startApp() {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: (['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'])
        }
    ])
    .then(answer => {
        if (answer.choice === 'view all departments') {
            //function for this choice
            viewDept ();
        }
        else if (answer.choice === 'view all roles') {
            //function for this choice
            viewRoles();
        }
        else if (answer.choice === 'view all employees') {
            //function for this choice
            viewAllEmp();
        }
        else if (answer.choice === 'add a department') {
            //function for this choice
            addDept();
        }
        else if (answer.choice === 'add a role') {
            //function for this choice
            addRole();
        }
        else if (answer.choice === 'add an employee') {
            //function for this choice
            addEmp();
        }
        else if (answer.choice === 'update an employee role') {
            //function for this choice
            updateEmp();
        }
        else if (answer.choice === 'quit') {
            //end the program
            return
        }
        else {
            console.log('error choosing choice')
        }
    })
}

//functions for main menu options
function viewDept() {
    //view department table
    db.query(`S FROM favorite_books WHERE id = ?`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
}
function viewRoles() {
    //view roles table
}
function viewAllEmp() {
    //view employee table
}
function addDept() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'deptName',
        }
    ])
    
}
function addRole() {
    return inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'deptName',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
    },
    {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: 'deptName',
        //pull department names to make the list below
        choices: ([''])
    }
    //message saying added successfully
])
}
function addEmp() {
    return inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the employee\'s first name?',
        name: 'firstName',
    },
    {
        type: 'input',
        message: 'What is the employee\'s last name?',
        name: 'lastName',
    },
    {
        type: 'list',
        message: 'What is the employee\'s role?',
        name: 'role',
        //pull role names to make the list below
        choices: ([''])
    },
    {
        type: 'list',
        message: 'Who is the employee\'s manager?',
        name: 'role',
        //pull manager names to make the list below
        choices: (['None', ])
    }
    ])
}
function updateEmp() {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'Which employees role do you want to update?',
            name: 'empUpd',
            //pull employee names to make the list below
            choices: (['', ''])
        },
        {
            type: 'list',
            message: 'Which role do you want to assign to selected employee?',
            name: 'newRole',
            //pull role names to make the list below
            choices: (['None', ])
        }
    ])
}

startApp()