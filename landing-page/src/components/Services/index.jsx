import React from "react";
import servicesData from "./Data";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElement";

const Services = ({ id, img, alt, servicesTitle, servicesDescription }) => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesWrapper>
          {servicesData.map((service, index) => (
            <ServicesCard id={id} key={index}>
              <ServicesIcon src={`${service.img}`} alt={`${service.alt}`} />
              <ServicesH2 servicesTitle={servicesTitle}>
                {service.servicesTitle}
              </ServicesH2>
              <ServicesP servicesDescription={servicesDescription}>
                {service.servicesDescription}
              </ServicesP>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
