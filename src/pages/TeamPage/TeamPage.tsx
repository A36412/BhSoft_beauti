import { OurTeamPageTeam } from "./OurTeamPageTeam/OurTeamPageTeam";
import { AssistanceTeamPageTeam } from "./AssistanceTeam/AssistanceTeam";
import { CustomerSatisfactionPageTeam } from "./CustomerSatisfaction/CustomerSatisfaction";
import { OurTestimonials } from "./OurTestimonials/OurTestimonials";

const TeamPage: React.FC = () => {
  return (
    <>
      <OurTeamPageTeam />
      <AssistanceTeamPageTeam/>
      <CustomerSatisfactionPageTeam />
      <OurTestimonials />
    </>
  );
};

export default TeamPage;
