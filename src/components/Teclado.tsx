import {TouchableOpacity, StyleSheet, Text} from 'react-native'

type Props = {
  onPress?: () => void;
};

export default function BotaoEntrar({ onPress }: Props){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>Entrar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '13%',
        backgroundColor: '#0C5D6B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    
    },

})