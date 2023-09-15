SHOW USER;
-- Desactiva las restricciones (Foreign Keys) para eliminar tablas
BEGIN
   FOR r in (SELECT constraint_name, table_name 
             FROM user_constraints 
             WHERE constraint_type = 'R' 
             AND r_constraint_name IN 
                 (SELECT constraint_name 
                  FROM user_constraints 
                  WHERE constraint_type IN ('P','U'))) 
   LOOP
      EXECUTE IMMEDIATE 'ALTER TABLE ' || r.table_name || ' DROP CONSTRAINT ' || r.constraint_name;
   END LOOP;
END;
/

-- Elimina las tablas
DROP TABLE Reservas;
DROP TABLE Pagos;
DROP TABLE MediosPago;
DROP TABLE Tarifas;
DROP TABLE Trabajadores;
DROP TABLE Clientes;
DROP TABLE Habitaciones;
DROP TABLE Pisos;
DROP TABLE Hotel;
DROP TABLE Cargos;


COMMIT;


-- Creación de las tablas:


-- Hotel
CREATE TABLE Hotel (
    HotelID       NUMBER PRIMARY KEY,
    Nombre        VARCHAR2(100) NOT NULL,
    Ubicacion     VARCHAR2(255) NOT NULL
);

-- Pisos
CREATE TABLE Pisos (
    PisoID NUMBER PRIMARY KEY,
    HotelID NUMBER,
    NumeroPiso VARCHAR2(2) NOT NULL,
    FOREIGN KEY (HotelID) REFERENCES Hotel(HotelID)
);

-- Habitaciones
CREATE TABLE Habitaciones (
    HabitacionID NUMBER PRIMARY KEY,
    PisoID NUMBER,
    NumeroHabitacion VARCHAR2(4) NOT NULL,
    FOREIGN KEY (PisoID) REFERENCES Pisos(PisoID)
);

-- Cargos
CREATE TABLE Cargos (
    CargoID       NUMBER PRIMARY KEY,
    Descripcion   VARCHAR2(100) NOT NULL
);

-- Clientes
CREATE TABLE Clientes (
    ClienteID      NUMBER PRIMARY KEY,
    Rut            VARCHAR2(20) UNIQUE NOT NULL,
    Nombre         VARCHAR2(100) NOT NULL,
    ApellidoPaterno  VARCHAR2(100),
    ApellidoMaterno  VARCHAR2(100),
    NumeroContacto   VARCHAR2(20),
    CorreoElectronico VARCHAR2(100) UNIQUE,
    Usuario        VARCHAR2(50) UNIQUE,
    Contrasena     VARCHAR2(100) NOT NULL
);

-- Trabajadores
CREATE TABLE Trabajadores (
    TrabajadorID  NUMBER PRIMARY KEY,
    Rut           VARCHAR2(20) UNIQUE NOT NULL,
    Nombre        VARCHAR2(100) NOT NULL,
    ApellidoPaterno VARCHAR2(100),
    ApellidoMaterno VARCHAR2(100),
    Direccion     VARCHAR2(255),
    CorreoElectronico VARCHAR2(100) UNIQUE,
    CargoID       NUMBER,
    Usuario       VARCHAR2(50) UNIQUE,
    Contrasena    VARCHAR2(100) NOT NULL,
    FOREIGN KEY (CargoID) REFERENCES Cargos(CargoID)
);

-- Medios de Pago
CREATE TABLE MediosPago (
    MedioPagoID   NUMBER PRIMARY KEY,
    Descripcion   VARCHAR2(100) NOT NULL
);

-- Reservas
CREATE TABLE Reservas (
    ReservaID     NUMBER PRIMARY KEY,
    ClienteID     NUMBER,
    HabitacionID  NUMBER,
    FechaInicio   DATE NOT NULL,
    FechaFinal    DATE NOT NULL,
    PlataformaWeb VARCHAR2(255),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (HabitacionID) REFERENCES Habitaciones(HabitacionID)
);

-- Pagos
CREATE TABLE Pagos (
    PagoID        NUMBER PRIMARY KEY,
    ReservaID     NUMBER,
    ClienteID     NUMBER,
    MedioPagoID   NUMBER,
    Monto         DECIMAL(10,2) NOT NULL,
    FechaPago     DATE NOT NULL,
    FOREIGN KEY (ReservaID) REFERENCES Reservas(ReservaID),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (MedioPagoID) REFERENCES MediosPago(MedioPagoID)
);

