/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { enableLatestRenderer } from 'react-native-maps';
import AppProvider from './AppProvider';

enableLatestRenderer();

AppRegistry.registerComponent(appName, () => AppProvider);
