import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    marginTop: '12%',
    position:"relative",
    paddingLeft: 14,
    justifyContent: "space-around",
  },
  title: {
    fontWeight: 100,
    display: "flex",
    alignItems: "center",
    width: "50%",
    left: "25%",
  },

  textTitle: {
    fontFamily: "sans-serif-medium",
    fontSize: 44,
    textAlign: "center",
    letterSpacing: -0.88,
  },

  form: {
    alignItems: "center",
    width: '100%',
    marginTop: '10%',
    // backgroundColor: 'red',
    paddingLeft: '6%',
    paddingRight: '6%',
    height: '38%'

  },
  imputForm: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#dcdcdc",
    height: 50,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 2,
  },

  buttonForm: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#000000",
    height: '22%',
    margin: '6%',
    borderWidth: 2,
    alignItems: "center",
    justifyContent: 'center'
  },
  textButtonForm: {
    color: "white",
    // paddingTop: 12,
    fontWeight: "bold",
  },

  inputArea: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    left: '0.8%',
  },
  input: {
    height: 50,
    fontSize: 18,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    right: 56,
  },
  passwordRemember: {
    alignItems: "flex-end",
    right: '12%',
    // backgroundColor: 'blue'
    // marginBottom: '20%'
  },

  containerRegister: {
    top: "8%",
    alignItems: "center",
  },
  textRegister: {
    fontSize: 20
  },
  buttonRegister: {
    width: "76%",
    borderRadius: 10,
    backgroundColor: "#000000",
    height: 50,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 2,
    alignItems: "center",
  },
  textButtonRegister: {
    color: "white",
    paddingTop: 12,
    fontWeight: "bold",
  },

  errorMessage:{
    color: 'red',
    marginLeft: '24%',
    fontSize: 20,
    marginTop: '14%'
  },
  buttonFormCad:{
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#000000",
    height: '10%',
    margin: '6%',
    borderWidth: 2,
    alignItems: "center",
    justifyContent: 'center',
    alignItems:'center'
  },
  centeredView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    // backgroundColor: 'red'
  },
  buttonClose:{
    marginTop: '30%'
  },
  errorMessageCad:{
    color: 'red',
    fontSize: 20
  }
});

export default styles;
