import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    StyleSheet, 
    Modal, 
    Text, 
    TouchableWithoutFeedback
} from 'react-native';

const GoalInput = props => {

    const [ enteredGoal, setEnteredGoal ] = useState('');
    
    const inputHandler = (enteredGoal) => {
		setEnteredGoal(enteredGoal);
    };
    
    return (
        <Modal 
            visible={props.visible} 
            animationType="slide"
            transparent={true} >
            <View style={styles.inputContainer}>
                <View style={styles.closeButton}>
                    <TouchableWithoutFeedback
                        onPress={props.onClose}>
                            <View>
                                <Text style={styles.closeButtonText}>X</Text>    
                            </View>
                        
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter new to do item"
                        onChangeText={inputHandler}
                        value={enteredGoal} />
                    <View style={styles.buttonView}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                if (enteredGoal.length !== 0) {
                                    props.onAddGoal(enteredGoal);
                                    setEnteredGoal('');    
                                }
                            }} >
                                <View>
                                    <Text style={styles.buttonText}>ADD</Text>    
                                </View>
                        </TouchableWithoutFeedback>
                    </View>    
                </View>
            </View>    
        </Modal>  
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#edfcfc',
        borderColor: '#ebfafa',
        height: '90%',
        marginTop: 90,
    },
    closeButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 10,
	        height: 10,
        },
		elevation: 10,
		backgroundColor: '#ebf5f2'
    },
    closeButtonText: {
        color: 'red',
        fontWeight: 'bold'
    },
    inputWrapper: {
        width: '80%',
        alignItems: 'center',
        position: 'absolute',
        top: 125
    },
    input: {
        width: '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontFamily: 'monospace',
    },
    buttonView: {
        borderColor: '#07b076',
		borderWidth: 2,
		borderRadius: 7.5,
		paddingVertical: 10,
		paddingHorizontal: 15,
		alignItems: 'center',
		shadowColor: "#000",
        shadowOffset: {
	        width: 10,
	        height: 10,
        },
		elevation: 10,
        backgroundColor: '#ebf5f2',
        width: 150
    },
    buttonText: {
        fontSize: 16,
		color: '#07b076',
		fontFamily: 'monospace',
		fontWeight: 'bold',
    }
});

export default GoalInput;