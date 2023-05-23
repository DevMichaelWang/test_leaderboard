import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {UserContext} from '../store/Context';


const Input = () => {
  const { username, setUserName } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Icon name="ios-search-outline" size={25} color="gray" />
      <TextInput
        value={username}
        onChangeText={(text) => setUserName(text)}
        placeholder="User name..."
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 43,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 4,
  },
});
