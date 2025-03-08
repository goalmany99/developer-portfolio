// @flow strict

import { skillsData } from "@/utils/data/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const getIconColor = (skillName) => {
    const colorMap = {
      'AI agent': 'text-blue-500',
      'AI work flow': 'text-cyan-500',
      'TRAE': 'text-indigo-500',
      'MarsCode': 'text-purple-500',
      'Prompt Engineering': 'text-teal-500',
      'Python': 'text-green-500',
      'Git': 'text-orange-500',
      'Kubernet': 'text-sky-500',
      'Docker': 'text-blue-400',
      'FeiShu': 'text-emerald-500',
      'Quantization': 'text-rose-500'
    };
    return colorMap[skillName] || 'text-white';
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-gradient-to-b from-[#0f1629] to-[#0a0d1f] shadow-lg shadow-violet-500/20 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center p-2 group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-all duration-500">
                    {skill.icon && <skill.icon size={30} className={`${getIconColor(skill.name)} transition-all duration-500 group-hover:scale-110`} />}
                  </div>
                  <p className="text-white text-sm sm:text-lg font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;