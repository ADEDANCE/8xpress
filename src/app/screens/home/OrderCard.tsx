import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type OrderCardProps = {
  amount: String;
  title: String;
};

const OrderCard = ({amount,title}:OrderCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 10,
    alignItems: "center",
    width:120
  },
  amount: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.yellow,
  },
  title: {
    fontWeight: "300",
    fontSize: 10,
    color: colors.gray,
  },
});
