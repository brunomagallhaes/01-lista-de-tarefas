import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign'

interface TarefaType {
    name: string;
    completed: boolean;
}

type Props = {
    tarefa: TarefaType;
    onRemove: () => void;
    onComplete: () => void;
}

export function Tarefa({ tarefa, onRemove, onComplete }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {tarefa.name}
            </Text>

            <TouchableOpacity style={styles.button2} onPress={onComplete}>
                { tarefa.completed && <AntDesign name="checkcircle" size={18} color="#8284fa" /> }
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Feather name="trash-2" size={22} color="grey" />
            </TouchableOpacity>
        </View>
    )
}