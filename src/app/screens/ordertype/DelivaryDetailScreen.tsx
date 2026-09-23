import CustomInput from "@/components/CustomInput";
import { colors } from "@/constants/colors";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DelivaryDetailScreen = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const isFormValid =
    fullName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    address.trim() !== "";
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Your Details</Text>

      <CustomInput
        label="Full Name"
        placeholder="e.g Amaka Obi"
        value={fullName}
        onChangeText={setFullName}
      />

      <CustomInput
        label="Phone Number"
        placeholder="e.g 08012345678"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <CustomInput
        label="Delivery Address"
        placeholder="Billoni G Hostel, Accord"
        value={address}
        onChangeText={setAddress}
      />

      <Pressable
        style={[styles.button, !isFormValid && styles.disabledButton]}
        disabled={!isFormValid}
        onPress={() => {
          console.log("Proceeding...");
        }}
      >
        <Text style={styles.buttonText}>PROCEED TO PAYMENT</Text>
      </Pressable>
    </View>
  );
};

export default DelivaryDetailScreen;

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
    marginTop: 50,
    marginBottom: 20,
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
