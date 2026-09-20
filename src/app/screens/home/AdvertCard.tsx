import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

type Advertcardprop = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const AdvertCard = ({ title, description, icon }: Advertcardprop) => {
  return (
    <View style={styles.advert}>
      <Ionicons name={icon} size={28} color={colors.yellow} />

      <Text style={styles.advertTitle}>{title}</Text>

      <Text style={styles.advertDescription}>{description}</Text>
    </View>
  );
};

export default AdvertCard;

const styles = StyleSheet.create({
  advertRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  advert: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: "#262626",
    borderRadius: 15,
  },

  advertTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },

  advertDescription: {
    color: "#BDBDBD",
    fontSize: 13,
    lineHeight: 18,
  },
});
