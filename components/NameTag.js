import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const NameTag = ({name, imgSrc}) => {
  return (
    <View style={styles.nameTag}>
      <Image source={imgSrc} style={styles.imgStyle} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

NameTag.defaultProps = {
  name: 'Hello Anil',
  imgSrc: {
    uri: 'https://randomuser.me/api/portraits/men/1.jpg',
    height: 100,
    width: 100,
  },
};

const styles = StyleSheet.create({
  imgStyle: {
    borderRadius: 100 / 2,
  },
  nameTag: {
    alignItems: 'center',
    padding: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'darkslateblue',
    padding: 5,
  },
});
export default NameTag;
