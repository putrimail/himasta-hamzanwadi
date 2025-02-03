import AboutSection from "../../components/HomeComp/AboutSection";
import GallerySection from "../../components/HomeComp/GallerySection";
import HeroSection from "../../components/HomeComp/HeroSection";
import ProfileSeciton from "../../components/HomeComp/ProfileSeciton";
import TeamSection from "../../components/HomeComp/TeamSection";

export default function HomePages() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProfileSeciton />
      <TeamSection />
      <GallerySection />
    </>
  );
}
