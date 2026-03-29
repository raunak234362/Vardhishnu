import App from "../App";
import Home from "../layout/Home";
import WhoWeAre from "../layout/WhoWeAre";
import WhyChildren from "../layout/WhyChildren";
import OurPrograms from "../layout/OurPrograms";
import OurImpacts from "../layout/OurImpacts";
import Resources from "../layout/Resources";

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
        path: "/our-impacts",
        element: <OurImpacts />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
    ],
  },
];

export default routes;
