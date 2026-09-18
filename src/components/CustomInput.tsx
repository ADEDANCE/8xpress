import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type CustomInputProps = TextInputProps & {
  label: string;
};

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = props.secureTextEntry;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#BDBDBD"
          secureTextEntry={isPassword ? !showPassword : false}
          {...props}
        />

        {isPassword && (
          <Pressable
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#BDBDBD"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },

  inputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#2e2b2b",
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    color: "#FFFFFF",
  },

  eyeButton: {
    paddingHorizontal: 12,
  },
});