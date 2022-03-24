import AsyncStorage from '@react-native-async-storage/async-storage';
import { cloneDeep } from 'lodash';

// 获取本地存储对象数据
export async function getStorage(name) {
  const data = await AsyncStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  } else {
    return {}
  }
}

const defaultState = {
  msg: {}
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'Msg') {
    const cloneState = cloneDeep(state);
    cloneState.msg = action.msg;
    return cloneState;
  }

  return state;
};

export default reducer;
