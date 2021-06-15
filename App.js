import React, {PureComponent} from 'react';
import {View, Text, Image} from 'react-native';
import CustomHeader from './src/Components/CustomHeader';
import BackArrowIcon from './src/Assets/icons/BackArrow';
import RoundButton from './src/Components/RoundButton';
import CustomTextInput from './src/Components/CustomTextinput';
import HeaderContainer from './src/Components/HeadingContianer';
import MessageContainer from './src/Components/MessageContainer';

const MessageFuncation = () => {
  return (
    <View style={{padding: 5}}>
      <Text style={{color: 'black'}}>Hey! i am testing message conatiner.</Text>
      {/* <Image
        style={{height: 50, width: 100}}
        source={require('./src/Assets/images/thumbnail.jpg')}
      /> */}
    </View>
  );
};
class App extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <StatusBar backgroundColor="#E7ECEC" /> */}
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor="#000" />}
          dynamicTitle="Title Text"
        />

        <View style={{flex: 0.2}}>
          <HeaderContainer
            title="Let's Get Started"
            subtitle="Create New Account"
            fontSize={25}
            fontFamily="sans-serif-light"
          />
        </View>

        <View style={{flex: 0.15}}>
          <CustomTextInput
            placeHolder="Email"
            // value="abc"
            // keyboardType="numeric"
            isEditable={true}
            // autoCapitalize="characters"
            autoCorrect={false}
            autoFocus={false}
            // clearTextOnFocus={true}
            // keyboardAppearance="light"
            // secureTextEntry={false}
            // textAlign="center"
          />
        </View>

        <View style={{margin: 20, width: '100%'}}>
          <MessageContainer contant={<MessageFuncation />} role="receiver" />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 30,
          }}>
          <RoundButton
            title="Next"
            onPress={this.SquareButtOnClickAction}
            // borderRadius={30}
            inverseStyle
            // leftButtonIcon={<BellIcon iconColor="white" />}
          />
        </View>
      </View>
    );
  }
}

export default App;
