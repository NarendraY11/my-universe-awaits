import { useState } from "react";
import StarField from "@/components/StarField";
import CinematicIntro from "@/components/CinematicIntro";
import MainExperience from "@/components/MainExperience";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      <div className="relative z-10">
        {!introComplete ? (
          <CinematicIntro onComplete={() => setIntroComplete(true)} />
        ) : (
          <MainExperience />
        )}
      </div>
    </div>
  );
};

export default Index;
