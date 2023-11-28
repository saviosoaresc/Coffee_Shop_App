import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const Cadastro = ({ setModalVisible }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  function validationField() {
    if (email != null && password != null) {
      // setErrorMessage("LOGIN SUCCESS")
      // setErrorMessage(null);
      setEmail(null);
      setPassword(null);
    } else {
      Vibration.vibrate();
      // setErrorMessage("Insira sua senha e email");
      setPassword(null);
      setEmail(null);
    }
  }

  return (
    <View style={styles.centeredView}>
      <Text>Ola</Text>
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({});
