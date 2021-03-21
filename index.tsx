import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Amplify from "aws-amplify";

const {
  REACT_APP_COGNITO_IDENTITY_POOL_ID,
  REACT_APP_COGNITO_USER_POOL_CLIENT_ID,
  REACT_APP_COGNITO_USER_POOL_ID,

  REACT_APP_GRAPHQL_URL,
  REACT_APP_GRAPHQL_API_KEY,
} = process.env;

Amplify.configure({
  aws_project_region: "eu-central-1",

  aws_appsync_region: "eu-central-1", // Stack region
  aws_appsync_graphqlEndpoint: REACT_APP_GRAPHQL_URL,
  aws_appsync_authenticationType: "API_KEY", //Primary AWS AppSync authentication type
  aws_appsync_apiKey: REACT_APP_GRAPHQL_API_KEY, // AppSync API Key

  aws_cognito_region: "eu-central-1",
  aws_cognito_identity_pool_id: REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_user_pools_id: REACT_APP_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: REACT_APP_COGNITO_USER_POOL_CLIENT_ID,
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
