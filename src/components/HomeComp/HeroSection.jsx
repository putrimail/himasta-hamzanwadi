import { assets } from "../../assets";

function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full h-screen bg-no-repeat "
      style={{
        backgroundImage: `url(${assets.bgHero})`,
      }}
    >
      {/* Layer Amber untuk Background Overlay */}
      <div className="absolute inset-0 bg-red-500 opacity-40 "></div>

      {/* Konten Halaman */}
      <div className="relative isolate px-6 pt-14 lg:px-8 h-full flex flex-col justify-center items-center">
        <div className="mx-auto max-w-2xl py-32 r">
          <div className="text-center m-5">
            <div className=" flex justify-center">
              <img src={assets.himasta} alt="" className=" w-60 updown" />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white  ">
              HIMASTA Universitas Hamzanwadi
            </h1>
            <p
              style={{ letterSpacing: "5px" }}
              className=" text-xl font-medium text-gray-200 lg:text-center   text-justify"
            >
              Genggam Dunia Dengan Data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
