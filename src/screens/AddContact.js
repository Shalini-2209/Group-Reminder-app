import React, { useState } from "react";
import { View } from "react-native";
import database from "../storage/firebase";
import { getUser } from "../services/getUser";
import { ref, onValue, set } from "firebase/database";
import { TextInput, Button } from "react-native-paper";

const AddContact = () => {
  const [mail, setMail] = useState("");

  const addToContacts = async () => {
    let data = mail.split("@");
    const contactId = data[0];

    const currentUser = await getUser();

    onValue(
      ref(database, "/users/" + contactId),
      (snapshot) => {
        if (snapshot.exists()) {
          const roomId = Date.now();

          set(ref(database, "contacts/" + currentUser + "/" + roomId), {
            email: mail,
          })
            .then(() => {
              setMail("");
              alert("Contact added!");
            })
            .catch((error) => {
              console.log({ error });
            });
        } else console.log("User Not found");
      },
      {
        onlyOnce: true,
      }
    );
  };

  return (
    <View>
      <TextInput
        label="Email"
        value={mail}
        onChangeText={(text) => setMail(text)}
      />

      <Button mode="contained" onPress={addToContacts}>
        Add to contacts
      </Button>
    </View>
  );
};

export default AddContact;
