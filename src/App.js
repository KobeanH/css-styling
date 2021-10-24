import { CssModiles } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/Styled.Jsx";
import { StyledComponents } from "./components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModiles />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
