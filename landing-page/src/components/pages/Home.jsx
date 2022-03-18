import { useState } from "react";
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import IntroSection from "./../IntroSection";
import InfoSection from "./../InfoSection";
import Services from "./../Services";
import Team from "./../Team";
import { homeAbout, homeFeatures } from "./../InfoSection/Data";
import Footer from "./../Footer";
import EmailSection from "./../EmailSection"

const Home = ({ profileData, servicesData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <IntroSection servicesData={servicesData} />
      <Services />
      <InfoSection {...homeAbout} />
      <InfoSection {...homeFeatures} />
      <Team profileData={profileData} />
      <EmailSection/>
      <Footer />
    </>
  );
};

export default Home;
