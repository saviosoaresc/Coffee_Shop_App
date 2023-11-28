import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase/firebaseConfig";
import { BlurView } from "expo-blur";

import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Vibration,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import styles from "./style";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [hidePass, setHidepass] = useState(true);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  // REGISTRO
  const [name, setName] = useState();
  const [emailCad, setEmailCad] = useState();
  const [passwordCad, setPasswordCad] = useState();
  const [passwordCad2, setPasswordCad2] = useState();
  const [errorMessageCad, setErrorMessageCad] = useState();

  function validationField() {
    if (email != null && password != null) {
      // setErrorMessage("LOGIN SUCCESS")
      setErrorMessage(null);
      setEmail(null);
      setPassword(null);
    } else {
      Vibration.vibrate();
      setErrorMessage("Insira sua senha e email");
      setPassword(null);
      setEmail(null);
    }
  }

  function Sucessfull() {
    Vibration.vibrate();
    setErrorMessage("Login com sucesso");
    setPassword(null);
    setEmail(null);
  }

  function validationFieldParaForgotPassword() {
    if (email != null) {
      setErrorMessage(null);
      setEmail(null);
      setPassword(null);
    } else {
      Vibration.vibrate();
      setErrorMessage("Insira seu EMAIL");
      setPassword(null);
      setEmail(null);
    }
  }

  function nullFielsCad() {
    setEmailCad(null);
    setPasswordCad(null);
    setPasswordCad2(null);
    setName(null);
  }

  //REGISTRAR-SE
  function handleRegistrar() {
    createUserWithEmailAndPassword(auth, emailCad, passwordCad)
      .then((userCredential) => {
        // const user = userCredential.user;
        setErrorMessageCad("Usuário registrado com sucesso");
        setModalVisible(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao registrar usuário:", errorCode, errorMessage);
        setModalVisible(false);
        setErrorMessageCad("Usuario ja cadastrado");
      });
  }

  //LOGIN
  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado com sucesso:", user);
        Sucessfull();
        // setUser(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.error('Erro ao logar usuário:', errorCode, errorMessage);
        setErrorMessage("Usuario ou senha invalido");
      });
  }

  //FORGOT PASSWORD
  function handleForgotPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() =>
        Alert.alert(
          "Redefinir Senha",
          "Enviamos um e-mail para voce trocar sua senha!"
        )
      )
      .catch((error) => console.log(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Coffee Shop</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.imputForm}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <View style={styles.inputArea}>
            <TextInput
              style={styles.imputForm}
              placeholder="Senha"
              value={password}
              onChangeText={(texto) => setPassword(texto)}
              secureTextEntry={hidePass}
            />

            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#000" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => {
              if (email == null && password == null) {
                validationField();
              } else {
                handleLogin();
              }
            }}
          >
            <Text style={styles.textButtonForm}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.passwordRemember}>
          <TouchableOpacity
            onPress={() => {
              if (email == null) {
                validationFieldParaForgotPassword();
              } else {
                handleForgotPassword();
              }
            }}
          >
            <Text style={{ color: "red" }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <View style={styles.containerRegister}>
          <Text style={styles.textRegister}>Você ainda não possui conta?</Text>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textButtonRegister}>REGISTRA-SE</Text>
          </TouchableOpacity>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BlurView style={StyleSheet.absoluteFill} intensity={36} tint="dark" />

        <View style={[styles.title, { marginTop: "10%" }]}>
          <Text style={styles.textTitle}>Registro</Text>
        </View>
        <View style={styles.centeredView}>
          <TextInput
            style={styles.imputForm}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.imputForm}
            value={emailCad}
            onChangeText={setEmailCad}
            placeholder="Email"
          />
          <View
            style={[styles.inputArea, { marginLeft: "1.6%", marginTop: "1%" }]}
          >
            <TextInput
              style={styles.imputForm}
              placeholder="Senha"
              value={passwordCad}
              onChangeText={(texto) => setPasswordCad(texto)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              style={[styles.icon, { paddingRight: "6%" }]}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#000" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[styles.inputArea, { marginLeft: "1.6%", marginTop: "3%" }]}
          >
            <TextInput
              style={styles.imputForm}
              placeholder="Confirmar Senha"
              value={passwordCad2}
              onChangeText={(texto) => setPasswordCad2(texto)}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity
              style={[styles.icon, { paddingRight: "6%" }]}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#000" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonFormCad}
            onPress={() => {
              if (passwordCad == passwordCad2 && passwordCad != null) {
                handleRegistrar();
                nullFielsCad();
              } else {
                setErrorMessageCad("Insira todos os seus dados");
                nullFielsCad()
              }
            }}
          >
            <Text style={styles.textButtonForm}>REGISTRAR</Text>
          </TouchableOpacity>
          <Text style={styles.errorMessageCad}>{errorMessageCad}</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <AntDesign name="closecircle" size={70} />
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
