import { colors } from "@/constants/colors";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HistoryCard from "../screens/home/HistoryCard";
import OrderCard from "../screens/home/OrderCard";

export default function Account() {
  const [activeTab, setActiveTab] = useState("Orders");

  return (
    <View style={styles.container}>
      <View style={styles.row}></View>
      <View style={styles.namerow}>
        <View style={styles.nameicon}>
          <Text style={styles.nameicontext}>A</Text>
        </View>

        <View>
          <Text style={styles.name}>Sodiq ibrahim</Text>
          <Text style={styles.email}>customer@8xpress.ng</Text>
        </View>
      </View>

      <View style={styles.row}>
        <OrderCard amount={"5"} title={"Total Orders"} />
        <OrderCard amount={"5"} title={"Completed"} />
        <OrderCard amount={"5"} title={"Pending"} />
      </View>

      <View style={styles.tabRow}>
        <Pressable
          style={[styles.tabButton, activeTab === "Orders" && styles.activeTab]}
          onPress={() => setActiveTab("Orders")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Orders" && styles.activeTabText,
            ]}
          >
            Orders
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            activeTab === "Profile" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Profile")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Profile" && styles.activeTabText,
            ]}
          >
            Profile
          </Text>
        </Pressable>
      </View>

      {activeTab === "Orders" ? (
        <HistoryCard
          itemtag="8XP-1001"
          status="preparing"
          date="9/22/2026"
          item="Party Jollof Rice ×2"
          delivarytype="Pickup"
          price="₦6,600"
        />
      ) : (
        <View style={styles.profilecard}>
          <View style={styles.profilerow}>
            <Text style={styles.profiletitle}>Name</Text>
            <Text style={styles.profileitem}>Sodiq ibrahim</Text>
          </View>

          <View style={styles.profilerow}>
            <Text style={styles.profiletitle}>Email</Text>
            <Text style={styles.profileitem}>customer@8xpress.ng</Text>
          </View>

          <View style={styles.profilerow}>
            <Text style={styles.profiletitle}>Phone</Text>
            <Text style={styles.profileitem}>08087654321</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  namerow: {
    flexDirection: "row",
    gap: 10,
  },
  nameicon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  nameicontext: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.white,
  },
  name: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 20,
  },
  email: {
    color: colors.gray,
    fontWeight: "light",
    fontSize: 12,
  },

  profilecard: {
    paddingBottom: 20,
    paddingHorizontal: 14,
    backgroundColor: "#262626",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
  },
  profilerow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomColor: colors.black,
  },
  profiletitle: {
    color: colors.gray,
    fontSize: 14,
  },
  profileitem: {
    color: colors.white,
    fontSize: 14,
  },
  tabRow: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 10,
    padding: 4,
    marginTop: 25,
    marginBottom: 15,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: colors.red,
  },

  tabText: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: "600",
  },

  activeTabText: {
    color: colors.white,
  },
});
