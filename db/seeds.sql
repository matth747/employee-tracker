INSERT INTO department (name)
VALUES  ('Sales'),
        ('QA'),
        ('HR'),
        ('Accounting'),
        ('MGMT');
   

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 70000, 1),
       ('QA person', 80000, 2),
       ('HR Lead', 70000, 3),
       ('HR worker', 60000, 3),
       ('Accountant', 200000, 4),
       ('Manager', 100000, 5);
   
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Matt', 'Hanson', 7, null), 
       ('Arthur', 'Miller', 1, null),
       ('Chinua', 'Achebe', 2, 1),
       ('Margaret', 'Atwood', 3, 1),
       ('Gabriel', 'Marquez', 4, null),
       ('Simone', 'Johnson', 5, 1),
       ('Larry', 'Johnson', 6, null),
       ('Keith', 'Anderson', 6, null);