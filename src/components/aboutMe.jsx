import pfp from "../images/IMG_1420.jpg";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <>
      <div className=" sm:px-6 sm:pt-16 md:pt-24 md:px-32 font-primary">
        <div className="flex flex-auto pl-12">
          <img
            className="border-2 border-black rounded-full"
            src={pfp}
            alt="pfp"
            height={200}
            width={200}
          />
          <div className="flex flex-col justify-center ml-16">
            <div className="text-xl font-extrabold">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "tariq is a Mario Kart pro",
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  "tariq is a Russell Westbrook fanatic",
                  1500,
                  "tariq is car guy?",
                  1500,
                  "tariq is a bruin",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>

        <div className="p-4 pt-16 pb-6 break-words">
          <p>
            My name is Tariq and I'm a rising Senior studying Computer Science
            at UCLA. I love basketball, cars, video games, and programming. I'm
            currently interning as a software engineer with the Dallas Mavericks
            -yes, the NBA team! While programming and school are both great, I
            spend most of my free time playing basketball. I even won the
            intramural championship last year. <br /> <br /> Careerwise, I've
            completed a few full-stack internships over the course of the last
            couple years! The most recent is ongoing with the Mavs, where I've
            contributed to an application used directly by the front office and
            coaching staff to optimize team performance. Before that, I worked
            with DocStop, a UCLA startup promoting accessible healthcare on an
            international scale. In the previous summer, I worked with UCLA's
            premier newspaper, the Daily Bruin. As a member of the Carbon
            subteam, I collaborated directly with editors to create a platform
            allowing them to design webpages without writing a single line of
            code. My first internship was at Rainsphere.ai, a startup working to
            simplify medical software on a global scale. <br /> <br />{" "}
            Generally, I work with JavaScript and Python with a bit of C/C++ for
            lower level school projects. While most of my experience is
            Front-end, I'm super interested in cloud infrastructure as well as
            API development!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
