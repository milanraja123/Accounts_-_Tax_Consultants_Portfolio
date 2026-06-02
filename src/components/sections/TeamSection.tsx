/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TranslationDictionary } from '../../types';

// Import team member images
import teamAhmedGauharImg from '../../assets/images/team_ahmed_gauhar_1780340091431.png';
import teamGabrielaChivuImg from '../../assets/images/team_gabriela_chivu_1780340109608.png';
import teamDiyarUcakImg from '../../assets/images/team_diyar_ucak_1780340125728.png';

interface TeamSectionProps {
  dict: TranslationDictionary;
}

interface TeamMember {
  id: string;
  name: string;
  role: keyof TranslationDictionary;
  image: string;
  badgeColor: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'ahmed',
    name: 'Ahmed Gauhar',
    role: 'founderRole',
    image: teamAhmedGauharImg,
    badgeColor: 'bg-[#1a253c]',
  },
  {
    id: 'gabriela',
    name: 'Gabriela Chivu',
    role: 'assistantRole',
    image: teamGabrielaChivuImg,
    badgeColor: 'bg-[#4a1212]',
  },
  {
    id: 'diyar',
    name: 'Diyar Ucak',
    role: 'accountantRole',
    image: teamDiyarUcakImg,
    badgeColor: 'bg-[#4a1212]',
  },
];

export default function TeamSection({ dict }: TeamSectionProps) {
  return (
    <section id="our-team-section" className="bg-white py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Centered Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 id="team-section-title" className="text-4xl sm:text-[40px] font-bold text-gray-900 tracking-tight leading-tight font-grotesk">
            {dict.teamTitle}
          </h2>
          <p id="team-section-subtitle" className="text-sm sm:text-[15px] font-light text-gray-500 leading-relaxed max-w-md md:max-w-xl mx-auto select-text font-opensans">
            {dict.teamDesc}
          </p>
        </div>

        {/* Three-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              id={`team-card-${member.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="flex flex-col space-y-5"
            >
              {/* Image Frame with subtle rounded corners */}
              <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden rounded-[4px] border border-gray-100 shadow-sm">
                <img
                  src={member.image}
                  alt={`${member.name} - ${dict[member.role]}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300 transform hover:scale-[1.02]"
                />
              </div>

              {/* Profile Bar with Badge */}
              <div className="flex items-center gap-4">
                {/* Logo Badge */}
                <div className={`w-12 h-12 rounded-full ${member.badgeColor} text-white flex items-center justify-center font-bold text-sm tracking-wider flex-shrink-0 select-none font-grotesk`}>
                  AD
                </div>
                {/* Details stack */}
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-[#111927] text-sm sm:text-base select-text font-poppins">
                    {member.name}
                  </span>
                  <span className="text-xs sm:text-[13px] text-gray-500 font-medium select-text font-opensans">
                    {dict[member.role]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
