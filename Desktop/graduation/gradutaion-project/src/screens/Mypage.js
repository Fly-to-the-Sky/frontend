import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Dimensions, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Height = Dimensions.get("window").height;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 1;
`;

const StyledLogoName = styled.Image`
  align-self: start;
  margin-top: 50px;
  width: 160px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 100px;
  /* margin-left: 20px; */
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const TextContainer = styled.View`
  margin-top: 80px;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 77px;
  margin-right: 80px;
`;
const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 92%;
  margin: 10px;
  border-radius: 10px;
  background-color: #b2393e;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #b2393e;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
`;

const Mypage = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <Container>
        <CategoryContainer>
          <StyledLogoName
            source={require("../../assets/images/cha1.png")}
          ></StyledLogoName>
          <TextContainer>
            <Text
              style={{
                color: "#858585",
                fontWeight: "700",
                marginTop: 6,
                marginBottom: 40,
                fontSize: 25,
              }}
            >
              김슈니
            </Text>

            <Text
              style={{
                color: "#858585",
                fontWeight: "700",
                marginTop: 6,
                marginBottom: 40,
                fontSize: 25,
              }}
            >
              rlatbsl
            </Text>
          </TextContainer>
        </CategoryContainer>
        <StyledButton
          style={{ backgroundColor: "#ffffff" }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <ButtonText style={{ color: "#B2393E" }}>탈퇴하기</ButtonText>
        </StyledButton>

        <StyledButton
          style={{ backgroundColor: "#ffffff" }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <ButtonText style={{ color: "#B2393E" }}>탈퇴하기</ButtonText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            navigation.navigate("Categories");
          }}
        >
          <ButtonText>개발자에게 문의</ButtonText>
        </StyledButton>
      </Container>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "#d8bfa6",
  },
});

export default Mypage;
