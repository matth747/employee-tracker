const inquirer = require('inquirer')

function startApp() {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: (['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'])
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
        } else {
            console.log('error choosing choice')
        }
    })
}

//functions for main menu options
function viewDept() {
    return inquirer
    .prompt([

    ])
}
function viewRoles() {
    
}
function viewAllEmp() {
    
}
function addDept() {
    
}
function addRole() {
    
}
function addEmp() {
    
}
function updateEmp() {
    
}
