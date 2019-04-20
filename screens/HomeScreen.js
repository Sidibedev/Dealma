import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {Icon} from 'native-base'
import { MonoText } from '../components/StyledText';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderCategorie = ({item}) => {
    return (
      <TouchableOpacity onPress={() =>this.props.navigation.navigate("AnnonceByCategorie")} style={{width : 160 , height : 100 , borderRadius : 5 , alignItems:'center' , justifyContent:'center' , backgroundColor:'white' ,  ...Platform.select({
        ios: {
          shadowColor: 'gray',
          shadowOffset: { height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }) }}>

      <Image source={item.photo} style={{width:50 , height:50}}/>
      <Text style={{fontSize : 11 , marginTop:4, fontFamily:'montserrat-bold'}}> {item.nom} </Text>



      </TouchableOpacity>
    )
  }

  renderAnnonce =() => {
    return (
      
      <ImageBackground  resizeMethod="resize" source={require('../assets/images/voiture.jpg')} imageStyle={{borderRadius:10}} style={{ height : 150,marginLeft: 10 , marginBottom : 5 , width : Dimensions.get('window').width - 60 , marginTop : 10}}>



      

      <View style={{width : '80%' , backgroundColor : 'white' , height : 70 , position:'absolute' , bottom : -50 , alignSelf:'center' , borderRadius : 10 ,     ...Platform.select({
        ios: {
          shadowColor: 'gray',
          shadowOffset: { height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
  
    }), padding:12 , flexDirection:'row' , justifyContent:'space-between'}}>

    <View>
    <Text style={{fontSize : 12 , fontFamily:'montserrat-bold'}}> Voiture Nissan Neuve </Text>
    <Text style={{fontSize : 12 , marginTop : 6, fontFamily:'montserrat'}}> 600 000 fcfa </Text>
    </View>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate("DetailAnnonce")}>
    <Icon name="arrow-dropright-circle" style={{color:"#e51413" , marginTop:3}}/>
    </TouchableOpacity>
      
      </View>




      </ImageBackground>
    )
  }

  render() {
    return (
      <View style={styles.container}>


      <View style={{ height:'50%'}}>
      <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , color : "black" , marginTop:30 , marginLeft:15}}>Top annonces</Text>
      <Text style={{fontFamily:'montserrat-thin' , fontSize : 13, color:'gray' , marginTop : 6 , marginLeft:15 }}>Les annonces les plus en vogues</Text>

      <FlatList 
     renderItem={this.renderAnnonce}
     data={[{"id" : 1} , {"id" : 2}, {"id" : 3}]}
     horizontal={true}
     keyExtractor={item => item.id.toString()}
     showsHorizontalScrollIndicator={false}
     />
      </View>
    
     

     <ScrollView style={{margin:15}}>
     <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , color : "black"}}>Categories</Text>
     <Text style={{fontFamily:'montserrat-thin' , fontSize : 13, color:'gray' , marginTop : 6 }}>Explorez toutes les categories d'annonces</Text>

     <FlatGrid
      itemDimension={130}
      items={[{photo:require('../assets/images/laundry.png') , nom:"Mode"} , {photo:require('../assets/images/phone.png') , nom:"Electronic"} , {photo:require('../assets/images/car.png') , nom:"Vehicule"} , {photo:require('../assets/images/house.png') , nom:"Immobilier"} ]}
      renderItem={this.renderCategorie}
    />

     </ScrollView>
      </View>
    );
  }



  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
    
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
