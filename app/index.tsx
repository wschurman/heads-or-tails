import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CoinFlip from '../modules/coin-flip';

export default function Index() {
  const [currentHeadsOrTails, setCurrentHeadsOrTails] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heads or Tails?</Text>
      <Button
        title="Flip Coin"
        onPress={() => {
          const result = CoinFlip.flipCoin();
          setCurrentHeadsOrTails(result);
        }}
      />
      <Text style={styles.text}>
        {currentHeadsOrTails ? `Last result: ${currentHeadsOrTails}` : 'No flip yet'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});