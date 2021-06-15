import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const RoundButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={[
        props.inverseStyle
          ? [
              styles.squareButtonInverse_WithPropsStyle,
              {borderRadius: props.borderRadius ? props.borderRadius : 13},
            ]
          : [
              styles.squareButtonDefaultStyle,
              {borderRadius: props.borderRadius ? props.borderRadius : 13},
            ],
      ]}
      onPress={props.onPress}>
      {props.leftButtonIcon ? (
        <View
          style={{
            height: 50,
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'gray'
          }}>
          {props.leftButtonIcon}
        </View>
      ) : null}
      <Text
        style={[
          props.inverseStyle
            ? [styles.buttonStyle, {color: '#000'}]
            : [styles.buttonStyle, {color: '#fff'}],
        ]}>
        {props.title}
      </Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 17,
  },
  squareButtonDefaultStyle: {
    height: 50,
    width: '40%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffba01',
    borderRadius: 13,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
  squareButtonInverse_WithPropsStyle: {
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7ECEC',
    borderRadius: 13,
    borderColor: '#ffba01',
    borderWidth: 1,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
});

export default RoundButton;
