import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

const TaskItem = ({ editTask, task, onPress, onEdit }) => {


  const [isEdit, setIsEdit] = useState(true);

  const changeState = () => {
    setIsEdit(!isEdit);
  }

  const EditItem = () => {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={onEdit}>
          <AntDesing
            name="check"
            color={'white'}
            size={25}
            style={style.button}
          />
        </TouchableOpacity>
        <TextInput
          style={style.input}
          value={task}
          onChangeText={editTask}
        />
      </View>
    );
  };

  const ShowItem = () => {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={onPress}>
          <AntDesing
            name="delete"
            color={'#D2ECFD'}
            size={25}
            style={style.buttonDelete}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={changeState}>
          <AntDesing
            name="edit"
            color={'#D2ECFD'}
            size={25}
            style={style.buttonDelete}
          />
        </TouchableOpacity>
        <Text style={style.text}>{task}</Text>
      </View>
    );
  };

  return (
    <View>{isEdit ?<ShowItem /> : <EditItem />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#155985',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    // backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  buttonDelete: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
});

export default TaskItem;
