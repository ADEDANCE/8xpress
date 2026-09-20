import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type CategoryTabProps = {
  title: String;
};

const CategoryTab = ({ title }: CategoryTabProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginVertical: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  title: {
    color: colors.white,
  },
});
