import App from "../App";
import Home from "../layout/Home";
import WhoWeAre from "../layout/WhoWeAre";
import WhyChildren from "../layout/WhyChildren";
import OurPrograms from "../layout/OurPrograms";
import OurImpacts from "../layout/OurImpacts";
import Resources from "../layout/Resources";
import ReportCards from "../components/Resources/ReportCards";
import AuditReportsGrid from "../components/Resources/AuditReportsGrid";
import AnandgharApproach from "../components/OurPrograms/anandghar/AnandgharApproach";
import AnandgharFellowship from "../components/OurPrograms/felloship/AnandgharFellowship";
import CommunityCollectives from "../components/OurPrograms/Community Collectives/Communitycollectives";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "/why-children",
        element: <WhyChildren />,
      },
      {
        path: "/our-programs",
        element: <OurPrograms />,
      },
      {
        path: "/our-programs/anandghar-approach",
        element: <AnandgharApproach />,
      },
      {
        path: "/our-programs/anandghar-fellowship",
        element: <AnandgharFellowship />,
      },
      {
        path: "/our-programs/community-collectives",
        element: <CommunityCollectives />,
      },
      {
        path: "/our-impacts",
        element: <OurImpacts />,
      },
      {
        path: "/resources",
        element: <Resources />,
        children: [
          {
            index: true,
            element: <ReportCards />,
          },
          {
            path: "audit-reports",
            element: <AuditReportsGrid />,
          },
        ],
      },
    ],
  },
];

export default routes;
