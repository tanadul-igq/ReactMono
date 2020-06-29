import Aomsin2;

import React, {useState} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import Header from './components/Header';
import Login from './screens/Login';
import Fillin from './screens/Fillin';
import SelectPatient from './screens/SelectPatient';
import Footer from './components/footer';

var highscore = 0;


export default function App() {
  const [uid_login, setUid] = useState();
  const startfillinHandler = (uidNumber) => {
    setUid(uidNumber);
  }
  let content = <Login onStartApp={startfillinHandler}/>
  if(uid_login) {
    content = <Fillin uid_ID = {uid_login} />
  }
  return (
    <View style={styles.screen}>
      <Header title = "ADAPS" />
      {content}
      <View style = {{alignSelf: 'flex-end'}}>
          <Footer title = "V 0.26 Copyright by BARTLAB" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
