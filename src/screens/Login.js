import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import database from "../storage/firebase";
import { ref, onValue } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, Title } from "react-native-paper";

const Login = () => {
  const initalState = {
    mail: "",
    pwd: "",
  };

  const [form, setForm] = useState(initalState);

  const storeUser = async (key, val) => {
    await AsyncStorage.setItem(key, val);
  };

  const handleLogin = () => {
    if (form.mail !== "" && form.pwd !== "") {
      let data = form.mail.split("@");
      let userId = data[0];

      onValue(
        ref(database, "/users/" + userId),
        (snapshot) => {
          if (snapshot.exists()) {
            if (
              snapshot.val().email === form.mail &&
              snapshot.val().pwd === form.pwd
            ) {
              storeUser("user", userId);
              alert("Logged in successfully!");
            } else console.log("User Not found");
          }
        },
        {
          onlyOnce: true,
        }
      );
    } else console.error("Found null values!");
  };

  return (
    <View style={styles.container}>
      <Title>Login </Title>
      <TextInput
        label="Email"
        value={form.mail}
        style={styles.item}
        onChangeText={(text) => setForm({ ...form, mail: text })}
      />

      <TextInput
        label="Password"
        value={form.pwd}
        style={styles.item}
        onChangeText={(text) => setForm({ ...form, pwd: text })}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        style={{ marginTop: 3, padding: 3 }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    margin: 2,
  },
});

export default Login;
