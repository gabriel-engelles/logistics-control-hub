import { type SQLiteDatabase } from 'expo-sqlite'


export async function initializeDatabase(database: SQLiteDatabase) {
    
    // CREATE TABLE delivery_type
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS delivery_type (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT,
            requires_paid BOOLEAN,
            requires_paid_method BOOLEAN,
            requires_received BOOLEAN,
            requires_received_method BOOLEAN,
            requires_pickup_location BOOLEAN,
            requires_delivery_location BOOLEAN
        );
    `)
}