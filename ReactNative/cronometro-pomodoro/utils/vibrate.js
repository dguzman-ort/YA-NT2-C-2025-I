import { Vibration } from "react-native";

export default () => Vibration.vibrate([500, 500, 500]);

const vibrateLong = () => Vibration.vibrate(1000);

export { vibrateLong as vibrateLong };