-- Tarifas
CREATE TABLE Tarifas (
    TarifaID NUMBER PRIMARY KEY,
    HabitacionID NUMBER,
    Precio DECIMAL(10, 2) NOT NULL,
    FechaInicioValida DATE,
    FechaFinValida DATE,
    FOREIGN KEY (HabitacionID) REFERENCES Habitaciones(HabitacionID)
);

-- Llenado de las tablas:

-- Hotel
INSERT INTO Hotel (HotelID, Nombre, Ubicacion) VALUES (1, 'HOTEL PACIFIC REEF', '123 Calle Principal');

-- Pisos
DECLARE
    p_piso Pisos.PisoID%TYPE;
BEGIN
    FOR i IN 1..7 LOOP
        INSERT INTO Pisos (PisoID, HotelID, NumeroPiso) VALUES (i, 1, CHR(64 + i));
        p_piso := i;
        IF i <= 5 THEN
            FOR j IN 1..10 LOOP
                INSERT INTO Habitaciones (HabitacionID, PisoID, NumeroHabitacion)
                VALUES ((p_piso - 1) * 10 + j, p_piso, CHR(64 + i) || LPAD(j, 2, '0'));
            END LOOP;
        ELSE
            FOR j IN 1..4 LOOP
                INSERT INTO Habitaciones (HabitacionID, PisoID, NumeroHabitacion)
                VALUES ((p_piso - 1) * 10 + j, p_piso, CHR(64 + i) || LPAD(j, 2, '0'));
            END LOOP;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Cargos
INSERT INTO Cargos (CargoID, Descripcion) VALUES (1, 'Recepcionista');
INSERT INTO Cargos (CargoID, Descripcion) VALUES (2, 'Aseador');
INSERT INTO Cargos (CargoID, Descripcion) VALUES (3, 'Camarero');
INSERT INTO Cargos (CargoID, Descripcion) VALUES (4, 'Guardia');

-- Clientes
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (1, '11111111-1', 'Juan', 'Pérez', 'Gómez', '123456789', 'juan.perez@email.com', 'juanito', 'password123');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (2, '22222222-2', 'María', 'López', 'Rodríguez', '987654321', 'maria.lopez@email.com', 'marialopez', 'password456');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (3, '33333333-3', 'Carlos', 'Martínez', 'Herrera', '555555555', 'carlos.martinez@email.com', 'carlosm', 'password789');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (4, '44444444-4', 'Ana', 'Silva', 'Muñoz', '444444444', 'ana.silva@email.com', 'anasilva', 'password012');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (5, '55555555-5', 'Pedro', 'Castaño', 'Lara', '333333333', 'pedro.castano@email.com', 'pedrito', 'password345');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (6, '66666666-6', 'Laura', 'Ortega', 'Valdés', '222222222', 'laura.ortega@email.com', 'laurita', 'password678');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (7, '77777777-7', 'Fernando', 'Vega', 'Prieto', '111111111', 'fernando.vega@email.com', 'fervega', 'password910');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (8, '88888888-8', 'Sofía', 'Rojas', 'Paredes', '999999999', 'sofia.rojas@email.com', 'sofiarojas', 'password112');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (9, '99999999-9', 'Diego', 'Miranda', 'Zúñiga', '888888888', 'diego.miranda@email.com', 'diegom', 'password131');
INSERT INTO Clientes (ClienteID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, NumeroContacto, CorreoElectronico, Usuario, Contrasena) VALUES (10, '10101010-0', 'Daniela', 'Cortés', 'Rivas', '777777777', 'daniela.cortes@email.com', 'danielac', 'password151');

