import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Thumbnail , Input , Item  , Icon  , Spinner  , List , ListItem , Body , Left , Right , Button } from 'native-base';
import { ScrollView , Text , KeyboardAvoidingView , Alert , AsyncStorage , TouchableOpacity , StyleSheet } from 'react-native';
import {LinearGradient} from 'expo'

export default class SettingsSreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      id : 0,
      token:'',
      loading:true,
      infoclient:null,
      photo:'something',
      url :"https://diwaanfinance.com",
      newpassword:'',
      confirmpassword:'',
      loadingPassword:false,



  }
}

 
static navigationOptions = {
  header :null
}


renderSpinnerOrNot() {
  
return(

  <View
    style={{width:'100%' , height:300 , backgroundColor:"#e51413" , alignItems : 'center' , padding: 30,}}>



        <Thumbnail large source={{uri :this.state.photo}} style={{margin: 10}} />

        <Text style={{fontSize : 16 , fontFamily : 'montserrat-bold'  , color:"white"}}>Moussa Ndiaye </Text>


        <Text style={{fontSize : 15 , fontFamily : 'montserrat'  , color:"white" , marginTop:5}}>   Keur Massar </Text>

        <Button iconLeft style={{backgroundColor:"white" , marginTop:20 , alignSelf:'center'}} onPress={this.logout}>
        <Icon name='log-out' style={{color:"#CE2527"}}/>
        <Text style={{color:"#CE2527" , fontFamily:"montserrat"}}> Déconnexion </Text>

       </Button>

        </View>

)



  
}

  render() {

    return (
      <KeyboardAvoidingView   behavior="padding">
      <ScrollView>




       <View
      style={{width:'100%' , height:200 , backgroundColor:"#e51413" , alignItems : 'center' , padding: 30,}}>

     

          <View style={{alignItems:'center' , marginTop:20}}>
        
          <Text style={{fontSize : 16 , fontFamily : 'montserrat-bold'  , color:"white" , textAlign:'center'}}>  Moussa Ndiaye </Text>


          <Text style={{fontSize : 15 , fontFamily : 'montserrat'  , color:"white" , marginTop:5 , textAlign :'center'}}>   Keur massar </Text>

          <Button iconLeft style={{backgroundColor:"white" , marginTop:20 , alignSelf:'center'}} onPress={this.logout}>
          <Icon name='log-out' style={{color:"#e51413"}}/>
          <Text style={{color:"#e51413" , fontFamily:"montserrat"}}> Déconnexion </Text>

         </Button>

         </View>

      

          </View>




      <View style={{margin : 20}}>

            <ListItem>

              <Body>
                <Text style={{fontFamily:'montserrat-bold'}}>Mes annonces</Text>
                <Text style={{fontFamily:'montserrat' , color:'gray'}} note numberOfLines={1}>Publiez et vendez vos annonces</Text>
              </Body>
              <Right/>
               
            </ListItem>

            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("NewAnnonce")}>

            <Text style={{color : 'white' , fontFamily:'montserrat-bold',fontSize : 16}}>Nouvelle annonce</Text>
     
            </TouchableOpacity>


            <List style={{marginTop:20}}>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/images/voiture.jpg')} />
              </Left>
              <Body>
                <Text style={{fontFamily:'montserrat-bold' , fontSize : 15}}>Nissan</Text>
                <Text style={{fontFamily:'montserrat' , fontSize : 12}}>600 000 Fcfa</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate('UpdateAnnonce')}>
                  <Text style={{fontSize:10 , color:"#e51413"}}>voir</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
            <Left>
              <Thumbnail square source={require('../assets/images/back.jpg')} />
            </Left>
            <Body>
              <Text style={{fontFamily:'montserrat-bold' , fontSize : 15}}>Broderie super cent</Text>
              <Text style={{fontFamily:'montserrat' , fontSize : 12}}>50 000 Fcfa</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text style={{fontSize:10 , color:"#e51413"}}>voir</Text>
              </Button>
            </Right>
          </ListItem>
         
        <ListItem thumbnail>
        <Left>
          <Thumbnail square source={require('../assets/images/boutique2.jpeg')} />
        </Left>
        <Body>
          <Text style={{fontFamily:'montserrat-bold' , fontSize : 15}}>Anita la belle</Text>
          <Text style={{fontFamily:'montserrat' , fontSize : 12}}>100 000 Fcfa</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text style={{fontSize:10 , color:"#e51413"}}>voir</Text>
          </Button>
        </Right>
      </ListItem>
          </List>





      </View>


      </ScrollView>
      </KeyboardAvoidingView>
    )

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
    

 },

  
});
