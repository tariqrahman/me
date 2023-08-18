import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { SparklesIcon as OutlineSparklesIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ProjectCard = (props) => {
  const [flip, setFlip] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative w-full sm:w-1/3 p-4 border-2 border-black cursor-pointer rounded-lg transition duration-500 ease-in-out hover:border-red-500">
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="h-64 flex flex-col justify-center items-center">
          <div className="mb-12">{props.name}</div>
          <div className="flex relative">
            <Link
              to={props.repoLink}
              className="mr-8 text-blue-500 hover:underline"
            >
              github
            </Link>
            {props.deploymentLink ? (
              <Link
                to={props.deploymentLink}
                className="text-blue-500 hover:underline"
              >
                live
              </Link>
            ) : (
              <span
                className="text-red-500 cursor-pointer"
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
              >
                not live
              </span>
            )}
          </div>
          {showTooltip && !props.deploymentLink && (
            <div className="absolute z-10 bg-yellow-50 p-4 rounded-lg w-full bottom-[-5%] left-1/2 transform -translate-x-1/2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <div className="mt-1 text-sm text-yellow-700">
                    <p>{props.alert}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            onClick={() => setFlip(!flip)}
            className="absolute top-2 right-2"
          >
            <OutlineSparklesIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="h-64 flex flex-col">
          <span className="font-black text-red-500 mb-2 underline">
            overview:
          </span>
          <span className="break-words">{props.description}</span>
          <span className="font-black text-red-500 mt-4 mb-2 underline">
            tech stack:
          </span>
          <span className="break-words">{props.techStack}</span>
          <div
            onClick={() => setFlip(!flip)}
            className="absolute top-2 right-2"
          >
            <OutlineSparklesIcon className="w-5 h-5" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
