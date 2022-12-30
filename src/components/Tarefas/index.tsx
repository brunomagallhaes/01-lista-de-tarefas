import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles";

type Props = {
    name: string;
    onRemove: () => void;
    onComplete: () => void;
}

export function Tarefa({ name, onRemove, onComplete }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onComplete}>
                <Text style={styles.buttonText}>
                    &#10004;
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    &#10006;
                </Text>
            </TouchableOpacity>
        </View>
    )
}