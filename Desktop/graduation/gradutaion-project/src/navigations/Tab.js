import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login, Main, Mypage } from "../screens";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator initialRouteName="홈" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="메인페이지"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 28, height: 28 }}
              source={
                focused
                  ? require("../../assets/images/tab-main-selected.png")
                  : require("../../assets/images/tab-main.png")
              }
            />
          ),
          tabBarActiveTintColor: "#064C72",
        }}
      />
      <Tab.Screen
        name="추천"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 28, height: 28 }}
              source={
                focused
                  ? require("../../assets/images/tab-recommend-selected.png")
                  : require("../../assets/images/tab-recommend.png")
              }
            />
          ),
          tabBarActiveTintColor: "#064C72",
        }}
      />

      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ resizeMode: "contain", width: 28, height: 28 }}
              source={
                focused
                  ? require("../../assets/images/tab-mypage-selected.png")
                  : require("../../assets/images/tab-mypage.png")
              }
            />
          ),
          tabBarActiveTintColor: "#064C72",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
