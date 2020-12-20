import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import NameTag from './components/NameTag';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), title: 'First Item'},
    {id: uuidv4(), title: 'Second Item'},
    {id: uuidv4(), title: 'Third Item'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (title) => {
    setItems((prevItems) => {
      return [{id: uuidv4(), title}, ...prevItems];
    });
  };

  const renderItem = ({item}) => (
    <ListItem item={item} deleteItem={deleteItem} />
  );

  return (
    <View style={styles.container}>
      <Header title="ShoppingCart App" />
      <NameTag />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
