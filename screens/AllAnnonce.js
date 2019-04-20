import React, { Component } from 'react';
import { View, Text  , FlatList , ImageBackground , TouchableOpacity , StyleSheet , Platform} from 'react-native';

import {StyleProvider , Container , Content , Header , Left , Body , Title , Right , Spinner , getTheme , platform, Icon, Item , Input , Button} from 'native-base'

export default class AllAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };

  }

  static navigationOptions = {
      header: null
  }
 
  renderEvent = ({item}) => {

    return (

      <View   style={{ width:'90%' , height:300  , borderRadius : 10, marginTop : 20 , alignSelf:'center' }}>

      <ImageBackground  resizeMethod="resize" source={require('../assets/images/voiture.jpg')} imageStyle={{borderRadius : 10}} style={{ height : '100%'  , width : '100%' }}>



      <View style={{ flexDirection:'row' , justifyContent:'space-between', height : 90 , backgroundColor:"white" , width : '100%' , alignSelf : 'center' ,bottom : 0  , position : "absolute" , borderBottomRightRadius : 10 ,  borderBottomLeftRadius : 10  , padding:10 , ...Platform.select({
        ios: {
          shadowColor: '#e51413',
          shadowOffset: { height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      })}} onPress={()=>this.props.navigation.navigate("DetailsEvent" , {id : item.id})}>

      <View style={{margin : 5}}>
      <Text style = {{  fontSize:18 , color :"black" , marginTop : 7 ,fontFamily:'montserrat-bold'}}>Nissan</Text>

      <View style={{flexDirection: 'row', justifyContent:'space-between',}}>

      <View>

      <Text style = {{  fontSize:13 , fontFamily:'montserrat', color :"gray" , marginTop : 7}}> 600 000 fcfa </Text>




      </View>


      </View>

      </View>

      <TouchableOpacity style={{marginTop:10}} onPress={()=>this.props.navigation.navigate("DetailsEvent" , {id : item.id})}>
      <Icon name="arrow-dropright-circle" style={{color:"#e51413" , marginTop:3}}/>
      </TouchableOpacity>


      </View>
      </ImageBackground>




      </View>
    )
}

  render() {
   
    return (

        <StyleProvider style={getTheme(platform)}>
        <Container>

         {this.state.loading ?
          <View style={{flex:1 , alignItem:'center' , justifyContent:'center' , backgroundColor:'#190934'}}>
          <Spinner color="#fd2a4a"/>
          <Text style = {{fontSize:12 , color :"#605375" , marginTop : 7 , fontFamily:'comfortaBold' , textAlign:'center'}}>Un petit moment...</Text>
          </View>


             :
       <Content>
        


       <Text style={{fontFamily:'montserrat-bold' , fontSize : 18 , textAlign:'center' , color : "black" , marginTop: 30}}>Toutes les annonces </Text>






             <FlatList
            data={[{"id" : 1} , {"id" : 2}, {"id" : 3}]}
           renderItem={this.renderEvent}
           keyExtractor={item => item.id.toString()}


            />


 
        


           </Content>

         }

      </Container>
      </StyleProvider>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flexWrap: 'wrap',

    alignItems:'center',

  },
  carre : {
    width:10 ,
    height:10 , 
    backgroundColor:'red',
  },
  containerTest : {
    width : 100,
    height : 100
  },
  DisponibiltyContainer : {
    borderRadius: 10,
    height : 25 ,
    marginTop : 10 ,
    alignItems : 'center',


  },
  itemName: {
    fontSize: 12,
     marginTop: 7,
     marginBottom: 0,
     textAlign : 'center',
    color: 'black',
  },
  voirplus : {
    borderRadius: 5,
    marginTop: 20,
    width: '90%',
    backgroundColor: "white",
    height: 16,
    alignItems: 'center',
    shadowColor: '#999999',
     shadowOffset: {
       width: 0,
      height: 1
     },
     shadowRadius: 2,
    shadowOpacity: 1.0,
  },
  itemContainer: {
    marginLeft: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding : 10,
    height: 120,

    backgroundColor: "white",
    shadowColor: '#999999',
    shadowOffset: {
       width: 0,
      height: 2
     },
    shadowRadius: 2,
    shadowOpacity: 1.0,
    ...Platform.select({
      android: {

        elevation: 3,

      },
    }),

  },
  itemContainerHopital : {
    marginLeft: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#c1ebdd",
    width: 170,
    height : 170,
    backgroundColor: "#c1ebdd",


  },
  textButton: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',


    },
    button: {
      marginTop:15,
      marginBottom : 10,
      borderRadius: 10,         // Rounded border
      borderWidth: 2,           // 2 point border widht
      borderColor: '#fd2a4a',   // White colored border
      paddingHorizontal: 110,    // Horizontal padding
      paddingVertical: 10,      // Vertical padding
      backgroundColor:"#fd2a4a",
      alignSelf:'center',



    },
})