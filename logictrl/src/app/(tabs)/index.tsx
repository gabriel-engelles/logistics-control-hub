import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <Text>
        index
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: "auto"
  }
});
