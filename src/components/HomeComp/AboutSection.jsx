function AboutSection() {
  return (
    <section id="about">
      <div className="bg-red-800 w-full h-auto p-4">
        <div className="flex-none lg:flex justify-center ">
          <div className="lg:w-1/2   ">
            <h2 className="text-center font-bold text-4xl  text-white pt-5 ">
              About Us
            </h2>
            <div className="text-white text-lg py-15 text-justify lg:text-xl font-medium text-pretty">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
