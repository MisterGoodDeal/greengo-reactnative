import React from 'react'
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native'
import Constants from "expo-constants";
import NavBar from './NavBar'


class Accueil extends React.Component {
	render() {
		return (
			<View style={styles.conteneur}>
				<StatusBar backgroundColor="#0E44FC" barStyle="default" />
				<View style={styles.conteneurHaut}>
					<Image
						source={require('../assets/jumelles.jpg')}
						style={styles.imageRang}
						resizeMode="contain"
					/>
					<Text style={styles.texteRang}>Le curieux</Text>
					<Text style={styles.texteUtilisateur}>John DOE</Text>
				</View>
				<View style={styles.conteneurBas}>
					<View style={styles.informations}>
						<View style={styles.conteneurInformation}>
							<Text style={styles.chiffre}>12</Text>
							<Text style={styles.information}>Emballages</Text>
						</View>

						<View style={styles.conteneurInformation}>
							<Text style={styles.chiffre}>18</Text>
							<Text style={styles.information}>points</Text>
						</View>
					</View>
					<View style={styles.spacer}></View>

					<View style={styles.cercle}>
						<View style={styles.conteneurCagnotte}>
							<View style={styles.conteneurPrix}>
								<Text style={styles.prix}>18</Text>
								<Text style={styles.symbole}>€</Text>
							</View>
							<Text style={styles.texteCagnotte}>Cagnotte</Text>
						</View>
					</View>

				</View>

				{/* Affichage de la NavBar */}
				<NavBar/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	conteneur: {
		flex: 1,
		backgroundColor: '#D4FFEB',
		paddingTop: Constants.statusBarHeigh
	},
	conteneurHaut: {
		paddingTop: 75,
		flex: 3,
		alignItems: 'center',
	},
	imageRang: {
		width: 255,
		height: 125
	},
	texteRang: {
		marginTop: 30,
		color: "rgba(14,68,252,1)",
	    fontSize: 36,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	texteUtilisateur: {
		color: "rgba(14,68,252,1)",
	    fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'capitalize'
	},
	conteneurBas: {
		flex: 2,
		backgroundColor: "rgba(14,68,252,1)",
		justifyContent: 'center',
		alignItems: 'center'
	},
	informations: {
		flexDirection: 'row'
	},
	conteneurInformation: {
		flex: 1,
		alignItems: 'center'
	},
	chiffre: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	},
	information: {
		textTransform: 'uppercase',
		color: 'white',
		fontSize: 12,
		fontWeight: 'bold'
	},
	spacer: {
		position: 'absolute',
		backgroundColor: '#FB73FF',
		width: 4,
		height: 50,
	},
	cercle: {
		position: 'absolute',
		top: -87.5,
	    width: 175,
	    height: 175,
	    borderRadius: 999,
	    backgroundColor: 'white',
		borderColor: '#FB73FF',
		borderStyle: 'solid',
		borderWidth: 7
	},
	conteneurCagnotte: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	conteneurPrix: {
		flexDirection: 'row',
	},
	prix: {
		fontSize: 42,
		fontWeight: 'bold',
		color: '#0D46FC',
	},
	symbole: {
		fontSize: 24,
		fontWeight: 'bold',
		position: 'relative',
		top: 15,
		color: '#0D46FC',
	},
	texteCagnotte: {
		color: '#0D46FC',
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
})

export default Accueil
