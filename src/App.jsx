import React from 'react';
import { ReactTerminal } from 'react-terminal';

function App(props) {
  // Define commands here
  const commands = {
    whoami: "What's up, I'm Tariq!",
    cd: (directory) => `Changed path to ${directory}`,
    link: () => (
      <a href='https://example.com' target='_blank' rel='noopener noreferrer'>
        Click me!
      </a>
    ),
  };

  return (
    <>
      <body className='w-screen h-screen'>
        <div className='border-4 border-gray-400 p-4 w-1/3  h-1/2 flex items-center justify-center'>
          <div className='w-full h-full border-4'>
            <ReactTerminal
              commands={commands}
              theme='dracula'
              showControlBar={false}
              showControlButtons={false}
            />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
