import ResourcesHero from "../components/Resources/ResourcesHero";
import { Outlet } from "react-router-dom";

const Resources = () => {
  return (
    <main className="bg-white">
      <ResourcesHero />
      <Outlet />
    </main>
  );
};

export default Resources;
