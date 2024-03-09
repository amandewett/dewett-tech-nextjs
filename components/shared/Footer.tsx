import Reveal from "./Reveal";

const Footer = () => {
  return (
    <>
      <div>
        <hr className="bg-appColorWhiteSmoke h-[3px]" />
        <div className="flex flex-row w-full justify-between p-10 phone:p-2 items-center phone:text-center">
          <Reveal willSwipe willSwipeUp={false}>
            <h2 className="text-xl phone:text-base">
              Build with &#10084; by
              <span className="text-appPrimaryColor font-bold inline-block">
                &#160;Aman Dewett
              </span>
            </h2>
          </Reveal>
          <h3 className="phone:text-xs">&#169; 2024</h3>
        </div>
      </div>
    </>
  );
};
export default Footer;
