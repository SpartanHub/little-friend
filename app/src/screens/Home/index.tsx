import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { View, ImageBackground, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import theme from '../../styles/theme'

const Home = () => {
  const navigation = useNavigation()

  function hangleNavigationToFriends() {
    navigation.navigate('Friends')
  }

  return (
    <>
      <View style={theme.container}>
        <ImageBackground
          source={require('../../../assets/images/background-undraw.png')}
          style={styles.background}
          resizeMode='cover'
          imageStyle={{ width: '100%', alignSelf: 'flex-end' }}
        />
        <View style={theme.main}>
          <Text>
            Little Friend.
          </Text>
          <Text style={[theme.heading, styles.title]}>
            Vamos te ajudar a encontrar um amigo pet
          </Text>
          <Text style={[theme.text, styles.headline]}>
            Adoção segura e responsável perto de você!
          </Text>

          <RectButton style={[theme.button, theme.boxShadow]} onPress={hangleNavigationToFriends}>
            <View style={styles.buttonIcon}>
              <Feather name="search" color="#fff" size={24} />
            </View>
            <Text style={theme.buttonText}>
              Procurar um amigo
            </Text>
          </RectButton>
        </View>
      </View >
    </>
  );
}

export default Home
