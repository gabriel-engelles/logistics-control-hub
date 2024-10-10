import { useSQLiteContext } from "expo-sqlite"

export type DeliveryTypeDatabase = {
    id: number,
    type: string,
    requires_paid: boolean,
    requires_paid_method: boolean,
    requires_received: boolean,
    requires_received_method: boolean,
    requires_pickup_location: boolean,
    requires_delivery_location: boolean
}

export function useDeliveryTypeDatabase() {
    const database = useSQLiteContext()

    return {  }
}