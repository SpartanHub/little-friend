import React, { useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import theme from '../../styles/theme'
import styles from './styles'

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ImageSourcePropType
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';


interface Pet {
  id: number,
  name: string,
  age: number,
  gender: string,
  breed: string,
  images: ImageSourcePropType[],
  distancy: number
}

interface Breed {
  id: number,
  name: string,
  image: string
}


const Detail = () => {
  let [selectedBreedId, setSelectedBreedId] = useState(1)

  function handleSelectedCategory(id: number) {
    selectedBreedId === id ? setSelectedBreedId(NaN) : setSelectedBreedId(id)
  }

  const navigation = useNavigation()

  function hangleNavigationBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={[theme.container, { backgroundColor: '#fff' }]}>
      <View style={[theme.header, { height: 180, alignItems: 'center', alignContent: 'center' }]}>
        <TouchableOpacity onPress={hangleNavigationBack}>
          <Feather name="arrow-left" color="#ADADAD" size={24}></Feather>
        </TouchableOpacity>

        <View style={theme.headerContainer}>
          <Text style={{ color: '#ADADAD' }}>
            Localidade
            </Text>
          <View style={theme.row}>
            <Feather style={{ marginRight: 4 }} name="map-pin" color="#E70037" size={18} />
            <Text style={[theme.text, theme.boldText]}> Feira de Santana, Bahia</Text>
          </View>
        </View>

      </View>

      <View style={{ backgroundColor: '#F6F6F6', paddingTop: 24, borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
        <View style={theme.wrapper}>
          <View style={[styles.searchBox]}>
            <Feather style={styles.searchIcon} name="search" color="#ADADAD" size={24} />

            <TextInput
              placeholder="Pesquise por nome, raça ou sexo"
              style={styles.searchInput}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity>
              <Feather style={styles.searchIcon} name="sliders" color="#ADADAD" size={24} />
            </TouchableOpacity>

          </View>
        </View>

        <View style={{}}>
          <ScrollView horizontal contentContainerStyle={[theme.wrapper, { paddingBottom: 16 }]} showsHorizontalScrollIndicator={false}>
            {breeds.map(breed => (
              <View key={breed.id} style={styles.categoryContainer}>
                <View style={[styles.categoryCard, breed.id == selectedBreedId ? styles.categoryActive : {}]}>
                  <TouchableWithoutFeedback
                    onPress={() => handleSelectedCategory(breed.id)}
                  >
                    <SvgUri
                      uri={breed.image}
                      width={42}
                      height={42}
                      fill={breed.id == selectedBreedId ? '#FFFFFF' : '#616161'}
                    />
                  </TouchableWithoutFeedback>
                </View>
                <Text style={styles.categoryText}>
                  {breed.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>


        <ScrollView contentContainerStyle={[theme.wrapper]} showsVerticalScrollIndicator={false}>
          {items.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardImageWrapper}>
                <Image style={styles.cardImage} source={item.images[0]}></Image>
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {item.name}
                </Text>

                <Text style={styles.cardText}>
                  {item.breed}
                </Text>

                <Text style={[theme.text, theme.greyText, { fontSize: 12, marginBottom: 6 }]}>
                  {item.age < 12 ? `${item.age} meses de idade` : `${item.age / 12} anos de idade`}
                </Text>

                <View style={[theme.row]}>
                  <Feather style={{ marginRight: 4 }} name="map-pin" color="#E70037" size={18} />
                  <Text style={styles.locationText}>
                    {item.distancy <= 1 ? `A menos de 1km daqui` : `A ${item.distancy}km daqui`}
                  </Text>
                </View>

                {item.gender == 'M' ? (
                  <Ionicons style={styles.cardIcon} name="ios-male" color="#E70037" size={24} />
                ) : (
                    <Ionicons style={styles.cardIcon} name="ios-female" color="#E70037" size={24} />
                  )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Friends
