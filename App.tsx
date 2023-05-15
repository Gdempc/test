import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity style={styles.new}>
          <Text style={styles.size}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.note}>

      </TouchableOpacity>
      <TouchableOpacity style={styles.note}>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.note}>

      </TouchableOpacity>
      <TouchableOpacity style={styles.note}>

      </TouchableOpacity>
      <TouchableOpacity style={styles.note}>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: "10%",
    backgroundColor: '#29a0cf',
  },
  new:{
    margin: 0,
    position: 'absolute',
    top: '15%',
    right: '2%',
    width:50,
    height: 50,
    borderRadius:50,
    backgroundColor: "#ffff00",
  },
  note:{
    width:"95%",
    height: "15%",
    backgroundColor: "#aaaaaa",
    margin: 10,
    borderRadius: 10,
  },
  size:{
    fontSize: 50,
    marginLeft : 'auto',
    marginRight:'auto',
    top:-10
  },
});

export default App;