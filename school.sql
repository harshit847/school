CREATE DATABASE IF NOT EXISTS school_management;

USE school_management;

CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

INSERT INTO schools (name, address, latitude, longitude) 
VALUES 
    ('Green Valley School', '123 Green Valley, City, Country', 40.7128, -74.0060),
    ('Blue Sky Academy', '456 Blue Sky Rd, City, Country', 34.0522, -118.2437),
    ('Sunshine High School', '789 Sunshine Blvd, City, Country', 51.5074, -0.1278);
