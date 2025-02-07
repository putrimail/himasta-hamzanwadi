import { Link } from "react-router-dom";
import { assets } from "../assets";
import { FaInstagram, FaYoutube, FaRegEnvelope } from "react-icons/fa6";

const listMenu = [
  { menu: "Home", path: "/" },
  { menu: "About Us", path: "#about" },
  { menu: "Profile", path: "#profile" },
  { menu: "Team", path: "#team" },
  { menu: "Proker", path: "#proker" },
  { menu: "Gallery", path: "#gallery" },
];
const listSosialMedia = [
  { logo: <FaInstagram />, path: "https://www.instagram.com/himasta_uh/" },
  {
    logo: <FaYoutube />,
    path: "https://www.youtube.com/@himastahamzanwadi4014",
  },
  {
    logo: <FaRegEnvelope />,
    path: "mailto:hamzanwadistatistika18@gmail.com?subject=Laporan%20Himasta",
  },
];

export default function FooterComp() {
  return (
    <section id="team">
      <div className="bg-red-800 py-3">
        <div className="mx-auto max-w-7xl px-3 ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col  py-5">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <img src={assets.himasta} className="w-52" alt="hismasta" />
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col  py-5">
              <dd className="order-first text-xl font-medium  text-white ">
                {listMenu.map((item, index) => (
                  <p key={index} className="pt-2">
                    <a href={item.path} className="pt-2">
                      {item.menu}
                    </a>
                  </p>
                ))}
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col   py-5">
              <dd className="order-first text-3xl lg:text-5xl font-semibold tracking-tight text-white ">
                <div className="flex gap-5 lg:py-16">
                  {listSosialMedia.map((item, index) => (
                    <Link to={item.path} key={index}>
                      {item.logo}
                    </Link>
                  ))}
                </div>
              </dd>
            </div>
          </dl>

          <p className="text-center text-white">
            Copyright © {new Date().getFullYear()} HIMASTA | Powered by HIMASTA.
          </p>
        </div>
      </div>
    </section>
  );
}
