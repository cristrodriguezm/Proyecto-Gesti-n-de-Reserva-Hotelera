import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Hotel } from './hotel'; // Import your Hotel model
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private storage: SQLiteObject;
  hotelsList: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
  ) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'your_db_name.db', // Replace with your desired database name
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.isDbReady.next(true);
          this.getHotels(); // Fetch hotels after the database is ready
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchHotels(): Observable<Hotel[]> {
    return this.hotelsList.asObservable();
  }

  // Get list of hotels
  getHotels() {
    return this.storage
      .executeSql('SELECT * FROM Rooms', [])
      .then((res) => {
        let hotels: Hotel[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            hotels.push({
              id: res.rows.item(i).ID,
              numero: res.rows.item(i).Numero,
              estado: res.rows.item(i).Estado,
              precio: res.rows.item(i).Precio,
              descripcion: res.rows.item(i).Descripcion,
              piso: res.rows.item(i).Piso,
            });
          }
        }
        this.hotelsList.next(hotels); // Set the value here
      });
  }

  // Add a hotel
  addHotel(numero: number, estado: string, precio: number, descripcion: string, piso: number) {
    return this.storage
      .executeSql(
        'INSERT INTO Rooms (Numero, Estado, Precio, Descripcion, Piso) VALUES (?, ?, ?, ?, ?)',
        [numero, estado, precio, descripcion, piso]
      )
      .then(() => {
        this.getHotels();
      });
  }

  // Get a single hotel
  getHotel(id: any): Promise<Hotel> {
    return this.storage
      .executeSql('SELECT * FROM Rooms WHERE ID = ?', [id])
      .then((res) => {
        return {
          id: res.rows.item(0).ID,
          numero: res.rows.item(0).Numero,
          estado: res.rows.item(0).Estado,
          precio: res.rows.item(0).Precio,
          descripcion: res.rows.item(0).Descripcion,
          piso: res.rows.item(0).Piso,
        };
      });
  }

  // Update a hotel
  updateHotel(id: any, hotel: Hotel) {
    return this.storage
      .executeSql(
        'UPDATE Rooms SET Numero = ?, Estado = ?, Precio = ?, Descripcion = ?, Piso = ? WHERE ID = ?',
        [hotel.numero, hotel.estado, hotel.precio, hotel.descripcion, hotel.piso, id]
      )
      .then(() => {
        this.getHotels();
      });
  }

  // Delete a hotel
  deleteHotel(id: any) {
    return this.storage
      .executeSql('DELETE FROM Rooms WHERE ID = ?', [id])
      .then(() => {
        this.getHotels();
      });
  }
}
