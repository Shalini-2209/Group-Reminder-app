import React, { useEffect, useState } from "react";
import { getUser } from "../services/getUser";
import database from "../storage/firebase";
import { ref, onValue } from "firebase/database";

const Contacts = () => {
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

  
  return <></>;
};

export default Contacts;
