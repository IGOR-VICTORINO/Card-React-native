import { Text, StyleSheet, View, Image } from "react-native";

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderColor: 'pink',
      paddingHorizontal: 20,
    },
    titulo: {
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 20,
    },
    subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15,

    },
    cardTarefa: {
      marginTop: 20,
      backgroundColor: '#565656',
      width: '35%',
      height: 150,
      alignItems:'center',
      justifyContent:'space-between',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2,
      flexDirection: 'row',
      padding: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
    },
    tituloCard: {
      fontSize: 27,
      fontWeight: 'bold',
      color: '#FFF',
    },
    textoCard: {
      fontSize: 17  ,
      marginTop: 5,
      color:"white",
    },
    imagemCard: {
      borderRadius:10,
      backgroundColor:"white",
      width: 80,
      padding:10,
      height: 80,
      marginRight: 15,
    },
  })
;

export default estilo;
