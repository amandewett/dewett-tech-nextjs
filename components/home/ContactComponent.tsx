"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ImageContainer from "../shared/ImageContainer";
import { ContactSvg } from "@/public";
import ContactItemComponent from "./ContactItemComponent";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactComponent = () => {
  return (
    <section className="px-8">
      <SectionHeading>Contact</SectionHeading>
      <section className="flex flex-col lg:flex-row justify-between items-start my-10">
        <div className="w-[40%] hidden lg:inline">
          <ImageContainer src={ContactSvg.src} className="w-full h-full" />
        </div>
        <div className="w-[100%] lg:w-[60%] flex flex-col items-center mt-[0rem] lg:mt-[3rem] xl:mt-[5rem] 2xl:mt-[8rem]">
          <section className="flex gap-5">
            <ContactItemComponent link="https://github.com/amandewett" socialIcon={FaGithub} iconColor="6A1B9A" bgColor="E1BEE7" />
            <ContactItemComponent link="https://www.linkedin.com/in/amandewett" socialIcon={FaLinkedin} iconColor="1565C0" bgColor="BBDEFB" />
            <ContactItemComponent link="https://twitter.com/amandewett" socialIcon={FaXTwitter} iconColor="212121" bgColor="BDBDBD" />
            <ContactItemComponent link="https://www.facebook.com/dewettaman" socialIcon={FaFacebook} iconColor="00695C" bgColor="B2DFDB" />
            <ContactItemComponent link="mailto:amandewett@gmail.com?subject=Requirement" socialIcon={MdEmail} iconColor="FF6F00" bgColor="FFECB3" />
          </section>
          <motion.a
            href="/resume/Resume.pdf"
            target="_blank"
            download
            whileHover={{ y: -2 }}
            className="mt-10 min-w-[5rem] lg:min-w-[6rem] xl:min-w-[8rem] 2xl:min-w-[10rem] p-5 bg-[#C8E6C9] border-4 border-[#2E7D32] text-[#2E7D32] flex justify-center items-center rounded-2xl font-bold lg:text-xl xl:text-2xl gap-2 group"
          >
            <p>Resume</p>
            <FaDownload className="size-[1rem]" />
          </motion.a>
        </div>
      </section>
    </section>
  );
};

export default ContactComponent;
