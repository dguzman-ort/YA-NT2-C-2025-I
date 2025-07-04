import { StyleSheet, Text } from "react-native";
import { useCronometro } from "../../hooks/useCronometro";
export default function Status() {
  const { isWorking } = useCronometro();
  return (
    <Text style={styles.title}>{isWorking ? "Tiempo de Trabajo" : "Tiempo de Descanso"}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 10,
    paddingBottom: 20,
  }
})