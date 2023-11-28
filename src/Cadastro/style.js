import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#6B6869",
    alignItems: "center",
    borderRadius: 20,
    padding: 30,
    width: "94%",
    marginLeft: "3.5%",
  },
  buttonClose: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: '10%',
    width: "30%",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
    color: 'white'
  },
  modalTextTitle: {
    marginBottom: 15,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
  },
  fotoFilme: {
    // flex: 1,
    width: 300,
    height: 170,
    alignSelf: "center",
    borderRadius: 20,
  },
});

export default styles;