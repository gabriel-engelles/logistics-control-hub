import { View, StyleSheet, Text } from 'react-native'

import { ListDeliveryType } from '@/components/DeliveryType/DeliveryTypeList'

export default function Profile() {


  return (
    <View style={styles.container}>
      <Text>
        Comissão
      </Text>
      <ListDeliveryType/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 300,
    paddingBottom: 80,
    gap: 10
  },


});
