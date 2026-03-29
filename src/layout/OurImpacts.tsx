import ImpactHero from "../components/OurImpacts/ImpactHero";
import OverallImpact from "../components/OurImpacts/OverallImpact";
import AchievementQuote from "../components/OurImpacts/AchievementQuote";
import Awards from "../components/OurImpacts/Awards";
import Felicitations from "../components/OurImpacts/Felicitations";
import Conferences from "../components/OurImpacts/Conferences";
import MediaFeatures from "../components/OurImpacts/MediaFeatures";

const OurImpacts = () => {
  return (
    <main className="bg-white">
      <ImpactHero />
      <OverallImpact />
      <AchievementQuote />
      <Awards />
      <Felicitations />
      <Conferences />
      <MediaFeatures />
    </main>
  );
};

export default OurImpacts;
