import {View, StyleSheet, Text, ImageBackground, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import BotaoEntrar from '../components/botaoEntrar'

import { RootStackParamList } from '../navigation/navigation';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, "Login"
>;

export default function Login(){

    const navigation = useNavigation<LoginScreenNavigationProp>();

    return(
        <View style={styles.container}>
            <ImageBackground source={require("../image/fundo-de-login.png")} style={styles.imagem}>
                <View style={styles.cadastro}>
                    <Image 
                        source={require('../image/logo-preta.png')}
                        style={{
                            width: '40%',
                            height: '30%',
                            marginTop: -60
                            }}
                    ></Image>

                    <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                    <TextInput style={styles.textInput} placeholder='senha'></TextInput>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 30}}>
                        <View style={{
                            width: 10, 
                            height: 10, 
                            backgroundColor: '#fff', 
                            marginRight: 7, 
                            borderRadius: 2
                            }}>
                        </View>
                        <Text style={{marginRight: 90}}>Lenbrar cadastro</Text>
                        <Text>Esqueceu a senha?</Text>
                    </View>

                    <BotaoEntrar
                       onPress={() => navigation.navigate('TelaInicio', { userId: 123 })} title="Entrar" />
                    
                </View>
            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imagem: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cadastro: {
        width: 370,
        height: 370,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        opacity: 0.50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInput: {
        width: '85%',
        height: '10%',
        margin: 5,
        borderBottomWidth: 2,
        borderColor: '#fff'
    }

})