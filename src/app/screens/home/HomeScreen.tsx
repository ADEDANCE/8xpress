import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Homescreen = () => {
  return (
    <View style={styles.container}>
        {/* <Image
             style={styles.image}
             resizeMode="contain"
             source={require("@/assets/images/logo.png")}
           /> */}

      <ImageBackground
        source={require("@/assets/images/jollof-chicken.jpg")}
        style={styles.hero}
        resizeMode="cover"
      >
        <Text style={styles.smallText}>CRAVING</Text>

        <Text style={styles.title}>PARTY JOLLOF?</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ORDER NOW</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    // paddingHorizontal: 24,
    // paddingTop: -100,
    paddingBottom: 40,
  },

   image: {
    width: 80,
    height: 80,
    alignSelf: "flex-start",
  },

  hero: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },

  smallText: {
    fontSize: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  button: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#f54542",
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: "bold",
  },
});
