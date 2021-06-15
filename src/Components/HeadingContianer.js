import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadingContianer = props => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.headingStyle,
          {fontSize: props.fontSize ? props.fontSize : 20},
        ]}>
        {props.title}
      </Text>
      <Text
        style={[
          styles.subHeadingStyle,
          {fontFamily: props.fontFamily ? props.fontFamily : 'normal'},
        ]}>
        {props.subtitle ? props.subtitle : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    color: '#000',
    fontWeight: 'bold',
  },
  subHeadingStyle: {
    color: '#2e2c2c',
    fontSize: 15,
  },
});

export default HeadingContianer;
