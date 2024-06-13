import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import { UserContextProvider } from "../src/store/UserContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <main>
        <Login />
        {/* <Signup /> */}
      </main>
    </UserContextProvider>
  );
}

export default App;
