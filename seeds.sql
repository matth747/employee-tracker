INSERT INTO department (id, name)
VALUES  (1, 'Sales'),
        (2, 'QA'),
        (3, 'HR'),
        (4, 'Accounting');
        (5, 'MGMT')
   

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 70000, 1),
       ('QA person', 80000, 2),
       ('HR Lead', 70000, 3),
       ('HR worker', 60000, 3),
       ('Accountant', 200000, 4),
       ('Manager', 100000, 5);
   
INSERT INTO employees (first_name, last_name, role, manager)
VALUES ('Matt', 'Hanson', 'Manager', null) 
       ('Arthur', 'Miller', 'Sales Lead', null),
       ('Chinua', 'Achebe', 'Salesperson', 'Matt Hanson'),
       ('Margaret', 'Atwood', 'QA person', 'Matt Hanson'),
       ('Gabriel', 'Marquez', 'HR Lead', null),
       ('Simone', 'Johnson', 'HR worker', 'Matt Hanson'),
       ('Larry', 'Johnson', 'Accountant', null),
       ('Keith', 'Anderson', 'Accountant', null);