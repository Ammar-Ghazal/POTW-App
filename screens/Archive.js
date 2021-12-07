import "react-native-gesture-handler";
// import * as React from "react";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	// Button,
	StyleSheet,
	Text,
	View,
	SectionList,
	SafeAreaView,
	// Image,
	TouchableHighlight,
	// ScrollView,
	Image,
	Linking,
} from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import MyDrawer from "../components/MyDrawer";
import { StatusBar } from "expo-status-bar";
// import Header from "../components/Header";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator, createAppContainer } from "react-navigation";

// // Web Stuff:
// const PolicyHTML = require('./Policy.html');

// <WebView
//   source={PolicyHTML}
//   style={{flex: 1}}
//  />


const ListItem = ({ item }) => {
	// Original:
	// return (
	// 	<View style={styles.item}>
	// 		<Text style={styles.itemSubheader}>{item.subheader}</Text>
	// 		<Text style={styles.itemText}>{item.level}</Text>
	// 		<Text style={styles.itemText}>{item.theme}</Text>
	// 		<Text style={styles.itemText}>{item.date}</Text>
	// 	</View>
	// );
	// console.log(item);
	// // console.log(item.state);
	// // console.log(item.state.showTheThing);
	// item.state.showTheThing = false;
	// // function OpenPage(page){
	// //   navigation.navigate(<NewsPage header={page.header} text={page.text} date={page.date}></NewsPage>)
	// // }
	// function ToggleView(page){
	//   if (page.state.showTheThing){
	//     page.setState({showTheThing: false}) // to hide ii
	//   }else{
	//     page.setState({showTheThing: true})  // to show it
	//   }
	// };
	const [visibilityOuter, setVisibilityOuter] = useState(false);
	const [visibilityInner, setVisibilityInner] = useState(false);
	return (
		<TouchableHighlight
			onPress={() => {
				if (visibilityOuter) {
					setVisibilityOuter(false);
				} else {
					setVisibilityOuter(true);
				}
			}}
			underlayColor="#e5e5e5"
			activeOpacity="1">
			<View
				style={[
					styles.item,
					{ borderWidth: 2, borderColor: "#e5e5e5", padding: 15 },
				]}>
				<View style={{ flexDirection: "row" }}>
					{/* For Images: */}
					{/* <Image
            style={{
              width: 50,
              height: 50,
              margin: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}
            source={{
              uri: item.image,
            }}
          /> */}
					<View style={{ flexDirection: "column", flex: 1 }}>
						<Text style={[styles.header]}>{item.header}</Text>
						<Text style={[styles.text]}>{item.text}</Text>
						<Text style={[styles.date]}>{item.date}</Text>
					</View>
					<View style={styles.chevron}>
						{!visibilityOuter && (
							<MaterialCommunityIcons
								name="chevron-right"
								size={25}></MaterialCommunityIcons>
						)}
						{visibilityOuter && (
							<MaterialCommunityIcons
								name="chevron-down"
								size={25}></MaterialCommunityIcons>
						)}
					</View>
				</View>
				{visibilityOuter && (
					<View
						style={{
							flexDirection: "column",
							paddingTop: 10,
						}}>
						<Text style={styles.fullText}>{item.fullText}</Text>
						<TouchableHighlight
							onPress={() => {
								if (visibilityInner) {
									setVisibilityInner(false);
								} else {
									setVisibilityInner(true);
								}
							}}
							underlayColor="#e5e5e5"
							activeOpacity="1">
							<View
								style={[
									styles.item,
									{ borderWidth: 2, borderColor: "#e5e5e5", padding: 15 },
								]}>
								<View style={{ flexDirection: "row" }}>
									{/* For Images: */}
									{/* <Image
										style={{
											width: 50,
											height: 50,
											margin: 10,
											borderRadius: 20,
											flexDirection: 'row',
										}}
										source={{
											uri: item.image,
										}}
									/> */}
									<View style={{ flexDirection: "column", flex: 1 }}>
										<Text style={[styles.header]}>{item.header}</Text>
										<Text style={[styles.text]}>{item.text}</Text>
										<Text style={[styles.date]}>{item.date}</Text>
									</View>
									<View style={styles.chevron}>
										{!visibilityInner && (
											<MaterialCommunityIcons
												name="chevron-right"
												size={25}></MaterialCommunityIcons>
										)}
										{visibilityInner && (
											<MaterialCommunityIcons
												name="chevron-down"
												size={25}></MaterialCommunityIcons>
										)}
									</View>
								</View>
								{visibilityInner && (
									<View
										style={{
											flexDirection: "column",
											paddingTop: 10,
										}}>
										<Text style={styles.fullText}>{item.fullText}</Text>
									</View>
								)}
							</View>
						</TouchableHighlight>
					</View>
				)}
			</View>
		</TouchableHighlight>
	);
};

