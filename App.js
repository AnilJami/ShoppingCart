import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import NameTag from './components/NameTag';
import ListItem from './components/ListItem';

const App = () => {
  const listData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => <ListItem item={item} />;

  return (
    <View style={styles.container}>
      <Header title="ShoppingCart App" />
      <NameTag />
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
