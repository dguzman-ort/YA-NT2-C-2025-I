# React Native Location App

A React Native application built with Expo that demonstrates how to request and display the user's current location using the `expo-location` package.

## Features

- 🌍 Request user location permissions
- 📍 Get current GPS coordinates
- 📱 Display location data in real-time
- ⚠️ Handle permission errors gracefully

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS testing) or Android emulator (for Android testing)

## Installation

1. Clone the repository and navigate to the project directory:
```bash
cd app-location
```

2. Install dependencies:
```bash
npm install
```

3. Install the Expo Location package:
```bash
npx expo install expo-location
```

## Configuration

The app is already configured with the necessary permissions in `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ]
  }
}
```

## Usage

### Running the App

1. Start the Expo development server:
```bash
npx expo start
```

2. Choose your platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

### How It Works

The app will:

1. **Request Permissions**: When launched, it requests foreground location permissions
2. **Get Location**: If permissions are granted, it retrieves the current position
3. **Display Data**: Shows the location data including:
   - Latitude and longitude coordinates
   - Altitude
   - Accuracy
   - Timestamp

### Expected Output

When location is successfully retrieved, you'll see a JSON object containing:
```json
{
  "coords": {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "altitude": 10,
    "accuracy": 5,
    "altitudeAccuracy": 10,
    "heading": 0,
    "speed": 0
  },
  "timestamp": 1640995200000
}
```

## Permissions

The app requires location permissions to function properly:

- **iOS**: Location permissions will be requested when the app starts
- **Android**: Location permissions will be requested when the app starts

If permissions are denied, the app will display: "Permission to access location was denied"

## Platform Scripts

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

## Project Structure

```
app-location/
├── App.js # Main application component
├── app.json # Expo configuration
├── package.json # Dependencies and scripts
├── assets/ # Images and icons
│ ├── icon.png
│ ├── splash-icon.png
│ └── ...
└── readme.md # This file
```