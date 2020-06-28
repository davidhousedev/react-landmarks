import React from "react";
import ReactDom from "react-dom";
import Main from "./renderProps/Main";

const App = () => {
  return (
    <>
      <Main
        render={({ labelledByTargetId }) => (
          <>
            <h2 id={labelledByTargetId}>Main section with no funny business</h2>
            <p>aria-labelledby is managed within the Main component.</p>
          </>
        )}
      />
      <Main
        render={({ labelledByTargetId }) => (
          <>
            <h2 id={labelledByTargetId}>Main section with no funny business</h2>
            <p>aria-labelledby is managed within the Main component.</p>
          </>
        )}
      />
      <Main
        as={P}
        render={({ labelledByTargetId }) => (
          <>
            <h2 id={labelledByTargetId}>Main section with no funny business</h2>
            <p>aria-labelledby is managed within the Main component.</p>
          </>
        )}
      />
    </>
  );
};

const P: React.FC = ({ children }) => <p>{children}</p>;

ReactDom.render(<App />, document.getElementById("app"));
