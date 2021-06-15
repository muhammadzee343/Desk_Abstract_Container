import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomTextInput = props => {
  const [value, onChangeText] = React.useState(props.value);
  const [isShowPassword, setShowPassword] = React.useState(false);

  return (
    <View style={{margin: 15}}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeText(text);
          }}
          placeholder={props.placeHolder}
          placeholderTextColor="#000"
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          value={value}
          editable={props.isEditable ? props.isEditable : true}
          autoCapitalize={
            props.autoCapitalize ? props.autoCapitalize : 'sentences'
          }
          autoCorrect={props.autoCorrect ? props.autoCorrect : true}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          clearTextOnFocus={
            props.clearTextOnFocus ? props.clearTextOnFocus : false
          }
          keyboardAppearance={
            props.keyboardAppearance ? props.keyboardAppearance : 'default'
          }
          secureTextEntry={
            props.secureTextEntry ? props.secureTextEntry : false
          }
          textAlign={props.textAlign ? props.textAlign : 'left'}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    // margin: 12,
    // borderBottomWidth: 1,
    width: '90%',
    backgroundColor: '#E7ECEC',
    padding: 5
  },
});

export default CustomTextInput;
