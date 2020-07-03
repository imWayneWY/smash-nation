import { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FirebaseContext } from "../firebaseConf";
import {withRouter} from "react-router-dom";
const root = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 500px;
  justify-content: center;
  align-items: center;
`;

const loginBtn = css`
  border-radius: 5px;
  background: #fff;
  border: 2px solid #ff8053;
  width: 40vw;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const icon = css`
  width: 32px;
  height: 32px;
  margin: 0 10px;
`;

const GoogleLogin = ({ firebase, navToHome }) => {
  let provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // let token = result.credential.accessToken;
        navToHome();
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMsg = error.message;

        console.log(errorCode);
        console.log(errorMsg);
      });
  };
  return (
    <div css={loginBtn} onClick={handleLogin}>
      Sign in with Google
      <svg
        css={icon}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1170"
        width="200"
        height="200"
      >
        <path
          d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512"
          fill="#FBBC05"
          p-id="1171"
        ></path>
        <path
          d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88"
          fill="#EA4335"
          p-id="1172"
        ></path>
        <path
          d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776"
          fill="#34A853"
          p-id="1173"
        ></path>
        <path
          d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667"
          fill="#4285F4"
          p-id="1174"
        ></path>
      </svg>
    </div>
  );
};
const emailLogin = css`
  display: flex;
  width: 40vw;
  align-items: center;
  flex-direction: column;
`;

const input = css`
  border-radius: 5px;
  border: 2px solid #ff8053;
  width: 40vw;
  height: 40px;
  margin-bottom: 5px;
  line-height: 40px;
  font-size: 28px;
`;

const label = css`
  width: 100%;
`;

const btn = css`
  width: 16vw;
  height: 40px;
  background: #ff8053;
  border-radius: 5px;
  border: 0 solid #fff;
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
`;

const EmailLogin = ({firebase, navToHome}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(result => {
      navToHome();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
  return (
    <div css={emailLogin}>
      <p>Sign in with Email and Password</p>
      <label css={label}>Email</label>
      <input css={input} onChange={e => setEmail(e.target.value)}></input>
      <label css={label}>Password</label>
      <input css={input} onChange={e => setPassword(e.target.value)} type="Password"></input>
      <button css={btn} onClick={handleEmailLogin}>Sign in</button>
    </div>
  )
}

const EmailRegistor = () => (
  <div css={emailLogin}>Email sign up will open soon.</div>
);

const LoginPage = ({ firebase, history }) => {
  const navToHome = () => {
    history.push("/");
  }
  return (
    <div css={root}>
      <GoogleLogin firebase={firebase} navToHome={navToHome} />
      <p>Or</p>
      <EmailLogin firebase={firebase} navToHome={navToHome} />
      <hr
        css={css`
          width: 80vw;
          margin: 40px 0;
        `}
      />
      <EmailRegistor />
    </div>
  );
};

const Login = ({history}) => (
  <FirebaseContext.Consumer>
    {(firebase) => <LoginPage firebase={firebase} history={history} />}
  </FirebaseContext.Consumer>
);

export default withRouter(Login);
