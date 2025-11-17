import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("./src/biscoito.png"),
    };

    this.frases = [
      "A sorte favorece os persistentes.",
      "Grandes jornadas começam com um pequeno passo.",
      "Sua criatividade abrirá novas portas hoje.",
      "Confie no processo e siga em frente.",
      "Coisas boas estão a caminho.",
      "Você é mais capaz do que imagina.",
      "Um sorriso muda tudo.",
      "Aprender algo novo trará alegria hoje.",
    ];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.reiniciarBiscoito = this.reiniciarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    const idx = Math.floor(Math.random() * this.frases.length);
    this.setState({
      img: require("./src/biscoitoAberto.png"),
      textoFrase: `"${this.frases[idx]}"`,
    });
  }

  reiniciarBiscoito() {
    this.setState({
      img: require("./src/biscoito.png"),
      textoFrase: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cookie App</Text>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, styles.botaoSec]}
          onPress={this.reiniciarBiscoito}
        >
          <View style={[styles.btnArea, styles.btnAreaSec]}>
            <Text style={styles.textoBotao}>Reiniciar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  img: {
    width: 250,
    height: 250,
  },
  botao: {
    marginTop: 20,
  },
  botaoSec: {
    marginTop: 10,
  },
  btnArea: {
    backgroundColor: "#538530",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  btnAreaSec: {
    backgroundColor: "#7A7A7A",
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoFrase: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    color: "#6A6A6A",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default App;
