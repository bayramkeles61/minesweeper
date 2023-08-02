import { FC, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </Link>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Header>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>Hello World</p>
        <h2>Bayram KELES</h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

interface IHeaderProps {
  children: React.ReactNode;
}

const Header: FC<IHeaderProps> = ({ children }) => (
  <header className="App-header">
    <img src={reactLogo} alt="logo" className="App-logo" />
    {children}
  </header>
);

interface ILinkProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const Link: FC<ILinkProps> = ({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
);

Link.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default App;
