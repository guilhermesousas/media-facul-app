import { Text, View } from "react-native";
import styles from "./style";


export default function Result(props){
    return(
        <View style={styles.resultadoMedia}>
            <Text style={styles.info}>Sua Média foi:</Text>
            <Text style={styles.media}>{props.media}</Text>
            <Text style={[styles.msgResultado, styles.corAprovado]}>{props.msgResultado}</Text>
        </View>
    )
}