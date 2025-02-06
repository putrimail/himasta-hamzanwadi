import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
export default function ProfileSeciton() {
  return (
    <section id="profile">
      <div className="bg-white w-full h-auto p-4">
        <div className="flex-none lg:flex justify-center ">
          <div className="lg:w-1/2 text-center  ">
            <h2 className="text-4xl font-bold mb-4 text-red-800  pt-5">
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
            <Link
              to="https://www.youtube.com/@himastahamzanwadi4014"
              className="bg-red-800 p-3 rounded-lg cursor-pointer text-white text-lg"
            >
              video lainnya....
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
