import { useSQLiteContext } from "expo-sqlite"

export type DeliveryDatabase = {
    id: number
    delivery_type_id: number,
    paid_method_id: number,
    received_method_id: number,
    value_paid: number,
    value_received: number,
    pickup_location: string,
    delivery_location: string,
    create_at: string,
    update_at: string
}

export function useDeliveryDatabase() {
    const database = useSQLiteContext()
    
    // CREATE delivery
    async function create(data: Omit<DeliveryDatabase, "id" | "create_at" | "update_at">) {
        const statment = await database.prepareAsync(`
            INSERT INTO delivery (
            delivery_type_id, 
            paid_method_id, 
            received_method_id, 
            value_paid,
            value_received,
            pickup_location,
            delivery_location,
            create_at
            ) 
            
            VALUES (
            $delivery_type_id, 
            $paid_method_id, 
            $received_method_id, 
            $value_paid,
            $value_received,
            $pickup_location,
            $delivery_location,
            CURRENT_TIMESTAMP
            )
        `)

        try {
            const result = await statment.executeAsync({
                $delivery_type_id: data.delivery_type_id, 
                $paid_method_id: data.paid_method_id, 
                $received_method_id: data.received_method_id, 
                $value_paid: data.value_paid,
                $value_received: data.value_received,
                $pickup_location: data.pickup_location,
                $delivery_location: data.delivery_location
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }

        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    return { create }
}