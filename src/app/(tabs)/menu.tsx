import { colors } from "@/constants/colors";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import CategoryTab from "../screens/home/CategoryTab";
import MenuCard from "../screens/home/MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Party Jollof Rice",
    category: "Party Jollof",
    description:
      "Authentic Nigerian party jollof rice, slow-cooked over firewood for that smoky, irresistible flavor. A true celebration on a plate.",
    price: "From ₦1,500",
    image: require("@/assets/images/jollof-chicken.jpg"),
  },
  {
    id: 2,
    name: "Jollof Rice + Chicken",
    category: "Party Jollof",
    description:
      "Our signature party jollof rice paired with perfectly seasoned, tender grilled chicken.",
    price: "From ₦2,300",
    image: require("@/assets/images/jollof-chicken.jpg"),
  },
  {
    id: 3,
    name: "Jollof Rice + Beef",
    category: "Party Jollof",
    description:
      "Smoky party jollof rice served with choice cuts of well-seasoned Nigerian beef stew.",
    price: "From ₦2,200",
    image: require("@/assets/images/jollof-chicken.jpg"),
  },
  {
    id: 4,
    name: "Jollof Rice + Turkey",
    category: "Party Jollof",
    description:
      "Festive party jollof rice with succulent turkey pieces — the full Nigerian celebration experience.",
    price: "From ₦1,500",
    image: require("@/assets/images/jollof-chicken.jpg"),
  },
  {
    id: 5,
    name: "Regular Shawarma",
    category: "Shawarma",
    description:
      "Classic shawarma wrap loaded with seasoned meat, fresh vegetables, and our signature sauce — all in a toasted flatbread.",
    price: "₦1,200",
    image: require("@/assets/images/shawarma2.jpg"),
  },
  {
    id: 6,
    name: "Chicken Shawarma",
    category: "Shawarma",
    description:
      "Freshly prepared shawarma loaded with tender chicken strips, crispy lettuce, tomatoes, and special 8Xpress sauce",
    price: "₦1,500",
    image: require("@/assets/images/shawarma1.jpg"),
  },
  {
    id: 7,
    name: "Special Shawarma",
    category: "Shawarma",
    description:
      "The 8Xpress signature — packed with chicken, beef, sausage, egg, and our secret sauce. Not for the faint of heart.",
    price: "₦1,200",
    image: require("@/assets/images/shawarma3.jpg"),
  },
  {
    id: 8,
    name: "Grilled Chicken",
    category: "addons",
    description:
      "Perfectly seasoned grilled chicken — great as a standalone or alongside your jollof.",
    price: "₦800",
    image: require("@/assets/images/shawarma2.jpg"),
  },
  {
    id: 9,
    name: "Fried Plantain",
    category: "Shawarma",
    description:
      "Sweet, golden-fried plantain — the perfect side to any Nigerian meal.",
    price: "₦300",
    image: require("@/assets/images/shawarma2.jpg"),
  },
  {
    id: 10,
    name: "Coke",
    category: "Drinks",
    description: "Chilled Coca-Cola.",
    price: "₦500",
    image: require("@/assets/images/coke.jpg"),
  },
  {
    id: 11,
    name: "Bottled Water",
    category: "Drinks",
    description: "Chilled pure water.",
    price: "₦500",
    image: require("@/assets/images/coke.jpg"),
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchText, setSearchText] = useState("");

  const filteredItems = menuItems.filter((item) => {
    //  check selected category
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    // check searched item
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>THE MENU</Text>
      <Text style={styles.pageDescription}>Fresh. Hot. Made to order.</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search menu..."
        placeholderTextColor={colors.gray}
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable onPress={() => setSelectedCategory("All")}>
          <CategoryTab title="All" />
        </Pressable>

        <Pressable onPress={() => setSelectedCategory("Party Jollof")}>
          <CategoryTab title="Party Jollof" />
        </Pressable>

        <Pressable onPress={() => setSelectedCategory("Shawarma")}>
          <CategoryTab title="Shawarma" />
        </Pressable>

        <Pressable onPress={() => setSelectedCategory("addons")}>
          <CategoryTab title="Add-ons" />
        </Pressable>

        <Pressable onPress={() => setSelectedCategory("Drinks")}>
          <CategoryTab title="Drinks" />
        </Pressable>
      </ScrollView>

      {filteredItems.map((item) => (
        <MenuCard
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 8,
    color: colors.white,
  },

  pageDescription: {
    color: colors.gray,
    fontSize: 15,
  },

  searchInput: {
    backgroundColor: "#262626",
    color: colors.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 48,
    marginTop: 20,
    marginBottom: 15,
  },
});
