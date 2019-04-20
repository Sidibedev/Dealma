import React, { Component } from 'react';
import { View, Text  , StyleSheet , Platform , TouchableOpacity , Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'
export default class forgotpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions ={
      header:null
  }

  render() {
    return (
      <View style={{flex : 1 , backgroundColor : "#e51413" , alignItems : 'center' , paddingTop : 40}}>

      <View style={{width : '80%'}}>
      <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , textAlign:'center' , color : "white"}}>Mot de passe oublié</Text>

     
      </View>

      <Image source={require('../assets/images/key.png')}  style={{marginTop : 20 }}/>

      <View style={{width:'80%'}}>
      <Text style={{fontFamily:'montserrat' , fontSize : 15, color:'white' , marginTop : 20 , textAlign : 'center'}}>Entrez votre email associé à votre compte</Text>

      <Text style={{fontFamily:'montserrat-italic' , fontSize : 12, color:'white' , marginTop : 20 , textAlign : 'center'}}> Nous vous enverrons un mail pour changer votre mot de passe</Text>
     

      <Item floatingLabel style={{marginTop : 10}}>
      <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'white'}}>Email</Label>
      <Input style={{color:"white"}}/>
      </Item>


 

      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Login")}>

      <Text style={{color : '#e51413' , fontFamily:'montserrat-bold',fontSize : 16}}>Envoyer</Text>

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
       backgroundColor:"white" ,
  
       height :40 ,
       alignItems:'center' ,
        justifyContent:'center' ,
        marginTop : 30
       
  
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
