import CustomInput from "@/components/CustomInput";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const router = useRouter();

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
      />
      <Text style={styles.title}>JOIN US</Text>
      <Text style={styles.subtitle}>Create your account</Text>
      <CustomInput
        label="Email Full Name"
        placeholder="Abdullah Sodiq"
        keyboardType="name-phone-pad"
        autoCapitalize="words"
      />

      <CustomInput
        label="Phone Number"
        placeholder="07013184487"
        keyboardType="phone-pad"
      />

      <CustomInput
        label="Email Address"
        placeholder="you@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />

      <Pressable>
        <Text style={styles.Forgotpassword}>Forgot password?</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text>LOGIN</Text>
      </Pressable>
      <Text style={{ textAlign: "center", color: "#BDBDBD" }}>
        Don't have an account?
      </Text>
      <Pressable onPress={() => router.push("/auth/login")}>
        <Text style={{ color: "#f54542", textAlign: "center" }}> Login </Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

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
