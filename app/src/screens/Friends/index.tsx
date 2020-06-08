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


const Friends = () => {
  let [selectedBreedId, setSelectedBreedId] = useState(1)

  function handleSelectedCategory(id: number) {
    selectedBreedId === id ? setSelectedBreedId(NaN) : setSelectedBreedId(id)
  }

  const items: Pet[] = [
    {
      id: 0,
      name: 'Mia',
      age: 2,
      breed: 'Sem raça definida',
      gender: 'F',
      distancy: 2,
      images: [
        { uri: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }
      ],
    },

    {
      id: 1,
      name: 'Tito',
      age: 36,
      breed: 'Sem raça definida',
      gender: 'M',
      distancy: 16,
      images: [
        { uri: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80' }
      ],
    },

    {
      id: 3,
      name: 'Tito',
      age: 36,
      breed: 'Sem raça definida',
      gender: 'M',
      distancy: 16,
      images: [
        { uri: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80' }
      ],
    },

    {
      id: 5,
      name: 'Tito',
      age: 36,
      breed: 'Sem raça definida',
      gender: 'M',
      distancy: 16,
      images: [
        { uri: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80' }
      ],
    },
    {
      id: 6,
      name: 'Tito',
      age: 36,
      breed: 'Sem raça definida',
      gender: 'M',
      distancy: 16,
      images: [
        { uri: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80' }
      ],
    }
  ]

  const breeds: Breed[] = [
    {
      id: 0,
      name: 'Cães',
      image: 'http://192.168.0.8:8081/dog.svg',
    },
    {
      id: 1,
      name: 'Gatos',
      image: 'http://192.168.0.8:8081/cat.svg',
    },
    {
      id: 2,
      name: 'Pássaros',
      image: 'http://192.168.0.8:8081/bird.svg',
    },
    {
      id: 3,
      name: 'Pequenos',
      image: 'http://192.168.0.8:8081/rabbit.svg',
    },
    {
      id: 4,
      name: 'Peixes',
      image: 'http://192.168.0.8:8081/fish.svg',
    }
  ]


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

        <View style={{}}>
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
      </View>
    </SafeAreaView>
  );
}

export default Friends
