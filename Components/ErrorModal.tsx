import React from 'react'
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'

type Props = {
  onRequestClose: () => void;
  visible: boolean;
  searchTerm: string;
  type: 'country' | 'city';
}

export default function ErrorModal({onRequestClose, visible, searchTerm, type}: Props) {
  return (
    <Modal
          animationType='fade'
          transparent={true}
          visible={visible}
          onRequestClose={onRequestClose}
        >
          <View style={styles.modalView}>
            <View style={styles.modal}>
              <Text style={{ color: '#fff' }}>No {type==='country' ? 'countries': 'citys'} are matching your search term: {searchTerm}.</Text>
              <Text style={{ color: '#fff', marginTop:10 }}>Make sure to use the correct ISO {type==='country' ? 'country': 'city'} name when searching.</Text>
              <Pressable style={styles.modalButton} onPress={onRequestClose}>
                <Text style={{color:'#fff', fontWeight:'bold', textAlign:'center'}}>Search again</Text>
                </Pressable>
            </View>
          </View>

        </Modal>
  )
}

const styles = StyleSheet.create({
  modalView:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  modal:{
    margin: 5, 
    padding: 30, 
    backgroundColor: '#1A5276',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton:{
    marginTop: 10,
    padding: 10, 
    backgroundColor: '#76D7C4',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});