-- Trabajadores
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (1, '11112222-1', 'Roberto', 'Mendoza', 'Jiménez', 'Calle Falsa 123', 'roberto.mendoza@email.com', 1, 'robertoM', 'pass1234');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (2, '22223333-2', 'Carmen', 'Aguilar', 'Peña', 'Avenida Siempre Viva 456', 'carmen.aguilar@email.com', 2, 'carmenA', 'pass5678');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (3, '33334444-3', 'Ricardo', 'Solís', 'Ortega', 'Callejón Oscuro 789', 'ricardo.solis@email.com', 3, 'rickyS', 'pass9101');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (4, '44445555-4', 'Sandra', 'Díaz', 'Vargas', 'Camino Largo 101', 'sandra.diaz@email.com', 4, 'sandraD', 'pass1213');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (5, '55556666-5', 'Luis', 'Herrera', 'Del Valle', 'Pasaje Corto 112', 'luis.herrera@email.com', 1, 'luisH', 'pass1415');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (6, '66667777-6', 'Paola', 'Medina', 'Lara', 'Vía Rápida 456', 'paola.medina@email.com', 2, 'paolaM', 'pass1617');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (7, '77778888-7', 'Javier', 'Castañeda', 'Reyes', 'Travesía Sin Fin 999', 'javier.castaneda@email.com', 3, 'javiC', 'pass1819');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (8, '88889999-8', 'Lucía', 'Barrios', 'Soto', 'Sendero Estrecho 123', 'lucia.barrios@email.com', 4, 'luciaB', 'pass2021');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (9, '99990000-9', 'Gabriel', 'Navarro', 'Morales', 'Paseo Ancho 321', 'gabriel.navarro@email.com', 1, 'gabyN', 'pass2324');
INSERT INTO Trabajadores (TrabajadorID, Rut, Nombre, ApellidoPaterno, ApellidoMaterno, Direccion, CorreoElectronico, CargoID, Usuario, Contrasena) VALUES (10, '10101111-0', 'Patricia', 'Ojeda', 'González', 'Bulevar Grande 654', 'patricia.ojeda@email.com', 2, 'pattyO', 'pass2526');


-- MediosPago
INSERT INTO MediosPago (MedioPagoID, Descripcion) VALUES (1, 'Tarjeta Crédito');
INSERT INTO MediosPago (MedioPagoID, Descripcion) VALUES (2, 'Transferencia Bancaria');

-- Tarifas
-- (Estableciendo precios para algunas habitaciones como ejemplo)
INSERT INTO Tarifas (TarifaID, HabitacionID, Precio, FechaInicioValida, FechaFinValida) VALUES (1, 1, 100.00, TO_DATE('2023-01-01', 'YYYY-MM-DD'), TO_DATE('2023-12-31', 'YYYY-MM-DD'));
INSERT INTO Tarifas (TarifaID, HabitacionID, Precio, FechaInicioValida, FechaFinValida) VALUES (2, 2, 110.00, TO_DATE('2023-01-01', 'YYYY-MM-DD'), TO_DATE('2023-12-31', 'YYYY-MM-DD'));

-- Reservas
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (1, 1, 1, TO_DATE('2023-10-15', 'YYYY-MM-DD'), TO_DATE('2023-10-20', 'YYYY-MM-DD'), 'WebOficial');
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (2, 2, 2, TO_DATE('2023-10-05', 'YYYY-MM-DD'), TO_DATE('2023-10-10', 'YYYY-MM-DD'), 'AppMóvil');
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (3, 3, 3, TO_DATE('2023-11-01', 'YYYY-MM-DD'), TO_DATE('2023-11-05', 'YYYY-MM-DD'), 'WebOficial');
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (4, 4, 4, TO_DATE('2023-09-25', 'YYYY-MM-DD'), TO_DATE('2023-09-30', 'YYYY-MM-DD'), 'AppMóvil');
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (5, 5, 5, TO_DATE('2023-12-15', 'YYYY-MM-DD'), TO_DATE('2023-12-20', 'YYYY-MM-DD'), 'WebOficial');


-- Pruebas CRUD:

-- CREATE: Crear una nueva reserva
INSERT INTO Reservas (ReservaID, ClienteID, HabitacionID, FechaInicio, FechaFinal, PlataformaWeb) VALUES (1, 1, 5, TO_DATE('2023-10-15', 'YYYY-MM-DD'), TO_DATE('2023-10-20', 'YYYY-MM-DD'), 'Web');

-- READ: Leer la información de una reserva
SELECT * FROM Reservas WHERE ReservaID = 1;

-- UPDATE: Cambiar la fecha de una reserva
UPDATE Reservas SET FechaInicio = TO_DATE('2023-10-14', 'YYYY-MM-DD') WHERE ReservaID = 1;

-- DELETE: Eliminar una reserva
DELETE FROM Reservas WHERE ReservaID = 1;

COMMIT;  -- Asegurarse de que todas las transacciones sean permanentes
