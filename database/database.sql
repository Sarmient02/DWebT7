CREATE DATABASE firstapi;

CREATE TABLE documents(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(50)
);

INSERT INTO documents (name, description) VALUES
    ('Registro Civil', 'Se inscribe el nacimiento, matrimonio y defuncion'),
    ('Tarjeta de Identidad', 'Identifica a los menores de 7 a 17 años'),
    ('Cedula de Ciudadania', 'Identifica a los mayores de edad (+18 años)'),
    ('Pasaporte', 'Identifica a los ciudadanos internacionalmente'),
    ('Cedula de Extranjeria', 'Identifica a extranjeros en territorio nacional');