import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type HowItWorksCardProps = {
  step: string;
  title: string;
  description: string;
};

const HowItWorksCard = ({
  step,
  title,
  description,
}: HowItWorksCardProps) => {
  return (
    <View style={styles.howItWorksCard}>
      <Text style={styles.stepNumber}>{step}</Text>

      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default HowItWorksCard;

const styles = StyleSheet.create({
  howItWorksCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: "#262626",
    borderRadius: 15,
    marginTop: 12,
  },

  stepNumber: {
    color: colors.yellow,
    fontWeight: "bold",
    fontSize: 30,
    width: 50,
  },

  stepContent: {
    flex: 1,
    marginLeft: 12,
  },

  stepTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  stepDescription: {
    color: "#BDBDBD",
    fontSize: 14,
    lineHeight: 20,
  },
});