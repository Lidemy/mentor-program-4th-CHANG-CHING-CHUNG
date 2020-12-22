import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { handleChange, handleSubmit } from "./functions/handleFunctions";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
        margin-bottom: 0px;
    box-sizing: border-box;
  }

  @media (max-width: 800px) {
  .form-container h1 {
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  .form-container h1 {
    font-size: 28px;
  }

  .form-container form + div {
    justify-content: center;
  }

  .form-container .form-group {
    width: 100%;
    margin-bottom: 30px;
  }

  .form-container .form-group:nth-child(4) {
    margin-bottom: 40px;
  }

  .btn {
    margin-top: 15px;
  }
}
`;

const Container = styled.div`
  background-color: #f3f3f3;
  padding: 121px 0 0 0;
`;

const FormContainer = styled.div`
  max-width: 645px;
  height: 1085px;
  margin: auto;
  margin-bottom: auto;
  background-color: #ffffff;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  padding: 3rem 40px 0 40px;
  display: flex;
  flex-direction: column;
  border-top: 6px solid #fad312;
  margin-bottom: 66px;
`;

const Footer = styled.footer`
  color: #999999;
  text-align: center;
  height: 60px;
  background-color: #000000;
  font-family: "Microsoft JhengHei";
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -1.8px;
  color: #000000;
  margin-bottom: 35px;
`;

const Info = styled.p`
  margin-bottom: 8px;
`;

const Warning = styled.span`
  margin-bottom: 55px;
  margin-top: 14px;
  font-size: 16px;
  color: #e74149;
`;

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 65px;
  margin-bottom: 49px;
`;

const Lable = styled.label`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Start = styled.span`
  font-size: 20px;
  color: #e74149;
`;

const Input = styled.input`
  border: solid 1px #d0d0d0;
  font-size: 16px;
  height: 23px;

  &::placeholder {
    color: #afafaf;
    font-family: "Microsoft JhengHei";
  }
`;

const RadioWrapper = styled.div`
  display: flex;
`;

const InputRadio = styled.input`
  background-color: #bababa;
  display: inline;
  border: solid 1px #d0d0d0;
  font-size: 16px;
  height: 23px;
`;

const LabelForRadio = styled.label`
  margin-left: 8px;
  padding-top: 2px;
  display: inline;
`;

const Suggestion = styled(Start)`
  color: #000000;
  font-size: 14px;
  display: block;
  margin-top: 6px;
`;

const SubmitBtn = styled.input`
  font-size: 15px;
  color: #fff;
  padding: 10px 31px;
  background-color: #4caf50;
  border-radius: 3px;
  margin-bottom: 21px;
  display: inline-block;
  height: 40px;
  width: 92px;
  border: none;
  cursor: pointer;
`;

const ImportantInfo = styled(Info)`
  margin-bottom: 8px;
`;

const ErrInfo = styled.div.attrs((props) => ({
  className: "error",
}))`
  color: red;
`;

function Form() {
  const [state, setState] = useState({
    nickName: "",
    email: "",
    phone: "",
    type: "",
    how: "",
    others: "",
  });

  const [error, setErr] = useState({
    errorMessage: {
      wrongEmail: "輸入請符合電子郵件格式!",
      wrongPhone: "請輸入10位數手機號碼!",
      wrongEmpty: "必填項目不得為空!",
    },
    isNicknameEmpty: false,
    isEmailEmpty: false,
    isEmailError: false,
    isPhoneEmpty: false,
    isPhoneError: false,
    isTypeEmpty: false,
    isHowEmpty: false,
  });

  const {
    isNicknameEmpty,
    isEmailEmpty,
    isEmailError,
    isPhoneEmpty,
    isPhoneError,
    isTypeEmpty,
    isHowEmpty,
    errorMessage,
  } = error;

  return (
    <Container>
      <GlobalStyle />
      <FormContainer>
        <Title>新拖延運動報名表單</Title>
        <Info>活動日期：2020/12/10 ~ 2020/12/11</Info>
        <Info>活動地點：台北市大安區新生南路二段1號</Info>
        <Warning>* 必填</Warning>
        <FormBody onSubmit={(e) => handleSubmit(e, state, setErr)}>
          <FormGroup>
            <Lable htmlFor="name">
              暱稱
              <Start>*</Start>
            </Lable>
            <Input
              id="name"
              className="name"
              type="text"
              placeholder="您的回答"
              onChange={(e) => handleChange(e, setState)}
              value={state.nickName}
            ></Input>
            {isNicknameEmpty ? (
              <ErrInfo>{errorMessage.wrongEmpty}</ErrInfo>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Lable htmlFor="email">
              電子郵件
              <Start>*</Start>
            </Lable>
            <Input
              id="email"
              className="email"
              type="email"
              placeholder="您的電子郵件"
              onChange={(e) => handleChange(e, setState)}
              value={state.email}
            ></Input>
            {isEmailEmpty ? (
              <ErrInfo>{errorMessage.wrongEmpty}</ErrInfo>
            ) : isEmailError ? (
              <ErrInfo>{errorMessage.wrongEmail}</ErrInfo>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Lable htmlFor="phone">
              手機號碼
              <Start>*</Start>
            </Lable>
            <Input
              id="phone"
              className="phone"
              type="text"
              placeholder="您的手機號碼"
              onChange={(e) => handleChange(e, setState)}
              value={state.phone}
            ></Input>
            {isPhoneEmpty ? (
              <ErrInfo>{errorMessage.wrongEmpty}</ErrInfo>
            ) : isPhoneError ? (
              <ErrInfo>{errorMessage.wrongPhone}</ErrInfo>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Lable htmlFor="type">
              報名類型
              <Start>*</Start>
            </Lable>
            <div>
              <RadioWrapper>
                <InputRadio
                  id="type1"
                  className="type1 radio"
                  type="radio"
                  name="type"
                  value="躺在床上用想像力實作"
                  onChange={(e) => handleChange(e, setState)}
                />
                <LabelForRadio htmlFor="type1">
                  躺在床上用想像力實作
                </LabelForRadio>
              </RadioWrapper>
              <RadioWrapper>
                <InputRadio
                  id="type2"
                  className="type2 radio"
                  type="radio"
                  name="type"
                  value=" 趴在地上滑手機找現成的"
                  onChange={(e) => handleChange(e, setState)}
                />
                <LabelForRadio htmlFor="type2">
                  趴在地上滑手機找現成的
                </LabelForRadio>
              </RadioWrapper>
              {isTypeEmpty ? (
                <ErrInfo>{errorMessage.wrongEmpty}</ErrInfo>
              ) : null}
            </div>
          </FormGroup>
          <FormGroup>
            <Lable htmlFor="how">
              怎麼知道這個活動的？
              <Start>*</Start>
            </Lable>
            <Input
              id="how"
              className="how"
              type="text"
              placeholder="您的回答"
              onChange={(e) => handleChange(e, setState)}
              value={state.how}
            ></Input>
            {isHowEmpty ? <ErrInfo>{errorMessage.wrongEmpty}</ErrInfo> : null}
          </FormGroup>
          <FormGroup>
            <Lable htmlFor="others">
              其他
              <Suggestion>對活動的一些建議</Suggestion>
            </Lable>
            <Input
              id="others"
              className="others"
              type="text"
              placeholder="您的回答"
              onChange={(e) => handleChange(e, setState)}
              value={state.others}
            ></Input>
          </FormGroup>
          <div>
            <SubmitBtn id="submit" className="btn" type="submit" value="提交" />
            <ImportantInfo>請勿透過表單送出您的密碼。</ImportantInfo>
          </div>
        </FormBody>
      </FormContainer>
      <Footer>© 2020 © Copyright. All rights Reserved.</Footer>
    </Container>
  );
}

ReactDOM.render(<Form />, document.getElementById("root"));
