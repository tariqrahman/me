import React, { useState } from "react";
import { ReactTerminal } from "react-terminal";

const Home = (props) => {
  const [recentCommands, setRecentCommands] = useState([]);
  const commands = {
    whoami: "what's up, i'm tariq!",
    cd: (directory) => `changed path to ${directory}, but not really`,
    link: () => (
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Click me!
      </a>
    ),
    help: () => {
      return (
        <>
        <div>
          hello
        </div>
        hello
        </>
      );
    }
  };
  return (
    <>
      <div className="flex flex-auto font-primary text-2xl font-extrabold justify-center items-center pt-40">
        <span>tariq-rahman.com</span>
      </div>
      <div className="flex flex-auto h-[30rem] w-screen justify-center pt-16">
        <div className="border-2 rounded border-black w-1/2 h-full justify-center">
          <ReactTerminal
            className="terminal"
            commands={commands}
            showControlBar={true}
            showControlButtons={true}
            themes={{
              myCustomTheme: {
                themeBGColor: "#272B36",
                themeToolbarColor: "#DBDBDB",
                themeColor: "#0BDA51",
                themePromptColor: "#0BDA51",
              },
            }}
            theme="myCustomTheme"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
