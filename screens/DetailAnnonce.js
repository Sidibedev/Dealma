import React, { Component } from 'react';
import { View, Text , Platform , ScrollView , StyleSheet , TouchableOpacity} from 'react-native';
import Slideshow from 'react-native-slideshow';
import { Button , Icon} from 'native-base';
export default class DetailAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
      header: null
  }

  render() {
    return (
      <ScrollView>
     <Slideshow 
     height={400}
      dataSource={[
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' }
    ]}/>

    <View style={{marginTop : -50 , height:230 , width : '90%' , backgroundColor:'white' , alignSelf:'center' , borderRadius:15,...Platform.select({
        ios: {
          shadowColor: '#e51413',
          shadowOffset: { height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }) , padding:20}}>


      <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , color : "black"}}>Nissan</Text>

      <Text style={{fontFamily:'montserrat' , fontSize : 13 , color : "gray" , marginTop:10}}>Some description about the product.Some description about the product</Text>

      <View style={{flexDirection : 'row' , justifyContent:'space-between' , marginTop : 30}}>

      <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , color : "black" , marginTop : 5}}>600 000 Fcfa</Text>

      <Button iconLeft light style={{paddingRight : 5 , backgroundColor : "#e51413"}}>
            <Icon name='call' style={{color:"white"}}/>
            <Text  style={{color:"white" , fontFamily : 'montserrat' , marginLeft : 3}}>contacter</Text>
      </Button>

      </View>

    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
   button : {
  

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