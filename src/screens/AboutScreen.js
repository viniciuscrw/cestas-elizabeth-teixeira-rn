import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/images/logoelizabeth.png';
import basketproducts from '../../assets/images/basketproducts.png';
import HeaderTitle from '../components/HeaderTitle';
import BackArrow from '../components/BackArrow';
import { stardardScreenStyle as screen } from './screenstyles/ScreenStyles';
import { TextContent, TextLabel } from '../components/StandardStyles';
import Colors from '../constants/Colors';

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image style={styles.logoStyle} source={logo} />
          </View>
          <TextLabel>PROJETO</TextLabel>
          <View style={styles.textContainer}>
            <TextContent style={{ textAlign: 'justify' }}>
            Este aplicativo foi desenvolvido através de um projeto de extensão da 
            Incubadora Tecnológica de Coletivos Populares Campinas - ITCP/Campinas.
            </TextContent>
          </View>
          <TextLabel>Elizabeth Teixeira</TextLabel>
          <View style={styles.textContainer}>
            <TextContent style={{ textAlign: 'justify' }}>
            O Elizabeth Teixeira é um coletivo de produtoras de alimentos organicos 
            localizado dentro do assentamento de mesmo nome. Em parceria com a Incubadora 
            Tecnológica de Coletivos Populares da Unicamp (ITCP Unicamp), o coletivo tem 
            trabalhado para construção de um grupo de consumo reponsável. Um grupo de consumo 
            é um conjunto de pessoas que se juntam para comprar os produtos orgânicos da cooperativa 
            em uma relação que não é apenas comercial, mas é de valorização da produção familiar orgânica.
            </TextContent>
          </View>
          <View style={styles.linkContainer}>
            <AntDesign name="link" size={24} color="black" />
            <Text style={styles.textlink}>
              https://www.instagram.com/produtoraselizabethteixeira/
            </Text>
          </View>
          <TextLabel style={styles.textTitulos}>IFSP CAMPINAS</TextLabel>
          <View style={styles.textContainer}>
            <TextContent style={{ textAlign: 'justify' }}>
            A ITCP Unicamp é um programa de Extensão da Unicamp, 
            criado junto à Pró-Reitoria de Extensão e Cultura (Proec) em 2001 no Campus Campinas. 
            Em 2013 é criada a ITCP do Campus Limeira. Ambas desenvolvem ações de Educação Popular 
            a partir da formação e apoio a grupos populares como cooperativas, associações e grupos informais.
            </TextContent>
          </View>
          <View style={styles.linkContainer}>
            <AntDesign name="link" size={24} color="black" />
            <Text style={styles.textlink}>https://portal.cmp.ifsp.edu.br/</Text>
          </View>
          <TextLabel>EQUIPE DE DESENVOLVIMENTO</TextLabel>
          <View style={styles.textContainer}>
            <TextLabel style={{ paddingTop: 10 }}>Coordenação</TextLabel>
            <TextContent>André Luís Bordignon</TextContent>
            <TextLabel style={{ paddingTop: 10 }}>Desenvolvimento</TextLabel>
            <TextContent>André Luís Bordignon</TextContent>
            <TextContent>Vinícius Costa Regaço</TextContent>
            <TextLabel style={{ paddingTop: 10 }}>Design</TextLabel>
            <TextContent>Augusto Cesar Silva Cruz</TextContent>
                      </View>
          <Image style={styles.imageStyle} source={basketproducts} />
        </ScrollView>
      </View>
    </View>
  );
};

export const aboutScreenOptions = () => {
  return {
    headerTitle: () => (
      <View style={styles.header}>
        <HeaderTitle title="Sobre Nós" />
      </View>
    ),
    headerBackImage: () => <BackArrow />,
    headerStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};

const styles = StyleSheet.create({
  screen,
  container: {
    flex: 1,
    margin: 20,
  },
  logoStyle: {
    borderColor: '#F0F5F9',
    borderWidth: 1,
    borderRadius: 80,
  },
  imageContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  imageStyle: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
    textAlign: 'justify',
  },
  linkContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  textSobre: {
    fontSize: 15,
    marginEnd: 15,
    marginLeft: 26,
    textAlign: 'justify',
  },
  textlink: {
    fontSize: 16,
    paddingLeft: 10,
    color: Colors.headerTitleColor,
  },
  header: {
    alignItems: 'flex-start',
  },
});

export default AboutScreen;
