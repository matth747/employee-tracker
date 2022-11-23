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

            viewDept ();
            
        }
        else if (answer.choice === 'view all roles') {

            viewRoles();
        }
        else if (answer.choice === 'view all employees') {

            viewAllEmp();
        }
        else if (answer.choice === 'add a department') {

            addDept();
            
        }
        else if (answer.choice === 'add a role') {

            addRole();
            
        }
        else if (answer.choice === 'add an employee') {

            addEmp();
            
        }
        else if (answer.choice === 'update an employee role') {

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
    db.query(`SELECT department.id, department.name FROM department;`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
      startApp();
}


function viewRoles() {
    //view roles table
    db.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
      startApp();
}


function viewAllEmp() {
    //view employee table
    db.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
      startApp();
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

    .then(answer => {
        db.query(`INSERT INTO department (name) VALUES ('${answer.deptName}');`, (err, result) => {
            if (err) {
              console.log(err);
            } else {
            console.log('success');
            }
        });
    })
    
}
    

function addRole() {
    return inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
    },
    {
        
        type: 'input',
        message: 'Which department does the role belong to?',
        name: 'deptName'
        
    }])
    .then(answer => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answer.roleName}', ${answer.salary}, ${answer.deptName});`, (err) => {
            if (err) {
              console.log(err);
            }
            console.log('success');
          });
    })
    //message saying added successfully

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
        type: 'input',
        message: 'What is the employee\'s role #?',
        name: 'role',
        //pull role names to make the list below
        
    },
    {
        type: 'input',
        message: 'Who is the employee\'s manager #?',
        name: 'manager',
        //pull manager names to make the list below
        
    }])
    
    .then(answer => {
        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', ${answer.role}, ${answer.manager})`, (err) => {
            if (err) {
              console.log(err);
            }
            console.log('success');
          });
    })
}


function updateEmp() {
    
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Which employee id\'s role do you want to update?',
            name: 'empId',
            //pull employee names to make the list below
            
        },
        {
            type: 'input',
            message: 'Which role # do you want to assign to selected employee?',
            name: 'newRole',
            //pull role names to make the list below
            
        }])

        .then(answer => {
            db.query(`UPDATE employees SET role_id = ${answer.newRole} WHERE id = ${answer.empId}`, (err) => {
                
                if (err) {
                  console.log(err);
                }
                console.log('success');
              });
        })
}

/* function updateEmployee(answer) {
    console.log(answer)
    db.query(`UPDATE employees SET role_id = ${answer} WHERE id = ?`, (err) => {

    if (err) {
      console.log(err);
    }
    console.log('success');
  });
} */
//updateEmployee(answer)
startApp();