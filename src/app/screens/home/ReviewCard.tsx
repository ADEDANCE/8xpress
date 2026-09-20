import { colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

type ReviewCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  comment: String;
  name: String;
};

const ReviewCard = ({ icon, comment, name }: ReviewCardProps) => {
  return (
    <View style={styles.Review}>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons key={star} name="star" size={18} color={colors.yellow} />
        ))}
      </View>
      <Text style={styles.reviewTitle}>{comment}</Text>
      <Text style={styles.reviewer}>{name}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  Review: {
    flex: 1,
    width: 250,
    paddingVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: "#262626",
    borderRadius: 15,
    marginRight: 22,
  },

  stars: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 10,
  },

  reviewTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },

  reviewer: {
    color: "#BDBDBD",
    fontSize: 13,
    lineHeight: 18,
  },
});
