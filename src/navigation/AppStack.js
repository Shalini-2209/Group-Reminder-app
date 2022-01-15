import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddReminder from "../screens/AddReminder";
import AddContact from "../screens/AddContact";
import MyReminders from "../screens/MyReminders";

const Tab = createMaterialBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#6200ee" }}>
      <Tab.Screen
        name="MyReminders"
        component={MyReminders}
        options={{
          tabBarLabel: "MyReminders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddContact"
        component={AddContact}
        options={{
          tabBarLabel: "MyReminders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddReminder"
        component={AddReminder}
        options={{
          tabBarLabel: "MyReminders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
