import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <View style={styles.iconView}>
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ListItem;
