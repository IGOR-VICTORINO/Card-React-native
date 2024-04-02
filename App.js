import { Text, StyleSheet, View, Image } from "react-native";
import Header from "./src/componentes/header";
import CardCont from "./src/componentes/card";
import estilo from "./src/componentes/style";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header 
      titulo = "Minha Rotina Infernal"
      subtitulo = "Total de Horas = 168 - 100%"
      
      />
      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/89/89977.png"
          tarefa="Dormir"
          desc = "Todos os dias eu durmo no minímo 8h"
          porc = "33,3%"
        />
      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/5956/5956881.png"
          tarefa="Estudar"
          desc = "De segunda a sexta estudo na Etec, e em reforço em casa."
          porc = "16.7%"
        />
      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/7500/7500336.png"
          tarefa="Trabalhar"
          desc = "Todos os dias, Afinal tenho contas a pagar"
          porc = "20.8%"
        />
      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/2843/2843156.png"
          tarefa="Lazer"
          desc = "Todos os dias tenho um momento de descanso, onde leio um livro ou fico com minha família."
          porc = "12.5%"
        />

      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/2424/2424859.png"
          tarefa="Comer"
          desc = "  Todos os dias tomo café da manhã, almoço e janto."
          porc = "16,7%"
        />
      <CardCont
          imagem="https://cdn-icons-png.flaticon.com/512/814/814097.png"
          tarefa="Jogar"
          desc = "Sempre que tiver tempo"
          porc = "0%"
        />
    </View>
  );
}
