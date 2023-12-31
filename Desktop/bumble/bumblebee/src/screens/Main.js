import React, { useState } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Dimensions,
  Modal,
  View,
  Pressable,
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
  width: 70%;
  height: 45px;
  border-radius: 10px;
  background-color: #dfab02;
  border: 1px solid #dfab02;
`;

const StyledButton2 = styled.TouchableOpacity`
  margin: 3px;
  width: 27%;
  height: 45px;
  border-radius: 10px;
  background-color: #285fb4;
  border: 1px solid #285fb4;
  flex-direction: end;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const ButtonText = styled.Text`
  color: #000000;
  align-self: center;
  justify-content: center;
  margin-top: 13px;
  font-weight: 800;
  font-size: 18px;
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
const Main = ({ navigation }) => {
  //State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <Container>
        <StyledView>
          <StyledInput placeholder="장소를 검색해보세요!" />
          <ButtonContainer>
            <StyledButton
              onPress={() => {
                setModalVisible(true), Keyboard.dismiss();
              }}
            >
              <ButtonText>여행지 검색</ButtonText>
            </StyledButton>
            <StyledButton2
              onPress={() => {
                setModal2Visible(true), Keyboard.dismiss();
              }}
            >
              <ButtonText style={{ color: "#ffffff" }}>추천 관광지</ButtonText>
            </StyledButton2>
          </ButtonContainer>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
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
                  {/* <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable> */}
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
          </Pressable>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setModalVisible(!modal2Visible)}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal2Visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal2Visible(!modal2Visible);
              }}
            >
              <View style={styles.centeredView}>
                <StyledModal>
                  {/* <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable> */}
                  <StyledModalImg
                    source={require("../../assets/modal-img3.png")}
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
          </Pressable>
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
          // region={this.state.region}
          // onRegionChange={this.onRegionChange}
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
    </Pressable>
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

export default Main;
