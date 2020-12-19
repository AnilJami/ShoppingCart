import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
});

export default ListItem;
