import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const router = useRouter();

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
      />
      <Text style={styles.title}>WELCOME BACK</Text>
      <Text style={styles.subtitle}>Login to track your orders</Text>
      <Text style={styles.inputlabel}>Email Address</Text>
      <TextInput placeholder="you@email.com" style={styles.textInput} />
      <Text style={styles.inputlabel}>Email Address</Text>
      <TextInput placeholder="......." style={styles.textInput} />

      <Pressable>
        <Text style={styles.Forgotpassword}>Forgot password?</Text>
      </Pressable>

      <Pressable
        onPress={() => router.replace("/")}
        style={styles.button}
      >
        <Text>LOGIN</Text>
      </Pressable>
      <Text style={{ textAlign: "center", color: "#BDBDBD" }}>
        Don't have an account?
      </Text>
      <Pressable onPress={() => router.push("/auth/signup")}>
        <Text style={{ color: "#f54542", textAlign: "center" }}> Sign up </Text>
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
    justifyContent: "center",
  },

  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    textAlign: "center",
    marginTop: -60,
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 5,
    maxWidth: 340,
    marginBottom: 30,
  },

  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#2e2b2b",
    borderRadius: 15,
    paddingHorizontal: 8,
    color: "#BDBDBD",
    borderColor: "#f54542",
    marginBottom: 10,
  },

  inputlabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "left",
  },

  Forgotpassword: {
    color: "#f54542",
    textAlign: "right",
  },

  button: {
    width: "100%",
    backgroundColor: "#f54542",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
