import React from "react";
import profileData from "./Data";
import {
  TeamContainer,
  TeamWrapper,
  TeamCard,
  TeamP,
  TeamMemberWrapper,
  Img,
  TeamMemberName,
  TeamMemberJob,
} from "./TeamElement";

const Team = ({ id, teamFeedback, img, alt, name, job }) => {
  return (
    <>
      <TeamContainer id="team">
        <TeamWrapper>
          {profileData.map((profile, index) => (
            <TeamCard id={id} key={index}>
              <TeamP teamFeedback={teamFeedback}>{profile.teamFeedback}</TeamP>
              <TeamMemberWrapper>
                <Img src={`${profile.img}`} alt={`${profile.alt}`} />
                <TeamMemberName name={profile}>{profile.name}</TeamMemberName>
                <TeamMemberJob job={job}>{profile.job}</TeamMemberJob>
              </TeamMemberWrapper>
            </TeamCard>
          ))}
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
