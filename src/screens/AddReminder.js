import React, { useState } from "react";
import { View } from "react-native";
import database from "../storage/firebase";
import { getUser } from "../services/getUser";
import { ref, onValue, set } from "firebase/database";
import { TextInput, Button } from "react-native-paper";

const AddReminder = () => {
  const [reminder, setReminder] = useState("");

  const addReminder = async () => {
    let data = mail.split("@");
    const contactId = data[0];

    const currentUser = await getUser();

    // onValue(
    //   ref(database, "/users/" + contactId),
    //   (snapshot) => {
    //     if (snapshot.exists()) {
    //       set(ref(database, "contacts/" + currentUser), {
    //         email: mail,
    //       })
    //         .then(() => {
    //           setMail("");
    //           alert("Reminder added!");
    //         })
    //         .catch((error) => {
    //           console.log({ error });
    //         });
    //     } else console.log("User Not found");
    //   },
    //   {
    //     onlyOnce: true,
    //   }
    // );
  };

  return (
    <View>
      <TextInput
        label="Email"
        value={reminder}
        onChangeText={(text) => setReminder(text)}
      />

      <Button mode="contained" onPress={addReminder}>
        Add Reminder
      </Button>
    </View>
  );
};

export default AddReminder;
