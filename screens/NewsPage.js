import "react-native-gesture-handler";
import * as React from "react";
import {
	Text,
	StyleSheet,
	SafeAreaView,
} from "react-native";


const NewsPage = ({header, date, text}) => {
	return (
		<SafeAreaView>
			<Text style={styles.header}>{header}</Text>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.text}>{text}</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		color: 'black',
	},
	date: {
		color: 'black',
	},
	text: {
		color: 'black',
	},
});

export default NewsPage;