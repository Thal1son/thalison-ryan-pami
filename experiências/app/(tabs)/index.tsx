import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const saudar = () => {
    if (nome.trim() === '') return alert('Digite seu nome para continuar!');
    alert(`Olá, ${nome}! Bem-vindo ao seu mini-app criativo 🎉`);
  };

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setLista(prev => [...prev, { id: Date.now().toString(), texto: tarefa, concluida: false }]);
    setTarefa('');
  };

  const alternarConclusao = (id) => {
    setLista(prev =>
      prev.map(item => item.id === id ? { ...item, concluida: !item.concluida } : item)
    );
  };

  const limparConcluidas = () => {
    setLista(prev => prev.filter(item => !item.concluida));
  };

  return (
    <View style={styles.container}>
     

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Digite seu nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Boas Vindas" onPress={saudar} />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>📋 Lista de tarefas com toque</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>Adicionar </Text>
        </TouchableOpacity>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alternarConclusao(item.id)}>
              <Text style={[styles.tarefa, item.concluida && styles.concluida]}>
                {item.concluida ? '✅ ' : ' '} {item.texto}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa ainda. Adicione uma acima.</Text>}
        />

        <TouchableOpacity style={[styles.botao, styles.botaoSecundario]} onPress={limparConcluidas}>
          <Text style={styles.botaoTexto}>Limpar concluídas </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>
        Feito com View, Text, TextInput, Button, TouchableOpacity e StyleSheet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b', // fundo mais moderno
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#E2E8F0', // texto mais claro
  },

  card: {
    backgroundColor: '#334155',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#f8fafc',
  },

  input: {
    borderWidth: 1,
    borderColor: '#3b4a5d',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#1e293b',
    marginBottom: 10,
    color: '#f8fafc',
  },

  botao: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },

  botaoSecundario: {
    backgroundColor: '#FF5722',
    marginTop: 10,
    shadowColor: '#FF5722',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  botaoTexto: {
    color: '#f8fafc',
    fontWeight: '700',
    fontSize: 16,
  },

  tarefa: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3b4a5d',
    color: '#f8fafc',
  },

  concluida: {
    textDecorationLine: 'line-through',
    color: '#94a3b8',
  },

  vazio: {
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 10,
  },

  rodape: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: 8,
  },
});
