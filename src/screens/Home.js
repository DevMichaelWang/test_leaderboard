import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import Input from '../components/Input';
import React, { useContext } from 'react'
import { Table, Row, Rows } from 'react-native-table-component';
import Context from '../store/Context';


const Home = () => {

    // const { value, setUserName } = useContext(Context);

    const tableHead = ['Title1', 'Title2', 'Title3']
    const tableData = [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '456\n789'],

    ]

    return (
        <View style={styles.container}>
            <View style={styles.toolContainer}>
                <Input />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={tableData} textStyle={styles.text} />
                </Table>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    toolContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20 
    },
    button: { 
        height: 40, 
        backgroundColor: '#007fff', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 6, 
        paddingHorizontal: 10, 
        marginLeft: 10 
    },
    buttonText: { 
        color: 'white', 
        fontSize: 16 
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { margin: 6 }
});

export default Home