class Archive extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<SectionList
					ListHeaderComponent={
						<View style={styles.container}>
							<StatusBar style="dark" />
							<View
								style={{
									// height: 100,
									justifyContent: "center",
									alignItems: "center",
									margin: 25,
									flex: 1,
									overflow: "scroll",
									// top: -20,
								}}>
								<Text
									style={{
										color: "black",
										fontSize: 30,
										fontWeight: "900",
									}}>
									Problem Archive
								</Text>
							</View>
							<TouchableHighlight
								underlayColor="#0c8091"
								style={styles.button}
								onPress={() =>
									this.props.navigation.navigate("SearchandFilter")
								}>
								<Text style={styles.buttonText}>Search and Filter</Text>
							</TouchableHighlight>
						</View>
					}
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					sections={data}
					renderItem={({ item, section }) => {
						return <ListItem item={item} />;
					}}
				/>
				{/* </SafeAreaView> */}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 2,
		backgroundColor: "#00bdda",
		borderRadius: 30,
		margin: 15,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "700",
	},
	container: {
		flex: 1,
	},
	sectionHeader: {
		fontWeight: "800",
		fontSize: 18,
		color: "black",
		marginTop: 20,
		marginBottom: 5,
	},
	// item: {
	// 	margin: 10,
	// },
	itemText: {
		marginTop: 5,
		color: "black",
	},
	itemSubheader: {
		marginTop: 5,
		fontWeight: "800",
		color: "black",
	},
	//For the clickable list items:
	chevron: {
		justifyContent: "center",
		padding: 20,
		flexDirection: "row",
	},
	date: {
		color: "#4a4d52",
	},
	header: {
		color: "black",
		marginTop: 5,
		fontWeight: "800",
	},
	item: {
		margin: -1,
	},
	text: {
		marginTop: 5,
		color: "black",
	},
});

const data = [
	{
		data: [
			{
				key: "1",
				header: "Problem Title 1",
				text: "Problem text goes here ....",
				fullText: (
					<Text>
						The Canadian Intermediate Mathematics Contest for Grades 9 and 10 is
						being written on November 17 or 18. Our registration deadline is
						October 26. For more information, go to {" "}
						<Text
							style={{ color: "#00bdda" }}
							onPress={() =>
								Linking.openURL(
									"http://www.cemc.uwaterloo.ca/contests/csimc.html"
								)
							}>
							http://www.cemc.uwaterloo.ca/contests/csimc.html
						</Text>
						. We hope that you will be able to participate in some of our
						contests this year!
					</Text>
				),
				date: "October 7, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "2",
				header: "Problem Title 2",
				text: "Problem text goes here ....",
				fullText: (
					<Text>
						In addition to POTW, the CEMC also offers mathematics and computer
						science contests such as the Beaver Computing Challenge (BCC). The
						BCC will take place during the weeks of November 8 and 15, and there
						is a challenge offered at the Grade 5/6, 7/8, and 9/10 levels.
						Registration closes on October 27, 2021. To get more information
						please visit:{" "}
						<Text
							style={{ color: "#00bdda" }}
							onPress={() =>
								Linking.openURL(
									"http://www.cemc.uwaterloo.ca/contests/bcc.html"
								)
							}>
							http://www.cemc.uwaterloo.ca/contests/bcc.html
						</Text>
						.
					</Text>
				),
				date: "September 30, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "3",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "4",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "5",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "6",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "7",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "8",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "9",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "10",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "11",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "12",
				header: "The last one, I promise :)",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
		],
	},
];

// const SECTIONS = [
// 	{
// 		data: [
//       {
//         key: '1',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '2',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },

//       {
//         key: '3',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '4',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '5',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '6',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '7',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '8',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '9',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '10',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '11',
//         subheader: 'Colour By Number',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//       {
//         key: '12',
//         subheader: 'Last One, I promise :)',
//         level: 'Problem A (Grade 3/4)',
//         theme: 'Theme(s): Algebra',
//         date: 'May 24, 2021',
//       },
//     ],
// 	},
// ];

export default Archive;
