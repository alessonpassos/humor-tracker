import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "./components/Button";
import { Text } from 'react-native'



export default function App() {
  return (
    <SafeAreaView>

    <Button order={3} onPress={() => console.log('clicou')}>
      <Text>Button {3}</Text>
    </Button>

    </SafeAreaView>
  );
}



