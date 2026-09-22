import { useLocalSearchParams } from 'expo-router';
import MenuDetailsScreen from '../screens/menu/MenuDetailsScreen';

export default function MenuDetails() {
    // gets the food ID from the URL
  const { id } = useLocalSearchParams<{ id: string }>();

  return <MenuDetailsScreen id={id} />;
}