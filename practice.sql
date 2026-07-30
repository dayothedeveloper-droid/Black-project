-- Create Database

CREATE DATABASE school;

-- use database

USE school;


--  created table

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    height INT
    
)


INSERT INTO students (username, height) VALUES ("MR LUKMAN", 6ft);
SELECT * FROM students ;