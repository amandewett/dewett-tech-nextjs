// import Reveal from "../shared/Reveal";
import dynamic from "next/dynamic";
import Numbers from "./Numbers";
const Reveal = dynamic(() => import("../shared/Reveal"), { ssr: false });

const Bio = () => {
  return (
    <>
      <div className="ml-10 tablet:mx-5 phone:mx-5 xxlMonitor:ml-5 lgMonitor:ml-20 laptop:ml-32">
        <Reveal>
          <p className="font-semibold text-lg phone:text-xs tablet:text-lg lgMonitor:text-base laptop:text-sm inline-block text-pretty">
            <span className="text-appPrimaryColor font-bold text-4xl lgMonitor:text-3xl laptop:text-2xl phone:text-xl inline-block">Bonjour</span>, Driven by a curiosity for technology and a passion
            for building software that makes a difference, I am eager to bring my talents as a Full Stack Developer to your team and collaborate with creative thinker professionals on exciting
            projects. Myself <b>Aman Dewett</b>, an experienced Full Stack Developer with over 5 years of expertise in{" "}
            <span className="text-appPrimaryColor font-bold">NextJS, React, React Native, NodeJS, NestJS and Flutter</span> development.
            <br />
            <br />
            Demonstrated my expertise in building sophisticated and scalable frontend and backend systems. Proficiently leveraged the power of React and NodeJS ecosystem combined with NextJS and
            NestJS framework for streamlined development. Successfully designed and implemented robust Web Applications, RESTful APIs, microservices, and database architectures.
            <br />
            <br /> Competent in Dart programming language and adept at utilizing Flutter&#39;s framework to deliver visually stunning and high-performing hybrid mobile applications in Android and iOS.
            Skilled in UI/UX design principles, integrating complex functionalities and optimizing app effectiveness for various devices.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-16 w-full flex justify-between px-5">
            <Numbers text="Happy Clients" count={50} />
            <Numbers text="Projects Delivered" count={70} />
            <Numbers text="Years Of Experience" count={5} />
          </div>
        </Reveal>
      </div>
    </>
  );
};
export default Bio;
