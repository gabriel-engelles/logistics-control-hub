import { useSQLiteContext } from "expo-sqlite"

export type PaymentOptionsDatabase = {
    id: number,
    method_name: string,
    method_type: string
}

export function usePaymentOptionsDatabase() {
    const database = useSQLiteContext()

    // CREATE payment_options, method_type = 'paid' or 'received'
    async function create(data: Omit<PaymentOptionsDatabase, "id">) {
        const statment = await database.prepareAsync(`
            INSERT INTO payment_options (
            method_name,
            method_type
            )

            VALUES (
            $method_name,
            $method_type    
            )
        `)
        
        try {
            await statment.executeAsync({
                $method_name: data.method_name,
                $method_type: data.method_type
            })

        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    // UPDATE payment_options
    async function update(data: PaymentOptionsDatabase) {
        const statment = await database.prepareAsync(`
            UPDATE payment_options SET
            method_name = $method_name,
            method_type = $method_type
            
            WHERE id = $id
        `)
        
        try {
            await statment.executeAsync({
                $method_name: data.method_name,
                $method_type: data.method_type
            })

        } catch (error) {
            throw error
        } finally {
            await statment.finalizeAsync()
        }
    }

    return { create, update }
}