import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import Input from '../components/Input';
import React, { useContext } from 'react'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {UserContext, SearchContext} from '../store/Context';

const Home = () => {

    const { username } = useContext(UserContext);
    const { data, searchUser } = useContext(SearchContext);

    const search = () => {
        searchUser(username);
    }

    const tableHead = ['Name', 'Rank', 'Number of bananas', 'isSearchedUser?'];

    return (
        <View style={styles.container}>
            <View style={styles.toolContainer}>
                <Input />
                <TouchableOpacity
                    style={styles.button}
                    onPress={search}
                >
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
            {
                data ? (
                    <ScrollView>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                            {
                                data.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell key={cellIndex} data={cellData} textStyle={{ margin: 6, color: cellData === username ? 'red' : 'gray' }} />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </ScrollView>
                ) : <></>
            }

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
    row: { flexDirection: 'row' },
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
        height: 60,
        backgroundColor: '#f1f8ff'
    },
    text: { margin: 6 }
});

export default Home