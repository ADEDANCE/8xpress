import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OrderTypeScreen = () => {
  const [orderType, setOrderType] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Order Type</Text>
      <Text style={styles.pagesubtitle}>
        How would you like to receive your order?
      </Text>

      <Pressable
        style={[
          styles.deliveryCard,
          orderType === "Pickup" && styles.selectedOption,
        ]}
        onPress={() => setOrderType("Pickup")}
      >
        <View style={styles.row}>
          <Text style={styles.optionTitle}>Pickup</Text>
          <Text style={{ color: "#03fc35" }}>Free</Text>
        </View>

        <Text style={styles.optionDescription}>
          Pick up your order at our location
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.deliveryCard,
          orderType === "Delivery" && styles.selectedOption,
        ]}
        onPress={() => setOrderType("Delivery")}
      >
        <View style={styles.row}>
          <Text style={styles.optionTitle}>Delivery</Text>
          <Text style={{ color: colors.yellow }}>₦500</Text>
        </View>

        <Text style={styles.optionDescription}>
          Have your order delivered to you
        </Text>
      </Pressable>

      <View style={styles.totalcard}>
        <View style={styles.row}>
          <Text style={styles.amouttitle}>Food subtotal</Text>
          <Text style={styles.amounttext}>₦1,500</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.amouttitle}>Delivery fee</Text>
          <Text style={styles.amounttext}>₦500</Text>
        </View>

        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totaltext}>Total</Text>
          <Text style={styles.totalAmount}>₦2,000</Text>
        </View>
      </View>

      <Pressable
        style={[styles.button, !orderType && styles.disabledButton]}
        disabled={!orderType}
        onPress={() => router.push("/delivarydetails/DelivaryDetailScreen")}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

export default OrderTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  pagetitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
  },
  pagesubtitle: {
    color: colors.gray,
    fontWeight: "light",
    fontSize: 13,
  },
  deliveryCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  selectedOption: {
    borderColor: colors.red,
    borderWidth: 2,
  },

  optionTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },

  optionDescription: {
    color: colors.gray,
    fontSize: 13,
  },

  totalcard: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#262626",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 40,
  },

  amouttitle: {
    color: colors.gray,
    fontWeight: "300",
  },
  amounttext: {
    color: colors.white,
    fontWeight: "semibold",
  },

  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingTop: 15,
    marginTop: 15,
  },

  totaltext: {
    color: colors.white,
    fontWeight: "bold",
  },

  totalAmount: {
    color: colors.yellow,
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    marginTop: 100,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colors.red,
  },
  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    fontWeight: "700",
    color: colors.white,
  },
});
