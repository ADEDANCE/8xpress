import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("@/assets/images/2.png")} />
      <Text style={styles.title}>WELCOME BACK</Text>
      <Text style={styles.subtitle}>Login to track your orders</Text>
      <Pressable style={styles.button}>
        <Text>LOGIN</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    padding: 40,
  },


  image:{
    width: '100%',
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    textAlign: "center",
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 16,
    maxWidth: 340,
  },
  button: {
    width: "100%",
    backgroundColor: "#f54542",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
});
