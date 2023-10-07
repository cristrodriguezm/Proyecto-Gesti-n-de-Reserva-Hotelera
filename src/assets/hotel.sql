CREATE TABLE IF NOT EXISTS Pisos (
    Piso CHAR(1) PRIMARY KEY,
    HabitacionesTipo VARCHAR(50) NOT NULL,
    PisoNumero INT NOT NULL
);

-- Create the Rooms table
CREATE TABLE IF NOT EXISTS Rooms (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Numero INT NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    Precio NUMERIC(10, 2) NOT NULL,
    Descripcion TEXT NOT NULL,
    Piso CHAR(1),
    FOREIGN KEY (Piso) REFERENCES Pisos(Piso)
);

-- Create the Fotografias table
CREATE TABLE IF NOT EXISTS Fotografias (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre VARCHAR(255) NOT NULL,
    RoomID INTEGER,
    FOREIGN KEY (RoomID) REFERENCES Rooms(ID)
);


-- Insert data into Pisos table
INSERT INTO Pisos (Piso, HabitacionesTipo, PisoNumero) VALUES ('A', 'turista', 1), ('B', 'turista', 2), ('C', 'turista', 3), ('D', 'turista', 4), ('E', 'turista', 5), ('F', 'premium', 6), ('G', 'premium', 7);

-- Insert Rooms
INSERT INTO Rooms (Numero, Estado, Precio, Descripcion, Piso) VALUES
    ('1', 'disponible', '45000', 'descripción', 1), ('2', 'disponible', '45000', 'descripción', 1), ('3', 'disponible', '45000', 'descripción', 1), ('4', 'disponible', '45000', 'descripción', 1), ('5', 'disponible', '45000', 'descripción', 1), ('6', 'disponible', '45000', 'descripción', 1), ('1', 'disponible', '45000', 'descripción', 2), ('2', 'ocupada', '45000', 'descripción', 2), ('3', 'ocupada', '45000', 'descripción', 2), ('4', 'disponible', '45000', 'descripción', 2), ('5', 'disponible', '45000', 'descripción', 2), ('6', 'disponible', '45000', 'descripción', 2), ('1', 'disponible', '45000', 'descripción', 3), ('2', 'ocupada', '45000', 'descripción', 3), ('3', 'disponible', '45000', 'descripción', 3), ('4', 'ocupada', '45000', 'descripción', 3), ('5', 'ocupada', '45000', 'descripción', 3), ('6', 'ocupada', '45000', 'descripción', 3), ('1', 'disponible', '45000', 'descripción', 4), ('2', 'disponible', '45000', 'descripción', 4), ('3', 'disponible', '45000', 'descripción', 4), ('4', 'disponible', '45000', 'descripción', 4), ('5', 'disponible', '45000', 'descripción', 4), ('6', 'disponible', '45000', 'descripción', 4), ('1', 'ocupada', '45000', 'descripción', 5), ('2', 'disponible', '45000', 'descripción', 5), ('3', 'ocupada', '45000', 'descripción', 5), ('4', 'disponible', '45000', 'descripción', 5), ('5', 'disponible', '45000', 'descripción', 5), ('6', 'ocupada', '45000', 'descripción', 5), ('1', 'disponible', '80000', 'descripción', 6), ('2', 'ocupada', '80000', 'descripción', 6), ('3', 'disponible', '80000', 'descripción', 6), ('4', 'ocupada', '80000', 'descripción', 6), ('1', 'disponible', '80000', 'descripción', 7), ('2', 'disponible', '80000', 'descripción', 7), ('3', 'disponible', '80000', 'descripción', 7), ('4', 'ocupada', '80000', 'descripción', 7);


INSERT INTO Fotografias (Nombre, RoomID) VALUES ('1.jpg', 1), ('2.jpg', 1), ('3.jpg', 1), ('1.jpg', 2), ('2.jpg', 2), ('3.jpg', 2), ('1.jpg', 3), ('2.jpg', 3), ('3.jpg', 3), ('1.jpg', 4), ('2.jpg', 4), ('3.jpg', 4), ('1.jpg', 5), ('2.jpg', 5), ('3.jpg', 5), ('1.jpg', 6), ('2.jpg', 6), ('3.jpg', 6), ('1.jpg', 7), ('2.jpg', 7), ('3.jpg', 7), ('1.jpg', 8), ('2.jpg', 8), ('3.jpg', 8), ('1.jpg', 9), ('2.jpg', 9), ('3.jpg', 9), ('1.jpg', 10), ('2.jpg', 10), ('3.jpg', 10), ('1.jpg', 11), ('2.jpg', 11), ('3.jpg', 11), ('1.jpg', 12), ('2.jpg', 12), ('3.jpg', 12), ('1.jpg', 13), ('2.jpg', 13), ('3.jpg', 13), ('1.jpg', 14), ('2.jpg', 14), ('3.jpg', 14), ('1.jpg', 15), ('2.jpg', 15), ('3.jpg', 15), ('1.jpg', 16), ('2.jpg', 16), ('3.jpg', 16), ('1.jpg', 17), ('2.jpg', 17), ('3.jpg', 17), ('1.jpg', 18), ('2.jpg', 18), ('3.jpg', 18), ('1.jpg', 19), ('2.jpg', 19), ('3.jpg', 19), ('1.jpg', 20), ('2.jpg', 20), ('3.jpg', 20), ('1.jpg', 21), ('2.jpg', 21), ('3.jpg', 21), ('1.jpg', 22), ('2.jpg', 22), ('3.jpg', 22), ('1.jpg', 23), ('2.jpg', 23), ('3.jpg', 23), ('1.jpg', 24), ('2.jpg', 24), ('3.jpg', 24), ('1.jpg', 25), ('2.jpg', 25), ('3.jpg', 25), ('1.jpg', 26), ('2.jpg', 26), ('3.jpg', 26), ('1.jpg', 27), ('2.jpg', 27), ('3.jpg', 27), ('1.jpg', 28), ('2.jpg', 28), ('3.jpg', 28), ('1.jpg', 29), ('2.jpg', 29), ('3.jpg', 29), ('1.jpg', 30), ('2.jpg', 30), ('3.jpg', 30), ('1.jpg', 31), ('2.jpg', 31), ('3.jpg', 31), ('1.jpg', 32), ('2.jpg', 32), ('3.jpg', 32), ('1.jpg', 33), ('2.jpg', 33), ('3.jpg', 33), ('1.jpg', 34), ('2.jpg', 34), ('3.jpg', 34), ('1.jpg', 35), ('2.jpg', 35), ('3.jpg', 35), ('1.jpg', 36), ('2.jpg', 36), ('3.jpg', 36), ('1.jpg', 37), ('2.jpg', 37), ('3.jpg', 37), ('1.jpg', 38), ('2.jpg', 38), ('3.jpg', 38);
