import React, { useState, useEffect } from "react";
import { View } from "react-native";
import database from "../storage/firebase";
import { getUser } from "../services/getUser";
import { ref, onValue, set } from "firebase/database";
import { TextInput, Button } from "react-native-paper";

const AddReminder = () => {
  const [reminder, setReminder] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const userId = await getUser();

      onValue(ref(database, "/contacts/" + userId), (snapshot) => {
        setList(snapshot.val());
      });
    };

    fetchContacts();
  }, []);

  const addReminder = async () => {
    let reminderId = Date.now();

    const currentUser = await getUser();

    set(ref(database, "reminders/" + currentUser + "/" + reminderId), {
      msg: reminder,
      owner: currentUser,
    });

    Object.keys(list).map((key) => {
      let data = list[key].email.split("@");
      const contactId = data[0];

      set(ref(database, "reminders/" + contactId + "/" + reminderId), {
        msg: reminder,
        owner: currentUser,
      });
    });

    setReminder("");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        label="Enter Reminder text"
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
