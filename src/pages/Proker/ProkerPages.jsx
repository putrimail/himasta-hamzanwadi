import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const textMisi = [
  "Meningkatkan kualitas SDM organisasi himasta.",
  "Menjadikan HIMASTAsebagai wadah untuk mahasiswa menyalurkan aspirasi dan berpartisipasi dalam berbagai kegiatan.",
  "Menjadikan mahasiswa anggota himasta menjadi mahasiswa yang berprestasi dalam bidang statistika.",
  "Sebagai sarana dan wadah mahasiswa mengasah potensi dan mengembangkan diri. ",
  "Menumbuhkan kepedulian mahasiswa terhadap isu-isu dalam kampus maupun di luar kampus.",
];
function ProkerPages() {
  const [showVisi, setShowVisi] = useState(true);
  const [showMisi, setShowMisi] = useState(false);
  const handleVisi = () => {
    setShowVisi(!showVisi);
    setShowMisi(false);
  };
  const handleMisi = () => {
    setShowMisi(!showMisi);
    setShowVisi(false);
  };

  return (
    <div className="bg-gray-300 w-full h-screen p-4">
      <div className="flex-none lg:flex justify-center ">
        <div className=" text-black  text-centerp-3">
          <p>tunggu di angkatan selanjutnya....</p>
        </div>
      </div>
    </div>
  );
}

export default ProkerPages;
