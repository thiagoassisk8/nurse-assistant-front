import logoImg from "../assets/logo.jpg";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      {/* <Navigation userCtx={props?.userCtx} /> */}
      <h1>Assistant Nurse</h1>
    </header>
  );
}
