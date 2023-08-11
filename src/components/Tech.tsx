import SectionWrapper from "./SectionWrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map(tech => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Tech