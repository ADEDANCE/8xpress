import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MenuDetailsScreenProps = {
  id: string;
};

const menuItems = [
  {
    id: "1",
    name: "Party Jollof",
    description: "Delicious party jollof rice served fresh.",
    image: require("@/assets/images/jollof-chicken.jpg"),

    sizes: [
      { name: "Small", price: 1500 },
      { name: "Medium", price: 2500 },
      { name: "Large", price: 3500 },
    ],

    addons: [
      { name: "Chicken", price: 800 },
      { name: "Plantain", price: 500 },
      { name: "Egg", price: 300 },
    ],
  },
];

export default function MenuDetailsScreen({ id }: MenuDetailsScreenProps) {
  const item = menuItems.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Food not found.</Text>
      </View>
    );
  }

  const toggleAddon = (addonName: string) => {
    setSelectedAddons((current) =>
      current.includes(addonName)
        ? current.filter((addon) => addon !== addonName)
        : [...current, addonName],
    );
  };

  const selectedSizeItem = item.sizes.find(
    (size) => size.name === selectedSize,
  );

  const addonsTotal = item.addons
    .filter((addon) => selectedAddons.includes(addon.name))
    .reduce((total, addon) => total + addon.price, 0);

  const total = (selectedSizeItem?.price ?? 0) + addonsTotal;

  return (
    <ScrollView style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.sectionTitle}>Choose Size</Text>

        {item.sizes.map((size) => (
          <Pressable
            key={size.name}
            onPress={() => setSelectedSize(size.name)}
            style={[
              styles.option,
              selectedSize === size.name && styles.selectedOption,
            ]}
          >
            <Text style={styles.optiontext}>{size.name}</Text>

            <Text style={styles.optiontext}>
              ₦{size.price.toLocaleString()}
            </Text>
          </Pressable>
        ))}

        <Text style={styles.sectionTitle}>
          Add-ons <Text style={styles.optional}>(Optional)</Text>
        </Text>

        {item.addons.map((addon) => (
          <Pressable
            key={addon.name}
            onPress={() => toggleAddon(addon.name)}
            style={styles.option}
          >
            <View style={styles.addonRow}>
              <Pressable
                onPress={() => toggleAddon(addon.name)}
                style={[
                  styles.checkbox,
                  selectedAddons.includes(addon.name) && styles.checkboxChecked,
                ]}
              >
                {selectedAddons.includes(addon.name) && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </Pressable>

              <Ionicons name="checkmark" size={16} color={colors.black} />
            </View>

            <Text style={styles.optiontext}>
              +₦{addon.price.toLocaleString()}
            </Text>
          </Pressable>
        ))}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>

          <Text style={styles.total}>₦{total.toLocaleString()}</Text>
        </View>

        <Pressable
          style={[styles.button, !selectedSize && styles.disabledButton]}
          disabled={!selectedSize}
        >
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  image: {
    width: "100%",
    height: 280,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.white,
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    color: colors.gray,
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: colors.white,
  },

  optional: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.white,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    color: colors.white,
  },
  selectedOption: {
  borderColor: colors.red,
    borderWidth: 2,
},
  addonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  optiontext: {
    color: colors.white,
    fontSize: 16,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.black,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxChecked: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },

  checkmark: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 18,
  },


  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.white,
  },

  total: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
  },

  button: {
    marginTop: 20,
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
