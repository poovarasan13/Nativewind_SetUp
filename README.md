React Native Expo + Tailwind CSS Setup (with NativeWind)
This guide walks you through setting up a React Native project using Expo, configured to use Tailwind CSS via NativeWind. It also includes essential packages and setup instructions for a clean development experience using JavaScript.

🧰 Prerequisites
Before starting, make sure you have:

Node.js (v14 or above)

npm or yarn

Expo CLI (Install via npm install -g expo-cli if not installed)

📦 1. Create a New Expo Project
bash
Copy
Edit
npx create-expo-app my-app --template blank
cd my-app
Replace my-app with your desired project name.

🌟 2. Install Tailwind CSS and NativeWind
Install NativeWind and Tailwind CSS using:

bash
Copy
Edit
npm install nativewind@2.0.11
npm install --save-dev tailwindcss@3.3.2
NativeWind allows Tailwind utility classes in React Native components.

🖼️ 3. Install Additional Package (Optional but Useful)
For SVG support (commonly used with Tailwind-based designs):

bash
Copy
Edit
npm install react-native-svg
⚙️ 4. Initialize Tailwind Configuration
Run the following to create the tailwind.config.js file:

bash
Copy
Edit
npx tailwindcss init
This generates a basic config file.

📝 5. Configure tailwind.config.js
Edit the file like below to include paths to all your components, screens, etc.:

js
Copy
Edit
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js', // entry file
    './components/**/*.{js,jsx}',
    './screens/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
This ensures Tailwind processes all relevant files and generates correct styles.

🔧 6. Update babel.config.js
To use Tailwind classes with NativeWind, add the nativewind/babel plugin.

Edit babel.config.js to look like this:

js
Copy
Edit
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['nativewind/babel'],
};
🧪 7. Test the Setup
You can now use Tailwind classes in your components like this:

jsx
Copy
Edit
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Hello Tailwind!</Text>
    </View>
  );
}
Note: Tailwind classes use className (not style or class).

▶️ 8. Run Your Project
Start your project:

bash
Copy
Edit
npm start
or

bash
Copy
Edit
npx expo start
You can now test it on an emulator or a real device using the Expo Go app.

📁 Recommended Folder Structure
arduino
Copy
Edit
my-app/
├── components/
│   └── CustomButton.js
├── screens/
│   └── HomeScreen.js
├── App.js
├── tailwind.config.js
├── babel.config.js
└── ...
📌 Notes
Always use className for Tailwind styling (NativeWind).

NativeWind automatically handles platform differences for consistent UI.

Add more utilities or plugins in tailwind.config.js as needed.

