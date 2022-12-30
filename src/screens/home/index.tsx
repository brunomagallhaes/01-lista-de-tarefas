import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Tarefa } from '../../components/Tarefas';

import { styles } from '../styles';

export function Home() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefaName, setTarefasName] = useState('');

  function handleTarefaAdd() {
    if (tarefas.includes(tarefaName)) {
      return Alert.alert("Tarefa existe", "Essa tarefa ja existe na lista.");
    }

    setTarefas(prevState => [...prevState, tarefaName]);
    setTarefasName('');
  }

  function handleTarefaRemove(name: string) {
    Alert.alert("Remover", `Remover a Tarefa ${name} ?`, [
      {
        text: "Sim",
        onPress: () => setTarefas(prevState => prevState.filter(tarefa => tarefa !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleTarefaComplete(name: string) {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        TODO LIST
      </Text>

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
            Adicionar
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tarefa
            key={item}
            name={item}
            onRemove={() => handleTarefaRemove(item)}
            onComplete={() => handleTarefaComplete(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não tem nenhuma tarefa adicionada ? Adicione tarefas a sua lista.
          </Text>
        )}
      />
    </View>
  )
}