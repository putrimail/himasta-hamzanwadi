import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const textMisi = [
  "Meningkatkan kualitas SDM organisasi himasta.",
  "Menjadikan HIMASTAsebagai wadah untuk mahasiswa menyalurkan aspirasi dan berpartisipasi dalam berbagai kegiatan.",
  "Menjadikan mahasiswa anggota himasta menjadi mahasiswa yang berprestasi dalam bidang statistika.",
  "Sebagai sarana dan wadah mahasiswa mengasah potensi dan mengembangkan diri. ",
  "Menumbuhkan kepedulian mahasiswa terhadap isu-isu dalam kampus maupun di luar kampus.",
];
function AboutSection() {
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
    <section id="about">
      <div className="bg-red-800 w-full h-auto p-4">
        <div className="flex-none lg:flex justify-center ">
          <div className="lg:w-1/2   ">
            <h2
              className="text-center font-bold text-4xl  text-white pt-5 "
              data-aos="fade-up"
            >
              About Us
            </h2>
            <div
              data-aos="fade-right"
              className="text-white text-lg p-5 text-justify lg:text-xl font-medium text-pretty"
            >
              <p>
                HIMASTA (Himpunan Mahasiswa Statistika) Universitas Hamzanwadi
                adalah organisasi kemahasiswaan yang mewadahi mahasiswa program
                studi Statistika di Universitas Hamzanwadi. HIMASTA berfungsi
                sebagai sarana pengembangan akademik, keterampilan, dan
                kepemimpinan mahasiswa Statistika, serta menjadi penghubung
                antara mahasiswa, dosen, dan pihak eksternal terkait.
              </p>
              <p className="pt-2">
                Kegiatan HIMASTA meliputi seminar, workshop, pelatihan,
                kompetisi, pengabdian kepada masyarakat, serta kegiatan sosial
                lainnya yang mendukung pengembangan keilmuan di bidang
                statistika dan aplikasinya.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="text-white text-lg py-5 text-justify lg:text-xl font-medium text-pretty"
            >
              <div className=" text-black p-3">
                <div className="bg-white m-3 p-5 ">
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">Visi</p>
                    <p className="cursor-pointer" onClick={handleVisi}>
                      {showVisi ? <FaAngleUp /> : <FaAngleDown />}
                    </p>
                  </div>
                  {showVisi && (
                    <p className="pt-3">
                      Mewujudkan HIMASTA yang berkualitas yang berporoskan pada
                      tiga landasan (berproses, berprogres, dan berintegritas)
                      agar tercapainya cita-cita HIMASTA untuk menjadi yang
                      lebih baik
                    </p>
                  )}
                </div>
                <div className="bg-white m-3 p-5 ">
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">Misi</p>
                    <p className="cursor-pointer" onClick={handleMisi}>
                      {showMisi ? <FaAngleUp /> : <FaAngleDown />}
                    </p>
                  </div>
                  {showMisi &&
                    textMisi.map((item, index) => (
                      <p key={index}>
                        {index + 1}. {item}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
