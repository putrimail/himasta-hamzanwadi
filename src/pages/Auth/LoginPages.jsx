import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets";
import { FaHeadset } from "react-icons/fa6";
function LoginPages() {
  const navigate = useNavigate();
  const pushCookie = (key, value) => {
    Cookies.set(key, value);
  };
  const handleLogin = () => {
    pushCookie("status", true);
    navigate("/");
  };
  return (
    <div className="h-screen bg-red-800 flex justify-center p-4">
      <div className="lg:w-1/3 w-full bg-white rounded-lg  my-28 shadow-lg">
        <div className=" mx-5 my-5 ">
          <a className="flex justify-center" href="/">
            <img src={assets.himasta} alt="" className="w-1/2 updown" />
          </a>
        </div>
        <div className=" mx-5 my-5  gap-y-2 flex flex-col">
          <p>NPM</p>
          <input
            type="text"
            id=""
            placeholder="2403xxx18"
            className="border-1 border-red-800 w-full rounded-lg p-2 "
          />
          <p>Password</p>
          <input
            type="password"
            id=""
            placeholder="xxxxx"
            className="border-1 border-red-800 w-full rounded-lg p-2 "
          />
          <button
            onClick={handleLogin}
            className="bg-red-800 rounded-lg p-2 text-white hover:bg-red-600 cursor-pointer"
          >
            Login
          </button>
          <div className="flex justify-between ">
            <p>* Jika akun anda tidak terdaftar hubungi kami</p>
            <a
              href=""
              className="text-xl bg-red-800 p-3 text-white rounded-full my-4"
            >
              <FaHeadset />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPages;
