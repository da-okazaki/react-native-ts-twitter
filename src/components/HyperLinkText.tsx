import { Text } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default function HyperLinkText(text: any) {
  return (
    <Hyperlink linkStyle={{ color: '#2980b9', fontWeight: 'bold' }}>
      <Text>{text}</Text>
    </Hyperlink>
  );
}
