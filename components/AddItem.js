import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textVal) => {
    setText(textVal);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Add Item...."
        onChangeText={onChange} value={text}></TextInput>
      <TouchableOpacity style={styles.btnView} onPress={() => addItem(text)}>
        <View style={styles.iconView}>
          <Icon name="plus" size={20} />
        </View>
        <Text style={styles.addBtn}> Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 3,
  },
  addBtn: {
    fontSize: 20,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnView: {
    padding: 7,
    //borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#c2bad8',
  },
});

export default AddItem;
