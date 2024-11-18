// import { useEffect } from "react";
// import { useUser } from "../features/authentication/useUser";
// import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";
// import { styled } from "styled-components";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// function ProtectedRoute({ children }) {
//   //1 load user
//   const { isLoading, user, error, isAuthenticated, fetchStatus } = useUser();
//   const navigate = useNavigate();
//   // useEffect(
//   //   function () {
//   //     if (!isLoading && !isAuthenticated) navigate("/login");
//   //   },
//   //   [isAuthenticated]
//   // );

//   useEffect(
//     function () {
//       if (!isLoading && !isAuthenticated && fetchStatus !== "fetching") {
//         navigate("/login");
//       }
//     },
//     [isLoading, isAuthenticated, fetchStatus, navigate]
//   );

//   if (isLoading)
//     return (
//       <FullPage>
//         <Spinner />
//       </FullPage>
//     );
//   // 2 navigate if not authorized
//   // 3 loading show spinner
//   if (isAuthenticated) return children;
// }

// export default ProtectedRoute;

// Below is solution by Aliaksandr on Udemy

import styled from "styled-components";

import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isFetching, isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) navigate("/login");
  }, [isAuthenticated, isLoading, navigate, isFetching]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
