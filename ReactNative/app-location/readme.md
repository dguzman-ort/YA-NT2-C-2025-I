# Instalacion

`npx expo install expo-location`

# Configuracion

### Modificar el App.json y agregar lo siguiente
```
"expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ],
    ...
```

### Ejecutar

`npx expo start`