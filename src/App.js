import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

function App() {
  const { instance, accounts } = useMsal();

  const login = () => {
    instance.loginPopup({
      scopes: ["user.read"],
    }).catch((error) => console.error(error));
  };

  const logout = () => {
    instance.logoutPopup();
  };

  return (
    <div>
      <h1>React + Azure AD Authentication</h1>
      {accounts.length > 0 ? (
        <div>
          <p>Welcome, {accounts[0].username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default App;
