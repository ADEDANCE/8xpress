import { colors } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

type PopularCardProps = {
  image: any;
  name: string;
  price: string;
};

const PopularCard = ({ image, name, price }: PopularCardProps) => {
  return (
    <View style={styles.popularcard}>
      <Image style={styles.popularimage} source={image} />

      <View style={styles.populardetails}>
        <Text style={styles.populartext}>{name}</Text>

        <Text style={[styles.populartext, { color: colors.yellow }]}>
          {price}
        </Text>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  popularcard: {
    width: 220,
    height: 200,
    marginTop: 15,
    marginRight: 22,
    borderRadius: 15,
    overflow: "hidden",
  },

  popularimage: {
    width: "100%",
    height: 140,
  },

  populardetails: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 12,
  },

  populartext: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});