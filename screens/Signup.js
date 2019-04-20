import React, { Component } from 'react';
import { View, Text  , StyleSheet , Platform , TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'
export default class Signup extends Component {
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
      <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , textAlign:'center' , color : "white"}}>Inscrivez vous</Text>

      <Text style={{fontFamily:'montserrat' , fontSize : 15, color:'white' , marginTop : 10 , textAlign : 'center'}}>Inscrivez vous pour avoir accés aux meilleurs produits senegalais.</Text>
      </View>


      <View style={{backgroundColor:'white' , borderRadius: 10 , height : 450 , width : '85%' , marginTop : 30 , padding : 20}}>



      <Item floatingLabel>
      <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'gray'}}>Nom complet</Label>
      <Input />
    </Item>
    <Item floatingLabel>
    <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'gray'}}>Email</Label>
    <Input />
  </Item>
  <Item floatingLabel style={{marginTop : 15}}>
      <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'gray'}}>Telephone</Label>
      <Input />
    </Item>
    <Item floatingLabel style={{marginTop : 15}}>
      <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'gray'}}>Password</Label>
      <Input />
    </Item>

    <Item floatingLabel style={{marginTop : 15}}>
      <Label style={{fontFamily:'montserrat-bold' , fontSize : 15, color:'gray'}}>Confirm password</Label>
      <Input />
    </Item>

   

      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Login")}>

       <Text style={{color : 'white' , fontFamily:'montserrat-bold',fontSize : 16}}>Inscription</Text>

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
  
    width:'90%' ,
       borderRadius:5,
       alignSelf:'center' ,
       backgroundColor:"#e51413" ,
  
       height :40 ,
       alignItems:'center' ,
        justifyContent:'center' ,
        position:'absolute',
        bottom:30
  
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
