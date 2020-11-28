import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1``;

const About = styled.h3`
  max-width: 600px;
  line-height: 1.5;
`;

export default function AboutPage() {
  return (
    <Root>
      <Title>關於部落格的二三事</Title>
      <About>
        這是 Mentor program 程式導師計畫第4期第22週的作業 這週我們用 React
        將課程裡做到一半的部落格功能補完。
      </About>
    </Root>
  );
}
