import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet, ImageBackground, TextInput, Alert, Text} from 'react-native'
import { RootStackParamList } from '../navigation/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import BotaoEntrar from '../components/botaoEntrar';

type TelaInicioScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, "TelaInicio"
 >;

export default function TelaInicio(){
    const navigation = useNavigation<TelaInicioScreenNavigationProp>();
    //Estado para guardar a equação digitada
    const [equation, setEquation] = useState("");
    const [resultado, setResultado] = useState<string | null>(null);

    //função para enviar ao backend
    const enviarEquacao = async () => {
        try{
            const response = await fetch("http://10.0.2.2:3000/equation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({equation})
            })

            const data = await response.json();
            setResultado(`Resultado: ${data.valorX}`);

        } catch(error) {
            console.log("Erro no serividor: ", error);
            Alert.alert("Erro no servidor: ", "Não foi possivel se conectar ao servidor.")
        }
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={require("../image/Tela-inicial.png")} style={styles.imagem} >
                <View style={styles.lousa}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Sua formula aqui...' 
                        value={equation}
                        onChangeText={setEquation}>
                    </TextInput>
                    <Text style={styles.resultado}>{resultado}</Text>
                    <BotaoEntrar 
                        onPress={enviarEquacao} 
                        title="Enviar" 
                        style={{
                            width: 100, 
                            height: 50,
                            marginTop: 240,
                            marginLeft: 240
                            }}/>
                   
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

    textInput: {
        width: '85%',
        height: '10%',
        margin: 5,
        borderColor: '#fff'
    },

    lousa: {
        width: '95%',
        height: '50%',
        marginTop: '-40%',
        backgroundColor: '#fff',
        opacity: 0.5,
        borderRadius: 5,
        borderColor: '#4e2323ff',
        borderWidth: 3,
        alignItems: 'center'
    },

    resultado: {
        fontSize: 30,
        marginRight: 170
    }


})