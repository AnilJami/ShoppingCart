import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'ShoppingCart',
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingBottom: 5,
    height: 75,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
    paddingTop: 21,
  },
});

export default Header;
