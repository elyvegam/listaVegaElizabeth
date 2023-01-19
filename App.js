import { FlatList, StyleSheet, Text, View } from 'react-native';

import AddItem from './src/components/AddItem';
import Button from './src/components/Button';
import Modal from './src/components/Modal';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextItem(text);
  };

  const addItemToList = () => {
    setList((prevState) => prevState.concat(textItem));
    setTextItem('');
  };

  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (item) => {
    setList((prevState) => prevState.filter((el) => el !== item));
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item}</Text>
      <Button
        text='EDIT'
        customPress={() => handleModal(item)}
        buttonStyles={styles.editButton}
        customTextStyles={{ color: '#FFF' }}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
          <AddItem
            onChange={onHandleChangeItem}
            textValue={textItem}
            onAddItem={addItemToList}
          />
        </View>
        <View style={styles.infoContainer}>
          <FlatList
            data={list}
            keyExtractor={(item) => item}
            renderItem={renderItem}
          />
        </View>
      </View>
      <Modal
        item={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        isVisible={modalVisible}
        onDismissModal={() => setModalVisible(!modalVisible)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 60,
    backgroundColor: '#b9c0da',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  listText: {
    fontSize: 20,
  },
  editButton: {
    backgroundColor: '#998da0',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
