import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MessageContainer = props => {
  return (
    <View style={styles.container}>
      <View
        style={
          props.role === 'sender'
            ? styles.senderContainer
            : styles.receiverContainer
        }>
        {props.contant}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  senderContainer: {
    backgroundColor: 'pink',
    maxWidth: '70%',
    minHeight: 40,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  receiverContainer: {
    backgroundColor: 'pink',
    maxWidth: '70%',
    minHeight: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  msgTextContainer: {
    width: '100%',
    // padding: 5,
  },
});

export default MessageContainer;
