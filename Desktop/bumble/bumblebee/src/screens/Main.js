import React, { useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  image,
  Dimensions,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { REACT_APP_GOOGLE_MAP_API_KEY } from "react-native-dotenv";
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  height: ${Height}px;
`;

const StyledView = styled.View`
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0);
`;
const StyledInput = styled.TextInput`
  margin-top: 10% !important;
  /* color: #000000; */
  width: 98%;
  height: 43px;
  margin: 3px;
  padding: 2px 2px 2px 10px;
  /* background-color: raba(0, 0, 0, 1); */
  border: #d9d9d9;
  border-radius: 8px;
`;

const StyledButton = styled.TouchableOpacity`
  margin: 3px;
  width: 98%;
  height: 45px;
  border-radius: 10px;
  background-color: #dfab02;
  border: 1px solid #dfab02;
`;

const ButtonText = styled.Text`
  color: #000000;
  align-self: center;
  justify-content: center;
  margin-top: 15px;
  font-weight: 800;
  font-size: 18px;
`;

function Main({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <Container>
      <StyledView>
        <StyledInput placeholder="장소를 검색해보세요!" />
        {/* <GooglePlacesAutocomplete
          minLength={2}
          placeholder="장소를 검색해보세요!"
          query={{
            key: "AIzaSyAM55rqSfcujPDfoH-QXUDh0zQF8_wB01M",
            language: "ko",
            components: "country:kr",
          }}
          keyboardShouldPersistTaps={"handled"}
          fetchDetails={true}
          onPress={(data, details) => {
            console.log(data, details);
          }}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          keepResultsAfterBlur={true}
          enablePoweredByContainer={false}
          styles={styles.search}
        /> */}
        <StyledButton onPress={() => navigation.navigate("Main")}>
          <ButtonText>여행지 검색</ButtonText>
        </StyledButton>
      </StyledView>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.281882019,
          longitude: 127.01439446,
          latitudeDelta: 0.0062,
          longitudeDelta: 0.0041,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.281882019,
            longitude: 127.014999,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.283892019,
            longitude: 127.01439446,
          }}
          pinColor="#red"
          // title="위험물체"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.280382019,
            longitude: 127.013189,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.279302019,
            longitude: 127.013889,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284590019,
            longitude: 127.013789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284380019,
            longitude: 127.015689,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.284590019,
            longitude: 127.012789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />

        <Marker
          coordinate={{
            latitude: 37.280580019,
            longitude: 127.015789,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="편의시설"
          image={require("../../assets/safe.png")}
        />
        <Marker
          coordinate={{
            latitude: 37.279102019,
            longitude: 127.015889,
          }}
          pinColor="#2D63E2"
          // title="하이"
          description="위험물체"
          image={require("../../assets/danger.png")}
        />
        {/* <StyledInput
          type="text"
          placeholder="관광지"
          // onChangeText={handleEmailInput}
        ></StyledInput> */}
      </MapView>
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Main;
