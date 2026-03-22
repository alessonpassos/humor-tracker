import { SafeAreaView } from 'react-native-safe-area-context';
import { FirstComponent } from "./components/FirstCompenent";



export default function App() {
  return (
    <SafeAreaView>

      <FirstComponent order={1}/>
      <FirstComponent order={2}/>
      <FirstComponent order={3}/>
      <FirstComponent order={4}/>
      <FirstComponent order={5}/>

    </SafeAreaView>
  );
}



