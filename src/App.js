import { useState } from "react";
import { createPortal } from "react-dom";
import LinkFrame from "./components/LinkFrame";

export default function App() {
  return (
    <IFrame>
      <MyComponent />
    </IFrame>
  );
}

function IFrame({ children }) {
  const [ref, setRef] = useState();
  const container = ref?.contentDocument?.body;

  return (
    <iframe className="iframe" title="iframe" ref={setRef} name="targetIframe">
      {container && createPortal(children, container)}
    </iframe>
  );
}

function MyComponent() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <a href="http://localhost:8080/index.html?profile=Responsive" target="_self">ga naar mendix app</a>
    </>
  );
}
