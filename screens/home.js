import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import {RFValue} from 'react-native-responsive-fontsize'
import axios from axios
export default class HomeScreen extends React.Component{constructor(){
    super()
    this.state = {
        Movies: {} 
    }
}
render(){
    const {Movies} = this.state
    if (Movies.poster_link){
        const{title,poster_link,release_date, duration, rating, overView} = Movies
        return(<View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header centerComponent = {{text: 'Movie Recommended', style:headerTitle}} rightComponent={{icon:"search",color: yellow}} backgroundColor={"black"} containerStyle={{flex:1}}/>
            </View>
            </View>)
    }
    return(null)
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    headerContainer: {
      flex: 0.1
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: RFValue(18)
    },
    subContainer: {
      flex: 0.9
    },
    subTopContainer: {
      flex: 0.4,
      justifyContent: "center",
      alignItems: "center"
    },
    posterImage: {
      width: "60%",
      height: "90%",
      resizeMode: "stretch",
      borderRadius: RFValue(30),
      marginHorizontal: RFValue(10)
    },
    subBottomContainer: {
      flex: 0.6
    },upperBottomContainer: {
    flex: 0.2,
    alignItems: "center"
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: RFValue(14),
    fontWeight: "300"
  },
  middleBottomContainer: {
    flex: 0.35
  },
  overview: {
    fontSize: RFValue(13),
    textAlign: "center",
    fontWeight: "300",
    color: "gray"
  },
  lowerBottomContainer: {
    flex: 0.45
  },
iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonCotainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: RFValue(160),
    height: RFValue(50),
    borderRadius: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: RFValue(15)
  },
  buttonText: {
    fontSize: RFValue(15),
    fontWeight: "bold"
  }
});
