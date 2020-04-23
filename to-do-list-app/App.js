import React, { useState } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Button, 
	FlatList,
	TouchableNativeFeedback
 } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ addMode, setAddMode ] = useState(false);
	console.log(courseGoals);

	const addGoalHandler = goalTitle => {
		setCourseGoals(currentGoals => [
			...currentGoals, 
			{id: (Math.random() * 1000).toString(), value: goalTitle}
		]);
		setAddMode(false);
	}
	
	const removeGoalHandler = goalId => {
		console.log('To be removed: ' + goalId)
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== goalId)});
	}

	const closeModalHandler = () => {
		setAddMode(false);
	}

  	return (
		<View style={styles.screen} >
			<View style={styles.titlePage}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>TO DO LIST</Text>	
				</View>
				<View style={styles.openModalButton}>
					<TouchableNativeFeedback
						onPress={() => setAddMode(true)}>
						<Text style={styles.openModalButtonText}>Add New Task</Text>
					</TouchableNativeFeedback>	
				</View>
			</View>
			<GoalInput 
				visible={addMode} 
				onAddGoal={addGoalHandler}
				onClose={closeModalHandler} />
			<View style={styles.listWrapper}>
				<FlatList 
					keyExtractor={(item, index) => item.id}
					data={courseGoals}
					renderItem={itemData => 
						<GoalItem 
							title={itemData.item.value} 
							id={itemData.item.id}
							onDelete={removeGoalHandler} />}
				/>
			</View>
    	</View>
  );
}

const styles = StyleSheet.create({
  	screen: {
		flex: 1,
		backgroundColor: '#EDFDFE',
	},
	titlePage: {
		marginTop: 50,
		flex: 1,
		alignItems: 'center'
	},
	titleWrapper: {
		width: '100%',
		marginBottom: 50,
		backgroundColor: '#c7eef0',
		shadowColor: "#000",
        shadowOffset: {
	        width: 6,
	        height: 6,
        },
        shadowOpacity: 0.2,
        elevation: 7,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 15,
		fontFamily: 'monospace'
	},
	openModalButton: {
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
	openModalButtonText: {
		fontSize: 16,
		color: '#07b076',
		fontFamily: 'monospace',
		fontWeight: 'bold',
	},
	listWrapper: {
		height: '65%'
	}
});