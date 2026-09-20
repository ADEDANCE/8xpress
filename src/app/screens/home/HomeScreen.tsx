import { colors } from "@/constants/colors";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AdvertCard from "./AdvertCard";
import HowItWorksCard from "./HowItWorksCard";
import PopularCard from "./PopularCard";
import ReviewCard from "./ReviewCard";

const Homescreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* <Image
             style={styles.image}
             resizeMode="contain"
             source={require("@/assets/images/logo.png")}
           /> */}

      <ImageBackground
        source={require("@/assets/images/jollof-chicken.jpg")}
        style={styles.hero}
        resizeMode="cover"
      >
        <Text style={styles.smallText}>CRAVING</Text>

        <Text style={styles.title}>PARTY JOLLOF?</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ORDER NOW</Text>
        </Pressable>
      </ImageBackground>

      {/*  */}
      <View style={styles.semicontainer}>
        <Text style={styles.subtitle}>WHAT ARE YOU CRAVING?</Text>

        {/* first row */}
        <View style={styles.cardrow}>
          <Pressable style={styles.card}>
            <ImageBackground
              source={require("@/assets/images/jollof-chicken.jpg")}
              style={styles.cardimage}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
              <Text style={styles.cardtitle}>Party Jollof</Text>
              <Text style={styles.cardsubtitle}>4 varieties</Text>
            </ImageBackground>
          </Pressable>

          <Pressable style={styles.card}>
            <ImageBackground
              source={require("@/assets/images/shawarma.jpg")}
              style={styles.cardimage}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
              <Text style={styles.cardtitle}>Shawarma</Text>
              <Text style={[styles.cardsubtitle, { color: colors.red }]}>
                4 options
              </Text>
            </ImageBackground>
          </Pressable>
        </View>

        {/* second row */}
        <View style={styles.cardrow}>
          <Pressable style={styles.card}>
            <ImageBackground
              source={require("@/assets/images/addon.jpg")}
              style={styles.cardimage}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
              <Text style={styles.cardtitle}>Add-ons</Text>
              <Text style={styles.cardsubtitle}>Chicken, beef & more</Text>
            </ImageBackground>
          </Pressable>

          <Pressable style={styles.card}>
            <ImageBackground
              source={require("@/assets/images/Drinks.jpg")}
              style={styles.cardimage}
              resizeMode="cover"
            >
              <View style={styles.overlay} />
              <Text style={styles.cardtitle}>Drinks</Text>
              <Text style={[styles.cardsubtitle, { color: colors.red }]}>
                cold beverages
              </Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>

      {/* third section */}
      <View style={[styles.semicontainer]}>
        {/* row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.subtitle}>POPULAR?</Text>

          <Pressable>
            <Text style={{ color: colors.yellow }}>See all</Text>
          </Pressable>
        </View>

        {/* cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PopularCard
            image={require("@/assets/images/jollofrice1.jpg")}
            name="Party Jollof"
            price="From ₦1,500"
          />

          <PopularCard
            image={require("@/assets/images/jollofrice2.jpg")}
            name="Jollof Rice + Chicken"
            price="From ₦2,300"
          />

          <PopularCard
            image={require("@/assets/images/shawarma4.jpg")}
            name="Regular Shawarma"
            price="From ₦1,200"
          />

          <PopularCard
            image={require("@/assets/images/shawarma2.jpg")}
            name="Chicken Shawarma"
            price="From ₦1,500"
          />

          <PopularCard
            image={require("@/assets/images/shawarma3.jpg")}
            name="Special Shawarma"
            price="From ₦2,000"
          />
        </ScrollView>
      </View>

      {/* fourth section */}
      <View style={[styles.semicontainer]}>
        <Text style={styles.subtitle}>HOW IT WORKS</Text>

        <HowItWorksCard
          step="01"
          title="Browse & Customize"
          description="Pick your meal, choose your size and extras."
        />

        <HowItWorksCard
          step="02"
          title="Pickup or Delivery"
          description="Come get it or have it brought to you."
        />

        <HowItWorksCard
          step="03"
          title="Pay & Enjoy"
          description="Secure payment. Hot food, right on time."
        />
      </View>

      {/* fourth section */}
      <View style={[styles.semicontainer]}>
        <Text style={styles.subtitle}>THE 8XPRESS DIFFERENCE</Text>

        <View style={styles.advertRow}>
          <AdvertCard
            icon="flame-outline"
            title="Firewood Flavor"
            description="Smoky authentic party jollof"
          />

          <AdvertCard
            icon="flash-outline"
            title="Express Fast"
            description="Ready in minutes, always hot"
          />
        </View>

        <View style={styles.advertRow}>
          <AdvertCard
            icon="leaf-outline"
            title="Fresh Daily"
            description="Premium ingredients sourced daily"
          />

          <AdvertCard
            icon="restaurant-outline"
            title="Nigerian Soul"
            description="Made with love and authenticity"
          />
        </View>
      </View>

      {/* REVIEWS section */}

      <View style={[styles.semicontainer]}>
        <Text style={styles.subtitle}>REVIEWS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ReviewCard
            icon="star"
            comment={`"Best party jollof in Abeokuta, hands down!"`}
            name="— Chioma A."
          />
          <ReviewCard
            icon="star"
            comment={`"Special shawarma is absolutely loaded. Worth every naira!"`}
            name="— Femi O."
          />
          <ReviewCard
            icon="star"
            comment={`"Ordered family pack for our department. Everyone loved it!"`}
            name="— Blessing I."
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  HowItWorksCard: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#262626",
    // height:
  },

  semicontainer: {
    // paddingHorizontal: 24,
    paddingTop: 20,
  },

  image: {
    width: 80,
    height: 80,
    alignSelf: "flex-start",
  },

  hero: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  card: {
    flex: 1,
    height: 150,
  },

  cardrow: {
    flexDirection: "row",
    gap: 12,
  },

  cardimage: {
    marginTop: 15,
    height: 150,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 15,
    overflow: "hidden",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  smallText: {
    fontWeight: "bold",
    fontSize: 30,
    color: colors.white,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: colors.yellow,
  },

  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    color: colors.white,
  },

  advertRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  cardtitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    color: colors.white,
  },

  cardsubtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.yellow,
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  button: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#f54542",
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: "bold",
    color: colors.white,
  },
});
