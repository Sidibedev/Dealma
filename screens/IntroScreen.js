import React, { Component } from 'react';
import { View, Text , Image , StyleSheet , TouchableOpacity , Platform , TouchableHighlight} from 'react-native';

export default class IntroScren extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {

    header:null
  }

  render() {
    return (
      <View style={{flexDirection:'column' , flex: 1, justifyContent: 'space-between',alignItems: 'center', paddingTop: 40,  width:'90%' , alignSelf:'center'}}>
       <View>
       <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , textAlign:'center'}}>Bienvenue dans Dealma</Text>

       <Text style={{fontFamily:'montserrat' , fontSize : 15, color:'gray' , marginTop : 10 , textAlign : 'center'}}>Commencez maintenant pour avoir accés aux meilleurs produits senegalais.</Text>
       </View>

       <View>

       <Image source={require('../assets/images/undraw_online_shopping_ga73.png')} />
       
       </View>

       <View style={{marginBottom : 60 , width:'90%'}}>
       <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Login")}>

       <Text style={{color : 'white' , fontFamily:'montserrat-bold',fontSize : 16}}>Connexion</Text>

       </TouchableOpacity>
       <TouchableOpacity style={{marginTop : 25 , alignItems:'center'}} onPress={()=>this.props.navigation.navigate("Signup")}>
        <Text style={{color : 'black' , fontFamily:'montserrat-bold',fontSize : 16}}>Inscription</Text>
       </TouchableOpacity>
       </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
   button : {
  
    width:'100%' ,
       borderRadius:5,
       alignSelf:'center' ,
       backgroundColor:"#e51413" ,
  
       height :40 ,
       alignItems:'center' ,
        justifyContent:'center' ,
       
  
   },
  
    card : {
      padding : 20,
      width:'90%' ,  ...Platform.select({
        ios: {
          shadowColor: '#e51413',
          shadowOffset: { height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }) , backgroundColor:"white" , height:'50%' , alignSelf:'center' , marginTop : -100 , borderRadius:10
    }
  });
