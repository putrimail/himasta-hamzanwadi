import { assets } from "../../assets";

const mading = [
  { path: assets.mad1, alt: "mading1" },
  { path: assets.mad2, alt: "mading2" },
];
function MadingPages() {
  const sliceTwo = mading
    .slice(mading.length - (1 + 1), mading.length)
    .reverse();
  return (
    <div className="flex flex-col items-center p-6 bg-gray-300 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Mading</h2>
      <p>*syarat ukuran harus 342px x 609px</p>
      {sliceTwo.map((item, index) => (
        <div key={index} className="m-3 shadow-2xl">
          <img
            src={item.path}
            alt={item.alt}
            className="w-[342px] h-[609px] object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default MadingPages;
