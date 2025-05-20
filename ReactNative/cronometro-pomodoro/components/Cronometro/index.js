import { View, Text } from "react-native";
import styles from "./styles";
import constants from "./constants";
import { useState, useEffect } from "react";
import { useCronometro } from "../../hooks/useCronometro";
import { vibrate } from "../../utils";
const minToSec = (min) => min * 60;
const paddZero = num => num < 10 ? `0${num}` : num;

let interval;

export default function Cronometro() {

  const { isRunning, isWorking, setIsWorking, shouldReset } = useCronometro();

    const [remainingTime, setRemainingTime] = useState(minToSec(constants.WORKING_TIME));

    useEffect(() => {
      if (isRunning) {
        interval = setInterval(() => {
          setRemainingTime(prev => prev - 1);
        }, 1000)        
      }else{
        clearInterval(interval);
      }
    },[isRunning])

    useEffect(() => {
      if (remainingTime === 0) {
        vibrate();
        console.log("vibrate!!!!!!");
        
        setRemainingTime(minToSec(isWorking ? constants.RESTING_TIME : constants.WORKING_TIME));
        setIsWorking(prev => !prev);


      }
    },[remainingTime])


    useEffect(() => {
      console.log("shouldReset", shouldReset);
      if (shouldReset) {
        setRemainingTime(minToSec(isWorking ? constants.WORKING_TIME : constants.RESTING_TIME));
      }
    },[shouldReset])


    const mins = Math.floor(remainingTime / 60);
    const secs = Math.floor(remainingTime % 60);


    return (
      <View>
        <Text style={styles.time}>{paddZero(mins)}:{paddZero(secs)}</Text>
      </View>
    )
}