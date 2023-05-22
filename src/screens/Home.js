import {
    View,  
    StyleSheet,
    TextInput,
    Button
  } from 'react-native'
  import React, { useContext } from 'react'
  import { Table, Row, Rows } from 'react-native-table-component';
  import Icon from 'react-native-vector-icons/dist/Feather';
  import Context from '../store/Context';

  
  const Home = () => {

    // const { value, setUserName } = useContext(Context);
  
    const tableHead = ['Title1', 'Title2', 'Title3']
    const tableData = [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '456\n789'],
      ['a', 'b', 'd']
    ]
  
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput style={{ borderWidth: 1, width: '60%' }} />
          <Button
            title="Search"
            onPress={() => console.log ("kkkk11")}
          />
          <Icon name="search" size={30} color="black" />
        </View>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
  
  export default Home