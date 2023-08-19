import React, { useState, useEffect } from "react";
import { ReactTerminal } from "react-terminal";
import Resume from "../media/TariqRahmanResume.pdf";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Landing = () => {
  const [lastCommands, setLastCommands] = useState();
  const [templateParams, setTemplateParams] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    if (templateParams.message.length > 0) {
      sendEmail(templateParams);
    }
    setTemplateParams({
      name: "",
      message: "",
    });
  }, [templateParams.message]);

  const handleNotFound = (currentCommand, params) => {
    if (lastCommands === "messageme") {
      const updateName = { ...templateParams };
      updateName.name = currentCommand;
      setTemplateParams(updateName);
      setLastCommands(currentCommand);
      return "enter your message/question:";
    } else if (templateParams.name === lastCommands) {
      const updateMessage = { ...templateParams };
      updateMessage.message = currentCommand + " " + params;
      setTemplateParams(updateMessage);
      setLastCommands();
      return "success";
    } else {
      setLastCommands();
      return "not found!!!";
    }
  };

  const sendEmail = (emailData) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAIL_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const commandDescriptions = [
    {
      name: "whoami",
      params: [],
      description: "a bit about myself!",
    },
    {
      name: "help",
      params: [],
      description: "lists all valid commands and corresponding parameters",
    },
    {
      name: "resume",
      params: [],
      description: "opens a copy of my resume",
    },
    {
      name: "cd",
      params: ["directory"],
      description: "figuratively change cwd",
    },
    {
      name: "messageme",
      params: [],
      description: "send me a message!",
    },
    {
      name: "trex",
      params: [],
      description: "emulation of google's trex game",
    },
  ];
  const commands = {
    whoami: (
      <p>
        <br />
        Hi! My name is Tariq and I’m a rising Senior studying Computer Science
        at UCLA. <br /> <br />
        I’m actively pursuing Full-Time SWE roles beginning in Summer 2024.
        While my current experience specializes in front-end and back-end
        development, I’m interested in roles relating to all aspects of the
        development stack! <br />
        <br />
        If you want to read more, check out this link:{" "}
        <Link to="/aboutme">aboutme</Link>
      </p>
    ),
    cd: (directory) => `changed path to ${directory}, but not really`,
    help: () => {
      return (
        <div className="pt-4">
          {commandDescriptions.map((command) => (
            <div>
              &gt;
              <span className="text-white font-black"> {command.name} </span>
              {command.params.map((param) => (
                <span className="underline text-red-500 underline-offset-2">
                  {param}
                </span>
              ))}
              <span> - {command.description}</span>
            </div>
          ))}
        </div>
      );
    },
    resume: () => {
      window.open(Resume, "_blank");
    },
    messageme: () => {
      setLastCommands("messageme");
      return "enter your name:";
    },
    trex: "come back when tariq learns c#",
  };
  return (
    <>
      <div className="h-[85vh]">
        <div className="flex font-primary text-2xl font-extrabold justify-center items-center pt-24">
          <span>tariq-rahman.com</span>
        </div>
        <div className="flex flex-auto h-80 md:h-[30rem] w-screen justify-center pt-16">
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
              welcomeMessage={<p>type "help" for a list of valid commands</p>}
              defaultHandler={(command, params) =>
                handleNotFound(command, params)
              }
            />
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Landing;
