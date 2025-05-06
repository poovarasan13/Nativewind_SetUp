✨ React Native Expo + Tailwind CSS Setup (with NativeWind)
This guide walks you through setting up a React Native project using Expo, configured with Tailwind CSS via NativeWind. It includes essential package installations and step-by-step instructions for a clean and efficient setup using JavaScript.

🧰 Prerequisites
Before you begin, ensure the following are installed:

✅ Node.js (v14 or above)

✅ npm or yarn

✅ Expo CLI

bash
Copy
Edit
npm install -g expo-cli
<details> <summary>📦 <strong>1. Create a New Expo Project</strong></summary>
bash
Copy
Edit
npx create-expo-app my-app --template blank
cd my-app
Replace my-app with your desired project name.

</details>
<details> <summary>🌟 <strong>2. Install Tailwind CSS and NativeWind</strong></summary>
bash
Copy
Edit
npm install nativewind@2.0.11
npm install --save-dev tailwindcss@3.3.2
NativeWind allows you to use Tailwind utility classes directly in React Native components.

</details>
<details> <summary>🖼️ <strong>3. Install Additional Package (Optional)</strong></summary>
bash
Copy
Edit
npm install react-native-svg
This is useful for rendering SVGs — often used with Tailwind-based UIs.

</details>
<details> <summary>⚙️ <strong>4. Initialize Tailwind Configuration</strong></summary>
bash
Copy
Edit
npx tailwindcss init
This command generates a basic tailwind.config.js file.

</details>
<details> <summary>📝 <strong>5. Configure <code>tailwind.config.js</code></strong></summary>
js
Copy
Edit
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.js',
    './components/**/*.{js,jsx}',
    './screens/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
This tells Tailwind to scan these files and generate the appropriate styles.

</details>
<details> <summary>🔧 <strong>6. Update <code>babel.config.js</code></strong></summary>
js
Copy
Edit
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['nativewind/babel'],
};
The nativewind/babel plugin is essential for transforming Tailwind classes in React Native.

</details>
<details> <summary>🧪 <strong>7. Test the Setup</strong></summary>
Here’s a basic example using Tailwind classes in your App.js:

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
✅ Note: Use className, not class or style, for styling.

</details>
<details> <summary>▶️ <strong>8. Run Your Project</strong></summary>
bash
Copy
Edit
npm start
or

bash
Copy
Edit
npx expo start
Use the Expo Go app on your mobile device to preview the project live.

</details>
📁 Recommended Folder Structure
bash
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
🧠 Always use className for styling with NativeWind.

🖥️ NativeWind handles platform-specific styles seamlessly.

🔧 Customize or extend the Tailwind setup using the tailwind.config.js file.

📚 Check out NativeWind Docs for more utilities and advanced configuration.