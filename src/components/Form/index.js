import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Result from './Result';

export default function Form() {
    return(
        <View style={styles.form}>
            <Text style={styles.label}>Média etapa 1</Text>
            <TextInput style={styles.input}/> 
            <Text style={styles.label}>Média etapa 2</Text> 
            <TextInput style={styles.input}/> 
            <TouchableOpacity >
                <Text style={styles.button}>Calcular média</Text> 
            </TouchableOpacity>

            <Result/>
        </View>
    );
}
    