'use client';

import { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import ExperienceCardComponent from './ExperienceCardComponent';
import { CodefernsTechnologiesLogo, FreelancerSvg, ThirtyFourSoftSystemsLogo } from '@/public';
import SectionHeading from './SectionHeading';
// import ScrollMessage from "./ScrollMessage";
import { durationCalculator } from '@/utils/durationCalculator';

const ExperienceComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xValue = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <section className="px-8">
        <SectionHeading>Experience</SectionHeading>
      </section>
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: xValue }} className="flex gap-10 lg:gap-16 p-16">
          <ExperienceCardComponent
            logo={FreelancerSvg.src}
            position="Full Stack Developer"
            company="Freelancer"
            duration="Sep 2023 - Present"
            joiningDate={new Date(2023, 8, 1)}
            relievingDate={undefined}
            arrDescriptions={[
              'Developed an e-commerce mobile app using React Native, resulting in 10,000+ downloads and a 40% revenue increase within the first three months.',
              'Optimized server-side rendering for a NextJS application by utilizing dynamic imports and caching strategies, decreasing page load times by 25% and boosting annual online sales by $30,000.',
              'Revamped the tracking system for a React, AWS, and Node.js public bus service app, achieving 95% uptime and improving system reliability by 60%, delivering a smoother user experience.',
              'Implemented a microservices-based architecture with Docker and Kubernetes, improving scalability and reducing deployment times from hours to minutes.',
              'Introduced a GraphQL layer between an old project’s frontend and backend services, cutting API response times by 20% and simplifying code maintenance.',
            ]}
          />
          <ExperienceCardComponent
            logo={CodefernsTechnologiesLogo.src}
            website="https://codeferns.com"
            position="Software Developer"
            company="Codeferns Technologies"
            duration="Dec 2019 - Aug 2023"
            joiningDate={new Date(2019, 11, 6)}
            relievingDate={new Date(2023, 7, 30)}
            arrDescriptions={[
              'Designed and developed a React-based interface for IELTS and PTE test practice, improving user test scores by 30% through real-time mock exams.',
              'Led an Agile team of three engineers, contributing to a 25% increase in sales revenue and 95% customer satisfaction by delivering features that met customer needs.',
              'Built a hybrid mobile app using React Native for Android and iOS, connecting mentors and mentees, reaching 20,000+ active users and facilitating 100,000+ monthly messages.',
              'Developed a Flutter app connecting farmers with buyers, helping thousands of farmers sell their crops at fair prices, and ensuring traceability and compliance with regulatory standards.',
            ]}
          />
          <ExperienceCardComponent
            logo={ThirtyFourSoftSystemsLogo.src}
            website="https://thirtyfour.in"
            position="Android Developer"
            company="Thirtyfour Soft Systems"
            duration="Aug 2019 - Nov 2019"
            joiningDate={new Date(2019, 7, 1)}
            relievingDate={new Date(2019, 10, 30)}
            arrDescriptions={[
              'Contributed to the development of a taxi-hiring mobile app, increasing the client’s customer base by 20% and boosting profits through enhanced GPS tracking and real-time updates.',
              'Improved customer satisfaction by 15% by implementing precise GPS tracking and route accuracy for drivers.',
            ]}
          />
        </motion.div>
      </div>
      {/* <ScrollMessage arrScrollYPosition={[3200, 3201, 3400, 5199, 5200]} /> */}
    </section>
  );
};

export default ExperienceComponent;
