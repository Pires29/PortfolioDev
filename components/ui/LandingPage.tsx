import Image from "next/image";
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi";
import { RxSlash } from "react-icons/rx";

export default function LandingPage() {
  return (
    <div id="landing" className="min-h-screen flex items-center justify-center">
      <div className="block w-full max-w-4xl mx-auto sm:p-10 p-4">
        <div className="text-center mb-20">
          <div className="flex justify-start items-center mb-4">
            <PiLessThanLight className="text-2xl lg:text-3xl" style={{ color: "#FE710B" }} />
            <h2 className="mx-0 lg:mx-2 text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-orange-500">FrontEndDeveloper</h2>
            <PiGreaterThanLight className="text-2xl lg:text-3xl" style={{ color: "#FE710B" }} />
          </div>
          <div className="text-center">
            <h1 className="text-3xl xxs:text-4xl xs:text-5xlcustom sm:text-5xl lg:text-6xl 2xl:text-7xl mb-4 text-white">I´m Renato Almeida</h1>
          </div>
          <div className="flex justify-start items-center">
            <PiLessThanLight className="text-2xl lg:text-3xl" style={{ color: "#FE710B" }} />
            <h2 className="mx-0 lg:mx-2 text-xl xxs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-orange-500">FrontEndDeveloper</h2>
            <RxSlash className="text-2xl lg:text-3xl" style={{ color: "#FE710B" }} />
            <PiGreaterThanLight className="text-2xl lg:text-3xl" style={{ color: "#FE710B" }} />
          </div>
        </div>
        <div className="block xl:flex w-full max-w-4xl mx-auto">
  {/* About Me Section */}
  <div className="w-full xl:w-1/2 text-center xl:text-left xl:mr-8">
    <div className="flex items-center justify-center xl:justify-start mb-5 text-orange-500">
      <PiLessThanLight className="sm:text-xl lg:text-2xl" style={{ color: "#FE710B" }} />
      <h3 className="mx-0 lg:mx-1 text-xl sm:text-2xl">About me</h3>
      <PiGreaterThanLight className="sm:text-xl lg:text-2xl" style={{ color: "#FE710B" }} />
    </div>
    <p className="text-white mx-4 xl:mx-0 text-sm xs:text-base sm:text-lg">
      I´m Renato, a passionate Front End Developer with a keen eye for detail and a love for crafting engaging user experiences. I thrive on turning complex problems into intuitive, beautiful interfaces that delight users.
    </p>
  </div>

  {/* Tech Stack Section */}
  <div className="w-full xl:w-1/2 text-center xl:text-left xl:ml-8 mt-5 xl:mt-0">
    <div className="flex items-center justify-center xl:justify-start mb-5">
      <PiLessThanLight className="sm:text-xl lg:text-2xl" style={{ color: "#FE710B" }} />
      <h3 className="mx-0 lg:mx-1 text-xl sm:text-2xl text-orange-500">Tech Stack</h3>
      <PiGreaterThanLight className="sm:text-xl lg:text-2xl" style={{ color: "#FE710B" }} />
    </div>
    <div className="flex flex-wrap justify-center xl:justify-start">
      <Image 
        src="/html5-logo.png" 
        width={50} 
        height={50} 
        alt="HTML5 logo" 
        className="mr-4 mb-4" 
      />
      <Image 
        src="/css-3.png" 
        width={50} 
        height={50} 
        alt="CSS3 logo" 
        className="mr-4 mb-4" 
      />
      <Image 
        src="/js.png" 
        width={50} 
        height={50} 
        alt="JavaScript logo" 
        className="mr-4 mb-4" 
      />
      <Image 
        src="/physics.png" 
        width={50} 
        height={50} 
        alt="Physics logo" 
        className="mr-4 mb-4" 
      />
      <Image 
        src="/database.png" 
        width={50} 
        height={50} 
        alt="Database logo" 
        className="mr-4 mb-4" 
      />
      <Image 
        src="/bootstrapF.png" 
        width={50} 
        height={50} 
        alt="Bootstrap logo" 
        className="mr-4 mb-4" 
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
