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
    

    return {  }
}