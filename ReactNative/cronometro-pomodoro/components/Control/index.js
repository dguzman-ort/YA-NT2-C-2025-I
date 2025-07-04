import { StyleSheet, View, Button } from "react-native";
import { useCronometro } from "../../hooks/useCronometro";


export default function Control() {
  const { isRunning, setIsRunning, reset } = useCronometro();
    return (
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? "Pausar" : "Iniciar"} onPress={() => setIsRunning(!isRunning)} />
        <Button title="Reiniciar" onPress={reset} />
      </View>      
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    }
})