import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Input } from '@/components/DeliveryType/InputDeliveryType';
import { useDeliveryTypeDatabase } from '@/database/useDeliveryTypeDatabase';

export default function ProfileForm() {
  const [type, setType] = useState<string>("")
  const [delivery_commission, setDelivery_comission] = useState<string>("")
  const [requires_paid, setRequires_paid] = useState(false)
  const [requires_paid_method, setRequires_paid_method] = useState(false)
  const [requires_received, setRequires_received] = useState(false)
  const [requires_received_method, setRequires_received_method] = useState(false)
  const [requires_pickup_location, setRequires_pickup_location] = useState(false)
  const [requires_delivery_location, setRequires_delivery_location] = useState(false)

  const deliveryTypeDatabase = useDeliveryTypeDatabase();

  async function create() {
    try {
      await deliveryTypeDatabase.create({
        type, 
        delivery_commission: Number(delivery_commission),
        requires_paid,
        requires_paid_method,
        requires_received,
        requires_received_method,
        requires_pickup_location,
        requires_delivery_location
      });

      Alert.alert("Tipo de entrega foi Cadastrado!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.view}>

        <View style={styles.inputContainer}>
            <Text>Nome do tipo de entrega</Text>
            <Input placeholder="Digitar" onChangeText={setType} />
        </View>

        <View style={styles.inputContainer}>
            <Text>Valor comissão</Text>
            <Input placeholder="Digitar" onChangeText={setDelivery_comission} />
        </View>

        <View style={styles.checkContainer}>
            <Text>Requer pagamento</Text>
            <Checkbox 
            style={styles.checkbox}
            value={requires_paid}
            onValueChange={setRequires_paid}
            color={requires_paid ? '#1E3A5F' : undefined}
            /> 
        </View>

        <View style={styles.checkContainer}>
            <Text>Requer método de pagamento</Text>
            <Checkbox  
            style={styles.checkbox}
            value={requires_paid_method}
            onValueChange={setRequires_paid_method}
            color={requires_paid_method ? '#1E3A5F' : undefined}
            /> 
        </View>

        <View style={styles.checkContainer}>
            <Text>Requer recebimento</Text>
            <Checkbox  
            style={styles.checkbox}
            value={requires_received}
            onValueChange={setRequires_received}
            color={requires_received ? '#1E3A5F' : undefined}
            /> 
        </View>  

        <View style={styles.checkContainer}>
            <Text>Requer meétodo de recebimento</Text>
            <Checkbox 
            style={styles.checkbox}
            value={requires_received_method}
            onValueChange={setRequires_received_method}
            color={requires_received_method ? '#1E3A5F' : undefined}
            />
        </View>

        <View style={styles.checkContainer}>
            <Text>Requer ponto de coleta</Text>
            <Checkbox  
            style={styles.checkbox}
            value={requires_pickup_location}
            onValueChange={setRequires_pickup_location}
            color={requires_pickup_location ? '#1E3A5F' : undefined}
            />
        </View>

        <View style={styles.checkContainer}>
            <Text>Requer ponto de entrega</Text>
            <Checkbox 
            style={styles.checkbox}
            value={requires_delivery_location}
            onValueChange={setRequires_delivery_location}
            color={requires_delivery_location ? '#1E3A5F' : undefined}
            />
        </View>

      <Button title="Salvar" onPress={create} />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        padding: 32,
        gap: 15,
    },

    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    checkContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    
    checkbox: {
        width: 30,
        height: 30, 
    },
    
});
