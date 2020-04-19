import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {

	const [ enteredGoal, setEnteredGoal ] = useState('');
	const [ courseGoals, setCourseGoals ] = useState([]);

	const inputHandler = (enteredGoal) => {
		setEnteredGoal(enteredGoal);
	};

	const addGoalHandler = () => {
		setCourseGoals(currentGoals => [...currentGoals + enteredGoal])
	}

  	return (
    	<View style={styles.screen}>
			<View>
				<Text style={styles.title}>Course Goals</Text>
			</View>
      		<View style={styles.input}>
				<TextInput 
					style={styles.inputField}
					placeholder="Enter new course goal"
					onChangeText={inputHandler}
					value={enteredGoal} />
				<Button 
					title="+"
					onPress={addGoalHandler} />
      		</View>
      		<View style={styles.goals}>
				<Text>{courseGoals}</Text>
      		</View>  
    	</View>
  );
}

const styles = StyleSheet.create({
  	screen: {
	  	marginTop: 75,
		marginHorizontal: 30,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 25,
	},
  	input: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
  	},
  	inputField: {
	  	borderBottomColor: 'black',
	  	borderBottomWidth: 1,
		padding: 5,
		flex: 4,
		marginRight: 20,
		fontSize: 17.5
	},

	goals: {
		margin: 15
	}
});

export default App;
