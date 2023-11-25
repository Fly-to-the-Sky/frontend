import React, { useState } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Modal from "react-native-modal";
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

// 여기부터 모달
const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 320px;
  height: 220px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const StyledModalButton = styled.TouchableOpacity`
  /* Modal Button들의 모달창 내의 높이를 균일하게 하기 위하여 flex를 줌 */
  flex: 1;
  width: 320px;
  justify-content: center;
`;

// 모달창 내에서 버튼으로 활용되지 않는 타이틀 부분은 View 만듬
const StyledModalGradeWrapper = styled.View`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const StyledModalGradeText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const StyledModalText = styled.Text`
  align-self: center;
  color: blue;
  font-size: 15px;
`;

const StyledModal = styled.View`
  /* margin: 20px; */
  width: 100%;
  height: 100%;
  background-color: "#ffffff";
  border-radius: 20px;
  padding: 2px;
  overflow: scroll;

  align-items: "center";
  /* shadow: "#000";
    shadow-offset: {
      width: 0,
      height: 2,} */
`;

const StyledModalImg = styled.Image`
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* overflow: scroll; */
`;
const Main2 = ({ navigation }) => {
  //State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("dismissed keyboard");
        Keyboard.dismiss();
      }}
    >
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
          <StyledButton onPress={() => setModalVisible(true)}>
            <ButtonText>여행지 검색</ButtonText>
          </StyledButton>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <StyledModal>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                <StyledModalImg
                  source={require("../../assets/modal-img2.png")}
                />
                {/* <Text style={styles.modalText}>장애물 안내</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>*/}
              </StyledModal>
            </View>
          </Modal>
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
        </MapView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    padding: 0,
    // backgroundColor: "red",
    overflow: "scroll",
  },

  modalView: {
    margin: 20,
    width: "300px",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 15,
    textStyle: "bold",
    textAlign: "center",
  },
});

export default Main2;
