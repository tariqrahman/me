import React from 'react';
import { ReactTerminal } from 'react-terminal';

function App() {
  const commands = {
    whoami: "What's up, I'm Tariq!",
    cd: (directory) => `Changed path to ${directory}, but not really`,
    link: () => (
      <a href='https://example.com' target='_blank' rel='noopener noreferrer'>
        Click me!
      </a>
    ),
  };

  return (
    <>
      <div className='flex flex-auto font-primary text-2xl font-extrabold  justify-center items-center mt-40'>
        <span>tariq-rahman.com</span>
      </div>
      <div className='flex flex-auto h-[45rem] w-screen justify-center mt-16'>
        <div className='border-2 rounded border-black w-7/12 h-1/2 justify-center'>
          <ReactTerminal
            className='terminal'
            commands={commands}
            showControlBar={true}
            showControlButtons={true}
            themes={{
              myCustomTheme: {
                themeBGColor: "#272B36",
                themeToolbarColor: "#DBDBDB",
                themeColor: "#0BDA51",
                themePromptColor: "#0BDA51"
              }
            }}
            theme="myCustomTheme"
          />
        </div>
      </div>
    </>
  );
}

export default App;
