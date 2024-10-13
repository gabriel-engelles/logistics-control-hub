import { View, StyleSheet } from 'react-native'

import { useRouter } from 'expo-router';

import Header from '@/components/Header';
import DeliveryTypeForm from '@/components/DeliveryType/FormDeliveryType'


export default function AddDeliveryType() {
  const router = useRouter()

  return (
    <View style={styles.view}>
      <Header 
      title="Adicionar tipo de entrega" 
      onBackPress={() => router.replace('/(tabs)/profile')}
      />
      <DeliveryTypeForm />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});
