import React, { useEffect, useState } from "react";
import { getUser } from "../services/getUser";
import { View, Text } from "react-native";
import { ref, onValue } from "firebase/database";
import database from "../storage/firebase";

const MyReminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchReminders = async () => {
      const userId = await getUser();

      onValue(ref(database, "/reminders/" + userId), (snapshot) => {
        setReminders(snapshot.val());
      });
    };

    fetchReminders();
  }, []);

  return (
    <View>
      {Object.keys(reminders).map((key) => {
        return <Text key={key}>{reminders[key].msg}</Text>;
      })}
    </View>
  );
};

export default MyReminders;
