import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Tarefa } from '../../components/Tarefas';
import { styles } from '../styles';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface TarefaType {
  name: string;
  completed: boolean;
}

export function Home() {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const [tarefaName, setTarefasName] = useState('');

  function handleTarefaAdd() {
    if (tarefas.filter(tarefa => tarefa.name === tarefaName).length > 0) {
      return Alert.alert("Tarefa existe", "Essa tarefa ja existe na lista.");
    }

    const novaTarefa = {
      name: tarefaName,
      completed: false
    };

    setTarefas(prevState => [...prevState, novaTarefa]);
    setTarefasName('');
  }

  function handleTarefaRemove(name: string) {
    Alert.alert("Remover", `Remover a Tarefa ${name} ?`, [
      {
        text: "Sim",
        onPress: () => setTarefas(prevState => prevState.filter(tarefa => tarefa.name !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleTarefaComplete(name: string) {
    const newTarefas = tarefas.map((tarefa) => {
      if (tarefa.name === name) {
        tarefa.completed = !tarefa.completed;
      }

      return tarefa;
    });

    setTarefas(prevState => newTarefas);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../../assets/logodois.png')} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTarefasName}
          value={tarefaName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
          <Text style={styles.buttonText}>
            <EvilIcons name="plus" size={30} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={tarefa => tarefa.name}
        renderItem={({ item: tarefa }) => (
          <Tarefa
            key={tarefa.name}
            tarefa={tarefa}
            onRemove={() => handleTarefaRemove(tarefa.name)}
            onComplete={() => handleTarefaComplete(tarefa.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer
          </Text>
        )}
      />
    </View>
  );
};








