import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import database from "../storage/firebase";
import { ref, set } from "firebase/database";
import { TextInput, Button, Title } from "react-native-paper";

const Register = () => {
  const initalState = {
    mail: "",
    pwd: "",
  };

  const [form, setForm] = useState(initalState);
  const [cpass, setCpass] = useState("");

  const handleRegister = () => {
    if (form.mail !== "" && form.pwd !== "") {
      if (form.pwd === cpass) {
        let data = form.mail.split("@");
        let userId = data[0];

        set(ref(database, "users/" + userId), {
          email: form.mail,
          pwd: form.pwd,
        })
          .then(() => {
            setForm(initalState);
            setCpass("");
            alert("Record inserted!");
          })
          .catch((error) => {
            console.log({ error });
          });
      }
    } else console.error("Found null values!");
  };

  return (
    <View style={styles.container}>
      <Title style={{ margin: 5, textTransform: "uppercase" }}>
        Register Form
      </Title>
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

      <TextInput
        label="Confirm password"
        value={cpass}
        style={styles.item}
        onChangeText={(text) => setCpass(text)}
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        style={{ marginTop: 3, padding: 3 }}
      >
        Register
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

export default Register;
