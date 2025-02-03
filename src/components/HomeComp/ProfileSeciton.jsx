import ReactPlayer from "react-player";
export default function ProfileSeciton() {
  return (
    <section id="profile">
      <div className="bg-white w-full h-auto p-4">
        <div className="flex-none lg:flex justify-center ">
          <div className="lg:w-1/2   ">
            <h2 className="text-4xl font-bold mb-4 text-red-800 text-center pt-5">
              Our Profile
            </h2>
            <div className="w-full max-w-3xl py-15 ">
              <ReactPlayer
                url="https://youtu.be/UQawxyG9jkg"
                width="100%"
                height="400px"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
