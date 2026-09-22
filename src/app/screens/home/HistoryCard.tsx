import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type HistoryCardProps = {
  itemtag: String;
  status: String;
  date: String;
  item: String;
  price: String;
  delivarytype: String;
};

const HistoryCard = ({
  itemtag,
  status,
  date,
  delivarytype,
  item,
  price,
}: HistoryCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.itemtag}>{itemtag}</Text>
        <View style={styles.statuscobtainer}>
          <Text style={styles.statutext}>{status}</Text>
        </View>
      </View>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.itemcontainer}>
        <Text style={styles.date}>{item}</Text>
      </View>

      {/*  */}
      <View style={styles.row}>
        <Text style={styles.deliverytype}>{delivarytype}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#262626",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
    marginTop:20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemtag: {
    color: colors.yellow,
    fontWeight: "semibold",
    fontSize: 16,
  },
  date: {
    color: colors.gray,
    fontWeight: "light",
    fontSize: 12,
  },
  deliverytype: {
    color: colors.gray,
    fontWeight: "light",
    fontSize: 12,
  },
  price: {
    color: colors.white,
    fontWeight: "semibold",
    fontSize: 18,
  },
  statuscobtainer: {
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 13,
  },
  itemcontainer: {
    backgroundColor: colors.black,
    paddingVertical: 3,
    paddingHorizontal: 14,
    borderRadius: 13,
    alignSelf: "flex-start",
  },
  statutext: {
    color: colors.yellow,
    fontWeight: "400",
  },
});
