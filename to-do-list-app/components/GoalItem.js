import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
		padding: 10,
		borderColor: 'grey',
		borderWidth: 1,
        marginVertical: 7.5,
        marginHorizontal: 20,
        borderRadius: 5,
        shadowColor: "lightgrey",
        shadowOffset: {
	        width: 2,
	        height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        backgroundColor: '#EDFDFE'
    },
    listItemText: {
        fontFamily: 'monospace',
        fontWeight: 'bold'
    }
})

export default GoalItem;