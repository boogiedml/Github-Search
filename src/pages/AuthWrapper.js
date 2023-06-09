import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { isLoadng } = useAuth0();

  if (isLoadng) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="loading" />
      </Wrapper>
    );
  }
  // if (error) {
  //   return (
  //     <Wrapper>
  //       <h1>{error.message}</h1>
  //     </Wrapper>
  //   );
  // }

  return <>{children}</>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
