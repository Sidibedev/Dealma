import React, { Component } from 'react';
import { View, Text , TouchableOpacity , StyleSheet , Platform , KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Form, Icon , Item, Picker , Body , ListItem , Right, Input} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
export default class NewAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  static navigationOptions = {

    title:'Nouvelle annonce'
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        
        <ScrollView>
      
      <ListItem>

      <Body>
        <Text style={{fontFamily:'montserrat-bold'}}>Categorie</Text>
        <Text style={{fontFamily:'montserrat' , color:'gray' , fontSize : 10 , marginTop : 3}}>Quelle est la categorie de votre annonce</Text>
      </Body>
      <Right/>


       
    </ListItem>

    <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: '90%' }}
                placeholder="Selectionne une categorie"
                placeholderStyle={{ color: "#f4a1a0"  , fontFamily:"montserrat" }}
                placeholderIconColor="#007aff"
               
              >
                <Picker.Item label="Voiture" value="Voiture" />
                <Picker.Item label="Mode" value="mode" />
                <Picker.Item label="Immobilier" value="Immobilier" />
                <Picker.Item label="Electronic" value="Electronic" />
               
              </Picker>
       </Item>

       <ListItem style={{marginTop : 20}}>

       <Body>
         <Text style={{fontFamily:'montserrat-bold'}}>Photos</Text>
         <Text style={{fontFamily:'montserrat' , color:'gray' , fontSize : 10 , marginTop : 3}}>Les photos attirent les clients</Text>
       </Body>
       <Right/>
 
 
        
     </ListItem>

     <View style={{flexDirection : 'row' , marginRight:10 , marginTop : 20 , marginLeft: 10 ,justifyContent:'space-between'}}>

     <TouchableOpacity style={{height:100 , width : '30%' , backgroundColor:'#fce7e7' , alignItems:'center' , justifyContent: 'center',borderRadius: 10,}}>
     <Icon name="camera" style={{color:"#E51413"}} />
     </TouchableOpacity>

     <TouchableOpacity style={{height:100 , width : '30%' , backgroundColor:'#fce7e7' , alignItems:'center' , justifyContent: 'center',borderRadius: 10,}}>
     <Icon name="camera" style={{color:"#E51413"}} />
     </TouchableOpacity>

     <TouchableOpacity style={{height:100 , width : '30%' , backgroundColor:'#fce7e7' , alignItems:'center' , justifyContent: 'center',borderRadius: 10,}}>
     <Icon name="camera" style={{color:"#E51413"}} />
     </TouchableOpacity>
     </View>
 


     <ListItem style={{marginTop : 20}}>

     <Body>
       <Text style={{fontFamily:'montserrat-bold'}}>Informations sur l'annonce</Text>
       <Text style={{fontFamily:'montserrat' , color:'gray' , fontSize : 10 , marginTop : 3}}>Remplissez le nom , le prix etc..</Text>
     </Body>
     <Right/>


      
   </ListItem>

   <Item rounded style={{marginTop : 10  , marginLeft : 10 , width: '90%' , padding:2 , alignSelf:'center'}}>
   <Input placeholder='Titre'
  />
   </Item>

   <Item rounded style={{marginTop : 10 ,marginLeft : 10 , width: '90%' , padding:2 , alignSelf:'center'}}>
   <Input placeholder='Prix(fcfa)'
  />
   </Item>
  


   <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Main")}>

       <Text style={{color : 'white' , fontFamily:'montserrat-bold',fontSize : 16}}>Publier annonce</Text>

</TouchableOpacity>

</ScrollView>

</KeyboardAvoidingView>
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
    marginTop : 10,
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
