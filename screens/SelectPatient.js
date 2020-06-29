import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import icon_new from '../image/icon_newPatient.png'
import icon_existed from '../image/icon_oldPatient.png'
import icon_logout from '../image/btn_logout.png'
import Color from '../constants/color'

const SelectPatient = props => {
    const [Highscore,setHighscore] = useState();
    return (
        <View style={styles.screen}>
                <TouchableOpacity style={{alignItems: 'center', flex :1}}>
                    <Image style ={styles.mediumlogo} source = {icon_new} />
                    <Text style={{fontSize:24, color:Color.blue_button}}>New Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', flex :1}}>
                    <Image style ={styles.mediumlogo} source = {icon_existed} />
                    <Text style={{fontSize:24, color:Color.blue_button}}>Established Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Image style ={styles.smalllogo} source = {icon_logout} />
                </TouchableOpacity>
        </View>
      );
};



const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 30,
      alignContent: 'space-around',
    },
    mediumlogo: {
        width: 100,
        height: 100,
    },
    smalllogo: {
        width: 60,
        height: 60,
    },
  });

export default SelectPatient;