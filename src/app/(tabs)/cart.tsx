import { colors } from "@/constants/colors";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CartCard from "../screens/home/CartCard";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.pageTitle}>Your Cart</Text>

        <CartCard
          image={require("@/assets/images/jollof-chicken.jpg")}
          name="Party Jollof Rice"
          type="Regular"
          price="₦1,500"
          quantity={quantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </ScrollView>

      <View style={styles.bottomSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>₦1,500</Text>
        </View>

        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
  },

  pageTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 8,
    color: colors.white,
  },

  bottomSection: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  totalText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  totalPrice: {
    color: colors.yellow,
    fontSize: 20,
    fontWeight: "bold",
  },

  checkoutButton: {
    backgroundColor: colors.red,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  checkoutText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
