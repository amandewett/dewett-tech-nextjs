"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ExperienceCardComponent from "./ExperienceCardComponent";
import { CodefernsTechnologiesLogo, FreelancerSvg, ThirtyFourSoftSystemsLogo } from "@/public";
import SectionHeading from "./SectionHeading";

const ExperienceComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xValue = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="relative h-[160vh]">
      <SectionHeading>Experience</SectionHeading>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x: xValue }} className="flex gap-16 p-16">
          <ExperienceCardComponent
            logo={FreelancerSvg.src}
            position="Full Stack Developer"
            company="Freelancer"
            duration="Sep 2023 - Present (10m)"
            arrDescriptions={[
              "Crafted an e-commerce mobile application using React native, resulting in 10,000+ downloads and a revenue increase of 40% within the first three months of launch.",
              "Optimized server-side rendering of a pre-developed NextJS application by leveraging dynamic imports, lazy loading for images and caching frequently used content for a textile business, leading to a 25% decrease in page load times and increase in annual online sales revenue by $30,000.",
              "Collaborated on a partially developed React, AWS, and Node.js application focused on bus service tracking. Successfully troubleshooted and restored its tracking system, ensuring consistent timing for bus stops. Achieved 95% uptime and Increased reliability by 60% through improved user experience delivery.",
            ]}
          />
          <ExperienceCardComponent
            logo={CodefernsTechnologiesLogo.src}
            website="https://codeferns.com"
            position="Software Developer"
            company="Codeferns Technologies"
            duration="Dec 2019 - Aug 2023 (3y 8m)"
            arrDescriptions={[
              "Designed and developed a React-based interface for practicing IELTS and PTE tests. Providing real-time mock exams to enhance English language skills, resulting in improvement in test scores by 30%.",
              "Hired, trained, code review and lead Agile team of 3 software engineers.",
              "Worked closely with cross-functional team members to gather requirements, resulting in 95% customer satisfaction rate and 25% increase in sales revenue.",
              "Built a hybrid mobile app with React native for Android and iOS, connecting mentors and mentees, resulting in 20,000+ active users and over 100,000 chat messages exchanged monthly powered by Firebase. Helped thousands to graciously exchange and acquire knowledge with clean code methodologies.",
              "Developed a mobile app using Flutter, connecting farmers directly with buyers, helping thousands of farmers sell their crops at fair prices. Ensured traceable, authentic products meeting consumer and regulatory demands.",
            ]}
          />
          <ExperienceCardComponent
            logo={ThirtyFourSoftSystemsLogo.src}
            website="https://thirtyfour.in"
            position="Android Developer"
            company="Thirtyfour Soft Systems"
            duration="Aug 2019 - Nov 2019 (3m)"
            arrDescriptions={[
              "Designed and developed a React-based interface for practicing IELTS and PTE tests. Providing real-time mock exams to enhance English language skills, resulting in improvement in test scores by 30%.",
              "Hired, trained, code review and lead Agile team of 3 software engineers.",
              "Worked closely with cross-functional team members to gather requirements, resulting in 95% customer satisfaction rate and 25% increase in sales revenue.",
              "Built a hybrid mobile app with React native for Android and iOS, connecting mentors and mentees, resulting in 20,000+ active users and over 100,000 chat messages exchanged monthly powered by Firebase. Helped thousands to graciously exchange and acquire knowledge with clean code methodologies.",
              "Developed a mobile app using Flutter, connecting farmers directly with buyers, helping thousands of farmers sell their crops at fair prices. Ensured traceable, authentic products meeting consumer and regulatory demands.",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
