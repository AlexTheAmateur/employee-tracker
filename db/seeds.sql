INSERT INTO
    department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Head of Sales", "40000", "1"),
    ("Engineer", "80000", "2"),
    ("Head of Accounting", "100000", "3"),
    ("Company Attorney", "200000", "4");

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Alex", "Wu", "1", NULL),
    ("Some", "Guy", "2", NULL),
    ("Some", "Gal", "3", NULL),
    ("Chicken", "Legs", "4", NULL);