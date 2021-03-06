import React from './node_modules/react'
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
import IonIcon from './node_modules/react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            selected_movie: this.props.route.params.item
        };
    };

    selected_movie_banner() {
        console.log(this.state.selected_movie)
        return (
            <View style={{flex: 12 }}>
                <ImageBackground style={{ flex:4 }} source={{uri: this.state.selected_movie.movieUri}} blurRadius={20}>
                    <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{height: 150, width: 100}} source={{uri: this.state.selected_movie.movieUri}}/>
                    </View>  
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Text style={[styles.ntext, {color: 'green'}]}>98% match</Text>
                        <Text style={styles.ntext}>{this.state.selected_movie.movieReleaseYear}</Text>
                        <Text style={styles.ntext}>1h 50m</Text>
                        <Text style={styles.ntext}>HD</Text>
                    </View>  
                </ImageBackground> 
                <View style={{flex: 9, padding: 10}}>
                    <TouchableOpacity style={{backgroundColor: 'red', alignItems: 'center', padding: 5}}>
                            <IonIcon name="md-play" color='white' size={15}> Play</IonIcon>
                    </TouchableOpacity>
                    <View style={{paddingTop: 10}}>
                        <Text style={styles.dtext}>{this.state.selected_movie.movieDescription}</Text>
                    </View>
                </View>                   
            </View>
        )
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: 'black'}}>
                {this.selected_movie_banner()}
            </View>           
        )
    }
}

const styles = StyleSheet.create({
    ntext: {
        fontWeight: 'bold', 
        fontSize: 15, 
        color: '#ffffff',
        fontFamily: 'Avenir'        
    },
    dtext: {
        fontSize: 15, 
        color: '#ffffff',
        fontFamily: 'Avenir'        
    },    
})