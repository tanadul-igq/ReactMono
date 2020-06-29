import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, TextInput, Image} from 'react-native';
import Color from '../constants/color'
import {firedb} from '../components/firebase'
import {auth} from '../components/firebase'

var highscore =89
function storeHR(userId,Type,BP_value){
    firedb.ref('uid/'+userId).set(Type+{ BP_value});
    firedb.ref('uid/'+userId).update({Sys: BP_value});
  }

function setupHighscoreListener(userId) {
  firedb.ref('users/'+userId).on('value',(snapshot) =>{
    highscore = snapshot.val().highscore;
    
  });
}
const signout = e => {
  auth.signOut().then(()=>{
    Alert.alert('logout succussful','Please check spelling or register new account' , [{text:'Okay',style: 'destructive'}])
}).catch(()=>{
    Alert.alert('logout unsuccussful','Please check spelling or register new account' , [{text:'Okay',style: 'destructive'}])
})
}

const Fillin = props => {
    const [Highscore,setHighscore] = useState();
    return (
        <View style={styles.screen}>
            <Text>{props.uid_ID}</Text>
          <Button title = 'plus1' onPress = {()=>storeHR(props.uid_ID,'Hello',highscore)} /> 
          <Button title = 'test' onPress = {()=>{setupHighscoreListener(20)}} />
          <Button title = 'update' onPress ={()=>{setHighscore(highscore)}} />
          <Button title = 'signout' onPress = {signout} />
          <Button title = 'Back' onPress = {()=>{}} />
          <Text>{Highscore}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
  });
export default Fillin;