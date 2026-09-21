import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type CartCardProps = {
  image: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CartCard = ({
  image,
  name,
  type,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: CartCardProps) => {
  return (
    <View style={styles.menucard}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.detail}>
        <View style={styles.row}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{type}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={18} color={colors.white} />
          </Pressable>

          <View style={styles.quantityContainer}>
            <Pressable style={styles.quantityButton} onPress={onDecrease}>
              <Ionicons name="remove" size={18} color={colors.white} />
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable style={styles.quantityButton} onPress={onIncrease}>
              <Ionicons name="add" size={18} color={colors.white} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  menucard: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
    marginTop:20,
  },

  image: {
    width: 120,
    height: 120,
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
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    overflow: "hidden",
  },

  quantityButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  quantity: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
    minWidth: 30,
    textAlign: "center",
  },
});
