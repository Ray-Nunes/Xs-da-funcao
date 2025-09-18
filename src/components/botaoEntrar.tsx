import {TouchableOpacity, StyleSheet, Text} from 'react-native'

type Props = {
  onPress?: () => void;
  title: string;
  style?: object;
};

export default function BotaoEntrar({ onPress, title, style }: Props){
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.8}>
            <Text style={{fontSize: 23, fontWeight: 'bold', color: '#fff'}}>{title}</Text>
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