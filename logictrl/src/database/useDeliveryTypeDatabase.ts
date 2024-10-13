import { useSQLiteContext } from "expo-sqlite"

export type DeliveryTypeDatabase = {
    id: number,
    type: string,
    delivery_commission: number,
    requires_paid: boolean,
    requires_paid_method: boolean,
    requires_received: boolean,
    requires_received_method: boolean,
    requires_pickup_location: boolean,
    requires_delivery_location: boolean
}

export function useDeliveryTypeDatabase() {
    const database = useSQLiteContext()

    // CREATE delivery_type
    async function create(data: Omit<DeliveryTypeDatabase, "id">) {
        const statment = await database.prepareAsync(`
            INSERT INTO delivery_type (
            type,
            delivery_commission,
            requires_paid,
            requires_paid_method,
            requires_received,
            requires_received_method,
            requires_pickup_location,
            requires_delivery_location
            )    

            VALUES (
            $type,
            $delivery_commission,
            $requires_paid,
            $requires_paid_method,
            $requires_received,
            $requires_received_method,
            $requires_pickup_location,
            $requires_delivery_location
            )
        `)

        try {
            await statment.executeAsync({
                $type: data.type,
                $delivery_commission: data.delivery_commission,
                $requires_paid: data.requires_paid,
                $requires_paid_method: data.requires_paid_method,
                $requires_received: data.requires_received,
                $requires_received_method: data.requires_received_method,
                $requires_pickup_location: data.requires_pickup_location,
                $requires_delivery_location: data.requires_delivery_location
            })

        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    // UPDATE delivery_type
    async function update(data: DeliveryTypeDatabase) {
        const statment = await database.prepareAsync(`
            UPDATE delivery_type SET
            type = $type,
            delivery_commission = $delivery_commission,
            requires_paid = $requires_paid,
            requires_paid_method = $requires_paid_method,
            requires_received = $requires_received,
            requires_received_method = $requires_received_method,
            requires_pickup_location = $requires_pickup_location,
            requires_delivery_location = $requires_delivery_location
               
            WHERE id = $id
        `)

        try {
            await statment.executeAsync({
                $type: data.type,
                $delivery_commission: data.delivery_commission,
                $requires_paid: data.requires_paid,
                $requires_paid_method: data.requires_paid_method,
                $requires_received: data.requires_received,
                $requires_received_method: data.requires_received_method,
                $requires_pickup_location: data.requires_pickup_location,
                $requires_delivery_location: data.requires_delivery_location
            })

        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    // DELETE delivery_type
    async function deleteDeliveryType(data: DeliveryTypeDatabase) {
        const statment = await database.prepareAsync(`
            DELETE FROM delivery_type
            
            WHERE id = $id
        `)

        try {
            await statment.executeAsync({
                $id: data.id
            })
            
        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    async function searchByDeliveryType(searchDType: string) {
        try {
            const query = "SELECT * FROM delivery_type WHERE type LIKE ?"

            const response = await database.getAllAsync<DeliveryTypeDatabase>(query, [`%${searchDType}%`])
            
            return response
        } catch (error) {
            throw error
        }
    }



    return { create, update, deleteDeliveryType, searchByDeliveryType }
}