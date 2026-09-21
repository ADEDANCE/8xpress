import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MenuCardProps = {
  image: ImageSourcePropType;
  name: String;
  description: String;
  price: String;
};

const MenuCard = ({ image, name, description, price }: MenuCardProps) => {
  return (
    <View style={styles.menucard}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.detail}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.description}>{description}</Text>
        <View style={styles.pricerow}>
          <Text style={styles.price}>{price}</Text>

          <View style={styles.addbutton}>
            <Ionicons name="add" size={20} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  menucard: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
  },

  image: {
    width: 120,
    height: 140,
  },

  detail: {
    flex: 1,
    padding: 14,
    justifyContent: "space-between",
  },

  name: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 6,
  },

  description: {
    color: colors.gray,
    fontSize: 12,
    lineHeight: 18,
  },

  price: {
    color: colors.yellow,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  pricerow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addbutton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
});
