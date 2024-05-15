import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';


const ProductCard = ({ product }) => {
  return (
    <TouchableOpacity>
      <View style={styles.productCard}>
      
        <Image
          source={{ uri: product.image }}
          style={{ width: 200, height: 200, borderRadius: 4, marginBottom: 8 }}
        />
        <View style={styles.destaqueContainer}>
          <Text style={styles.destaqueLabel}>Destaque</Text>
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.editionLabel}>Edição Limitada</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
        <Text style={styles.discount}>
          10% OFF extra no PIX ou 4x de Sem juros
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver produto</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};



const styles = {
  productCard: {
    backgroundColor: '#f2f2f2', 
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, 
    width: 200,
    margin: 120
  },
  destaqueContainer: {
    position: 'absolute',
    top: 200,
    width: 80,
    backgroundColor: '#ffb7b7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destaqueLabel: {
    fontSize: 12,
    color: '#000',
    textTransform: 'uppercase',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  editionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#ea4c89',
  },
  discount: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    textDecorationStyle: 'solid',
    textDecorationColor: '#666',
  },
  button: {
    backgroundColor: '#ea4c89',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
};

const products = [
  {
    name: 'Camisa Brasil Retrô 1994 Amarelo Masculina',
    price: 199.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_brasil_retro_1994_amarelo_masculina_2079_1_0bb10da965a4971334aa1b3f40bbfe1c.jpg',
  },
  {
    name: 'Camisa Alemanha Retrô 1990',
    price: 159.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_alemanha_retro_1990_525_3_20220408102817.jpg',
  },
  {
    name: 'Camisa França Retrô 1998 Masculina',
    price: 189.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_franca_retro_1998_masculina_1183_1_fd32d9238796dcf97a1b6f8b33581e52_20220408102743.jpg',
  },
  {
    name: 'Camisa Argentina Retrô Tricampeã Masculina',
    price: 199.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_argentina_retro_tricampea_masculina_2605_1_6f026c8ffc007e285f239d3ba72de2cc.jpg',
  },
  {
    name: 'Camisa Polo Barcelona Retrô 1899 Masculina',
    price: 159.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_barcelona_retro_1899_541_1_395209bb760b26cd8dacecc11f667904.jpg',
  },
  {
    name: 'Camisa Real Madrid Retrô nº 10 Masculina',
    price: 199.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_real_madrid_retro_no_10_masculina_911_1_20220408102742.jpg',
  },
  {
    name: 'Camisa Milan Retrô Anos 80',
    price: 109.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_milan_retro_anos_80_545_1_20220408102737.jpg',
  },
  {
    name: 'Camisa Bayern De Munique Manga Azul Masculina',
    price: 99.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_bayern_de_munique_manga_azul_masculina_2503_1_60c7d2313ddc9004f9198f6ca8d4ebcf.jpg',
  },
  {
    name: 'Camisa Retrô Corinthians Democracia 1982 Masculina',
    price: 109.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_retro_corinthians_democracia_1982_masculina_441_1_20220408102844.jpg',
  },
  {
    name: 'Camisa Palmeiras Vintage Eterna Academia Masculina',
    price: 99.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_palmeiras_vintage_eterna_academia_masculina_811_1_20220408102712.jpg',
  },
  {
    name: 'Camisa Vasco da Gama Reign Masculina',
    price: 129.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_vasco_da_gama_reign_masculina_1843_1_7b64fac39e24a7634dd3b806e099aace.jpg',
  },
  {
    name: 'Camisa Flamengo Zico Retrô Libertadores',
    price: 399.90,
    image: 'https://images.tcdn.com.br/img/img_prod/657285/camisa_flamengo_zico_retro_libertadores_225_1_20220408102807.jpg',
  },
  
];



export default function App() {
  return (
    <FlatList
      data={products}
      numColumns={4}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
}
