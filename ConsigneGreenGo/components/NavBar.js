import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

class NavBar extends React.Component {
	render() {
		return (
			<View style={styles.navBar}>
				<View style={styles.items} onStartShouldSetResponder={() => depot()}>
					<Image
						source={require('../assets/depot.png')}
						style={styles.imageNavBar}
						resizeMode="contain"
					/>
					<Text style={styles.texteNavBar}>Dépot</Text>
				</View>

				<View style={styles.items} onStartShouldSetResponder={() => cagnotte()}>
					<Image
						source={require('../assets/cagnotte.png')}
						style={styles.imageNavBar}
						resizeMode="contain"
					/>
					<Text style={styles.texteNavBar}>Cagnotte</Text>
				</View>

				<View style={styles.items} onStartShouldSetResponder={() => accueil()}>
					<Image
						source={require('../assets/accueil.png')}
						style={styles.imageNavBar}
						resizeMode="contain"
					/>
					<Text style={styles.texteNavBar}>Accueil</Text>
				</View>

				<View style={styles.items} onStartShouldSetResponder={() => carte()}>
					<Image
						source={require('../assets/position.png')}
						style={styles.imageNavBar}
						resizeMode="contain"
					/>
					<Text style={styles.texteNavBar}>Carte</Text>
				</View>

				<View style={styles.items} onStartShouldSetResponder={() => menu()}>
					<Image
						source={require('../assets/menu.png')}
						style={styles.imageNavBar}
						resizeMode="contain"
					/>
					<Text style={styles.texteNavBar}>Menu</Text>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	navBar: {
		height: 60,
		backgroundColor: "#D4FFEB",
		flexDirection: 'row',
	},
	items: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageNavBar: {
		width: 30,
		height: 30
	},
	texteNavBar: {
		marginTop: 5,
		fontSize: 10,
		textTransform: 'uppercase',
		color: "#FB73FF"
	}
})

{/* Fonction relative au clic sur le bouton de la NavBar "Dépôt" */}
function depot() {
	alert('Cliqué sur le bouton "Dépôt"');
}

{/* Fonction relative au clic sur le bouton de la NavBar "Cagnotte" */}
function cagnotte() {
	alert('Cliqué sur le bouton "Cagnotte"');
}

{/* Fonction relative au clic sur le bouton de la NavBar "Accueil" */}
function accueil() {
	alert('Cliqué sur le bouton "Accueil"');
}

{/* Fonction relative au clic sur le bouton de la NavBar "Carte" */}
function carte() {
	alert('Cliqué sur le bouton "Carte"');
}

{/* Fonction relative au clic sur le bouton de la NavBar "Menu" */}
function menu() {
	alert('Cliqué sur le bouton "Menu"');
}

export default NavBar
