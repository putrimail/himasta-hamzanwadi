import { useState } from "react";
import { assets } from "../../assets";

const mading = [
  { path: assets.mad1, alt: "mading1", animation: "fade-right" },
  { path: assets.mad2, alt: "mading2", animation: "fade-left" },
];
function MadingPages() {
  const [viewAll, setViewAll] = useState(true);
  const sliceTwo = mading
    .slice(viewAll ? mading.length - (1 + 1) : 0, mading.length)
    .reverse();
  return (
    <div className="flex flex-col items-center p-6 bg-gray-300 min-h-screen">
      <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">
        Mading
      </h2>
      <p data-aos="fade-up">*syarat ukuran harus 342px x 609px</p>
      {sliceTwo.map((item, index) => (
        <div key={index} className="m-3 shadow-2xl" data-aos={item.animation}>
          <img
            src={item.path}
            alt={item.alt}
            className="w-[342px] h-[609px] object-cover rounded-lg"
          />
        </div>
      ))}

      <button
        data-aos="fade-up"
        onClick={() => setViewAll(!viewAll)}
        className="m-3 cursor-pointer p-3 bg-red-800 text-white rounded-lg"
      >
        Tampilkan semua
      </button>
    </div>
  );
}

export default MadingPages;
