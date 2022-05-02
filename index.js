import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 解决轮播图插件bug(暂时使用，待插件修复)
global.__reanimatedWorkletInit = () => {};

AppRegistry.registerComponent(appName, () => App);
