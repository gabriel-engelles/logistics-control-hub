import { useState, useEffect } from "react"
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'

import { Input } from '@/components/DeliveryType/InputDeliveryType';
import { DeliveryType } from "@/components/DeliveryType/DeliveryType"
import { CustomButton } from '@/components/CustomButton'

import { DeliveryTypeDatabase, useDeliveryTypeDatabase } from "@/database/useDeliveryTypeDatabase"


export function ListDeliveryType() {
  const router = useRouter()

  const deliveryTypeDatabase = useDeliveryTypeDatabase()

  const [searchDType, setSearchDType] = useState("")
  const [deliveryTypes, setDeliveryTypes] = useState<DeliveryTypeDatabase[]>([])

  async function listDeliveryType() {
    try {
      const response = await deliveryTypeDatabase.searchByDeliveryType(searchDType)
      setDeliveryTypes(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listDeliveryType()
  }, [searchDType])

    return (
        <View style={styles.view}>
          <View style={styles.container}>
          <View style={styles.filter}>
          <Text> Buscar tipo de entrega</Text>
          <Input placeholder="Pesquisar" onChangeText={setSearchDType} />
          </View>
            <FlatList
                data={deliveryTypes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <DeliveryType data={item} />}
                contentContainerStyle={{ gap: 5 }}
            />
            <View style={styles.button}>
              <CustomButton 
                title="Adicionar Tipo de Entrega"
                onPress={() => router.push('/addDeliveryType')}
              />
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },

  filter: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },

  container: {
    flex: 1,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    //Efeito Shadow no container
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
  },

  button: {
    alignItems: 'center'
  }
});