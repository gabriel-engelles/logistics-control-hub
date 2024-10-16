import { type SQLiteDatabase } from 'expo-sqlite'


export async function initializeDatabase(database: SQLiteDatabase) {
    
    // CREATE TABLE delivery_type
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS delivery_type (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT,
            delivery_commission REAL,
            requires_paid BOOLEAN,
            requires_paid_method BOOLEAN,
            requires_received BOOLEAN,
            requires_received_method BOOLEAN,
            requires_pickup_location BOOLEAN,
            requires_delivery_location BOOLEAN
        );
    `)

    // CREATE TABLE payment_options
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS payment_options (
            id INTEGER PRIMARY KEY,
            method_name TEXT NOT NULL UNIQUE,
            method_type TEXT NOT NULL CHECK (method_type IN ('paid','received'))
        );
    `)

    // INSERT OR IGNORE INTO payment_options
    await database.execAsync(`
        INSERT OR IGNORE INTO payment_options (method_name, method_type)
        VALUES
            ('mb', 'paid'),
            ('cash', 'paid'),
            ('paid_online', 'paid'),
            
            ('mb', 'received'),
            ('cash', 'received'),
            ('paid_online', 'received') 
    `)

    // CREATE TABLE delivery
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS delivery (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            delivery_type_id INTEGER,
            paid_method_id INTEGER,
            received_method_id INTEGER,
            value_paid REAL,
            value_received REAL,
            pickup_location TEXT,
            delivery_location TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
            FOREIGN KEY (delivery_type_id) REFERENCES delivery_type(id),
            FOREIGN KEY (paid_method_id) REFERENCES payment_method(id),
            FOREIGN KEY (received_method_id) REFERENCES payment_method(id)
        )
    `)
}