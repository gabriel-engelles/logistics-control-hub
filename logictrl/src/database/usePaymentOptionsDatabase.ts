import { useSQLiteContext } from "expo-sqlite"

export type PaymentOptionsDatabase = {
    id: number,
    method_name: string,
    method_type: string
}

export function usePaymentOptionsDatabase() {
    const database = useSQLiteContext()


    return {  }
}