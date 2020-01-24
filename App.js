import React, {useState} from 'react';
import {AppRegistry, Text, TouchableOpacity, View} from 'react-native';

const example = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [greeting, setGreeting] = useState();

  const renderAfterButton = () => (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25}}>{greeting}!!!</Text>
    </View>
  );

  const onButtonPress = greeting => setGreeting(greeting);

  if (greeting) {
    return renderAfterButton();
  }

  return (
    <View
      testID="welcome"
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, marginBottom: 30}}>Welcome</Text>
      <TouchableOpacity
        testID="hello_button"
        onPress={onButtonPress.bind(this, 'Hello')}>
        <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="world_button"
        onPress={onButtonPress.bind(this, 'World')}>
        <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="goodbye_button"
        onPress={onButtonPress.bind(this, 'Goodbye, World')}>
        <Text style={{color: 'blue', marginTop: 50, marginBottom: 20}}>
          Say Goodbye
        </Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('example', () => example);
