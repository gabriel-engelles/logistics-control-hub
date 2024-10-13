import { Pressable, PressableProps, Text, StyleSheet } from 'react-native'


type Props = PressableProps & {
    data: {
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
}

export function DeliveryType( { data, ...rest }: Props) {
    return(
        <Pressable style={styles.list}{...rest}>
            <Text>
                { data.type }
            </Text>
            <Text>
                { data.delivery_commission }
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 6,
        gap: 12,
        flexDirection: "row",
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.85,
        shadowRadius: 4,
        elevation: 2,
    },
})