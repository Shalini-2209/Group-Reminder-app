import React, { useEffect, useState } from "react";
import { getUser } from "../services/getUser";
import { ref, onValue } from "firebase/database";
import database from "../storage/firebase";

const Contacts = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const userId = await getUser();

      onValue(ref(database, "/contacts/" + userId), (snapshot) => {
        setList(snapshot.val());
        console.log(snapshot.val());
      });
    };

    fetchContacts();
  }, []);

  return (
    <View>
      {Object.keys(list).map((key) => {
        return <Text key={key}>{list[key].email}</Text>;
      })}
    </View>
  );
};

export default Contacts;
