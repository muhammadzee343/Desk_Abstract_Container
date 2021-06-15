import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const CustomHeader = props => {
  return (
    <View style={styles.container}>
      <View
        style={
          props.leftIcon
            ? styles.leftWithPropsIconConainer
            : styles.leftWithoutPropsIconConainer
        }>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View
        style={
          props.leftIcon
            ? styles.headerWithPropsTitleContainer
            : styles.headerWithoutPropsTitleContainer
        }>
        {props.dynamicTitle ? (
          <Text style={styles.headerTextStyle}>{props.dynamicTitle}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#E7ECEC',
    flexDirection: 'row',
  },
  leftWithPropsIconConainer: {
    width: '13%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  leftWithoutPropsIconConainer: {
    width: '2%',
    // backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerWithPropsTitleContainer: {
    width: '65%',
    // backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWithoutPropsTitleContainer: {
    width: '75%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    // color: '#fff',
    fontWeight: 'bold',
  },
  rightIconContainer: {
    width: '20%',
    // backgroundColor: 'green',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default CustomHeader;
