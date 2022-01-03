/**
 * @format
 */

import { AppRegistry } from "react-native";
import AppIndex from "./src/index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => AppIndex);
