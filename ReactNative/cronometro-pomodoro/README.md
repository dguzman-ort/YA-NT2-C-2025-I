# YA-NT2-2025-1-TP2

Trabajo Practico para Nuevas Tecnologias 2 | React Native

Para este trabajo práctico, se pide a los alumnos implementar un Cronometro Pomodoro en una apliación mobile utilizando el framework React Native. El fin de este cronómetro es ayudar a las personas a utilizar la  [Técnica Pomodoro](https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro).

El dispositivo vibrará para indicar cuando tomar un descanso o volver al trabajo, basado en unos valores por defecto: veinticinco (25) minutos para trabajo, cinco (5) minutos para descanso.

## Requerimientos

- Las únicas librerias permitiras a importar serán las siguientes:
  - `expo`
  - `expo-constants`
  - `react`
  - `react-native`
  
- El cronómetro debe mostrar minutos y segundos en Texto.
- El cronómetro debe decrementar los segundos hasta alcanzar 00:00.
- El dispositivo móvil debe vibrar cuando el cronómetro llegue a 00:00.
- Los cronómetros deben intercambiarses automáticamente entre 25 y 5 minutos.
- El cronómetro debe ser capaz de iniciar, pausar o reiniciar.

¡La interfaz gráfica depende de ustedes! Para mayor referencia: https://reactnative.dev/docs/style

### EXTRA (No requerido)
- Permitir al usuario ingresar cualquier valor para el cronómetro (ejemplo: 10 minutos para trabajo y 5 minutos para descanso, etc).