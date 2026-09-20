import { colors } from "@/constants/colors";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import CategoryTab from "../screens/home/CategoryTab";
import MenuCard from "../screens/home/MenuCard";

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>THE MENU</Text>
      <Text style={styles.pageDescription}>Fresh. Hot. Made to order.</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable>
          <CategoryTab title={"All"} />
        </Pressable>
        <Pressable>
          <CategoryTab title={"Party Jollof"} />
        </Pressable>
        <Pressable>
          <CategoryTab title={"Shawarma"} />
        </Pressable>
        <Pressable>
          <CategoryTab title={"Add-ons"} />
        </Pressable>
        <Pressable>
          <CategoryTab title={"Drinks"} />
        </Pressable>
      </ScrollView>

      <MenuCard />
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
});
