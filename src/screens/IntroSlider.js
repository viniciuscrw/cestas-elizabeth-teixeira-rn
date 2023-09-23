import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Button from '../components/Button';
import logoElizabeth from '../../assets/images/logo_elizabeth_teixeira.png';
import logoIfsp from '../../assets/images/logoifspcampinas.png';

const slides = [
  {
    key: '1',
    title: 'Cestas Elizabeth Teixeira',
    subtitle: 'Campinas',
    text1:
      'Boas vindas ao aplicativo  de gestão das cestas do Coletivo de Produtoras Elizabeth Teixeira do grupo de consumo de Campinas.',
    text2: 'Versão 3.1.5',
    image1: logoElizabeth,
    image2: logoIfsp,
  },
  {
    key: '2',
    title: 'Elizabeth Teixeira',
    subtitle: 'Barão Geraldo',
    title: 'Elizabeth Teixeira',
    subtitle: 'Campinas',
    text2:
      'O Elizabeth Teixeira é um coletivo de produtoras de alimentos organicos localizado dentro do assentamento de mesmo nome. Em parceria com a Incubadora Tecnológica de Coletivos Populares da Unicamp (ITCP Unicamp), o coletivo tem trabalhado para construção de um grupo de consumo reponsável. Um grupo de consumo é um conjunto de pessoas que se juntam para comprar os produtos orgânicos da cooperativa em uma relação que não é apenas comercial, mas é de valorização da produção familiar orgânica.',
  },
  {
    key: '3',
    title: 'Elizabeth Teixeira',
    subtitle: 'Campinas',
    text2:
    'Como funciona.\n\n1. A pessoa entra em contato com grupo de consumo e pede sua inclusão.\n\n2. A organização do grupo entra em contato passando as outras informações e solicitando um e-mail da pessoa.\n\n3. Com o e-mail previamente cadastrado pela cooperativa a pessoa pode acessar o aplicativo.',
  },
  {
    key: '4',
    title: 'Elizabeth Teixeira',
    subtitle: 'Campinas',
    text2:
      'O projeto.\n\nEste aplicativo foi desenvolvido através de um projeto de extensão da Incubadora Tecnológica de Coletivos Populares Campinas.\n\ITCP Campinas.\n\n A ITCP Unicamp é um programa de Extensão da Unicamp, criado junto à Pró-Reitoria de Extensão e Cultura (Proec) em 2001 no Campus Campinas. Em 2013 é criada a ITCP do Campus Limeira. Ambas desenvolvem ações de Educação Popular a partir da formação e apoio a grupos populares como cooperativas, associações e grupos informais.',
  },
  {
    key: '5',
    title: 'Elizabeth Teixeira',
    subtitle: 'Campinas',
    text2:
      'Organização do grupo de consumo de Campinas.\n\n Contato: aplicativoelizabethteixeira@gmail.com\n\nEquipe de Desenvolvimento\n\nCoordenação: André Luís Bordignon \n\nDesenvolvimento: Vinicius Costa Regaço\n\nDesign: Mateus Santos Magalhães\n\nBolsistas: Luana Matallo Ruggiero, Rafael Almeida, Yasmin Souza Lima',
  },
];

const IntroSlider = ({ setIntroSlider }) => {
  const setSlider = () => {
    setIntroSlider(false);
  };

  const renderSlides = ({ item }) => {
    const env = Constants.expoConfig.releaseChannel;
    return (
      <View style={styles.screenContainer}>
        {item.title ? <Text style={styles.title}>{item.title}</Text> : null}
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        {item.text1 ? <Text style={styles.text1}>{item.text1}</Text> : null}
        <Text style={styles.text2}>{item.text2}</Text>
        {__DEV__ || env === 'dev' ? (
          <Text style={styles.text2}> Configuração de Desenvolvimento</Text>
        ) : null}
        <View style={styles.logosContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={item.image1} />
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={item.image2} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            id="enterLoginButton"
            style={styles.button}
            textColor="#2D6535"
            onPress={setSlider}
          >
            Entrar
          </Button>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#2D6535',
        width: 20,
      }}
      renderNextButton={() => (
        <FontAwesome5
          style={styles.frontArrow}
          name="chevron-right"
          size={24}
          color="#2D6535"
        />
      )}
      showPrevButton
      renderPrevButton={() => (
        <FontAwesome5
          style={styles.backArrow}
          name="chevron-left"
          size={24}
          color="#2D6535"
        />
      )}
      showDoneButton={false}
    />
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    margin: 10,
  },
  textContainer: {
    margin: 20,
  },
  title: {
    marginTop: 30,
    fontSize: 35,
    color: '#2D6535',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    // backgroundColor: 'red',
  },
  subtitle: {
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: '#BB2525',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 10,
  },
  text1: {
    marginTop: 20,
    fontSize: 26,
    color: '#505050',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  text2: {
    // backgroundColor: 'red',
    marginTop: 20,
    fontSize: 19,
    color: '#505050',
    // fontWeight: 'bold',
    textAlign: 'center',
    // width: '95%',
  },
  descriptionText: {
    fontSize: 20,
    color: '#8898AA',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // logoStyle: {
  //   borderColor: '#F0F5F9',
  //   borderWidth: 1,
  //   borderRadius: 80,
  // },
  logosContainer: {
    flexDirection: 'row',
    height: 200,
  },
  logoContainer: {
    flex: 1,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  logoImage: {
    flex: 1,
    width: '80%',
    // height: null,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    marginBottom: 60,
    bottom: 0,
  },
  button: {
    marginTop: 5,
    alignSelf: 'center',
  },
  frontArrow: {
    marginTop: 11,
    marginRight: 60,
  },
  backArrow: {
    marginTop: 11,
    marginLeft: 60,
  },
});

export default IntroSlider;
