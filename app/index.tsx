import { Text, View, Button, TouchableOpacity, ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/panda-bear-welcome.jpg')} // Use require for local images
      style={{ flex: 1 }}
      imageStyle={{ opacity: 1 }} // Adjust opacity to ensure text readability
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 40,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
            Wild AI
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginVertical: 40,
            marginHorizontal: 50,
          }}
        >
          <Button title="Log In" color="white" />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            transform: [{ translateY: -50 }],
            marginHorizontal: 40,
          }}
        >
          <Text style={{ fontSize: 44, fontWeight: "bold", color: "white" }}>
            Discover Nature with AI
          </Text>
          <Text style={{ fontSize: 20, color: "white", marginTop: 20 }}>
            Explore the beauty of wildlife with AI and
            experience the wonders of nature like never before
          </Text>
          <View
            style={{
              marginTop: 20,
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => { }}
              style={{
                backgroundColor: "#6FB4EB",
                borderRadius: 50,
                padding: 15,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

