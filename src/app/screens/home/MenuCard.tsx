import { colors } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

const MenuCard = () => {
  return (
    <View style={styles.menucard}>
      <Image
        source={require("@/assets/images/jollof-chicken.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.detail}>
        <Text style={styles.name}>Party Jollof Rice</Text>

        <Text style={styles.description}>
          Authentic Nigerian party jollof rice, slow-cooked over firewood for
          that smoky, irresistible flavor.
        </Text>

        <Text style={styles.price}>₦1,500</Text>
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
});
