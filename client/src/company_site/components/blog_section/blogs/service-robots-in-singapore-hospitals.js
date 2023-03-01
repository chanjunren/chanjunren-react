import React, { useState } from 'react';

import NavBar from '../../navbar';
import SideBar from '../../sidebar';
import Footer from '../../footer';
import { Typography } from '@material-ui/core';
import BlogStyles from './blog_styles';
import { withTheme } from '../../../../util/theme';
import Educator from '../../../images/blog_section/temi-as-video-educator.png';
import Dance from '../../../images/blog_section/robot-teach-hospital-patient-dancing.jpg';
import Teleprescence from '../../../images/blog_section/quarantine-patient-communicates-with-family-using-robot.jpg';
// import Teleprescence2 from '../../../images/blog_section/patients-communicate-with-family-using-temi.jpg';
import Delivery from '../../../images/blog_section/robot-deliver-medicine-in-tan-tock-seng-hospital.jpg';
import Wayfinding from '../../../images/blog_section/robot-display-screen-show-visitors-where-to-go.jpg';
import EntertainPatient from '../../../images/blog_section/robot-plays-video-in-ward.jpg';
import Translator from '../../../images/blog_section/robot-screen-display-real-time-translation.jpg';
import HighRiskWard from '../../../images/blog_section/robot-patrolling-high-risk-ward.jpg';
import FirstResponder from '../../../images/blog_section/temi-as-first-responder.png';
import EasyProgramming from '../../../images/blog_section/temi-ease-of-use.jpg';

const HospitalBlog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const blogStyles = BlogStyles();

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div style={{ height: "80px" }} />
      <div id="blog" className={blogStyles.blogContainer}>
        <Typography className={blogStyles.blogTitle} variant='h3'>
          temi Service Robots in Healthcare: 10 Use Cases in Singapore Hospitals
        </Typography>
        <Typography className={blogStyles.blogText} style={{ textAlign: 'center' }}>
          How service robots can improve healthcare services, patient/visitor experiences
          and most importantly, operational productivity
          <br />
          Published on 9 Nov 2022
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          Why Singapore hospitals are using robots
        </Typography>
        <Typography className={blogStyles.blogText}>
          Robots have now become a vital workforce in many Singapore hospitals, performing everything
          from surgeries to administrative tasks. Moreover, the Covid-19 pandemic has expedited
          robotics development, in view of the infection danger that healthcare staff face.  <br /><br />
          Singapore faces an ageing population, a rise in chronic diseases and a dwindling healthcare
          workforce. It is estimated that Singapore would need 82,000 healthcare staff by 2030 - an
          increase of more than 40% from the current healthcare force. To meet the challenge, hospitals
          are now turning to robots to automate and improve productivity of their operational processes
          and services.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          Overview of how service robots can help hospitals
        </Typography>
        <Typography className={blogStyles.blogText} >
          Service robots can make the most difference by assisting healthcare staff in taking on labour-
          intensive duties. In general, robotics can help healthcare staff to minimise nursing care
          duties and patient service tasks that are dangerous, repetitive, time-consuming, laborious
          and menial.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          Ten uses of service robots in Singapore hospitals
        </Typography>
        <Typography className={blogStyles.blogText} >
          Robots in healthcare and specifically hospitals can be classified into many different
          categories such as surgical robots, exoskeletons, and service robots (also known as care
          robots). This study examines how hospitals use service robots to improve their nursing care
          and patient/visitor experiences.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          1. temi as a video educator
        </Typography>
        <img className={blogStyles.blogImage} src={Educator} alt='temi as a video educator' />
        <Typography className={blogStyles.blogText} >
          With a tap on the screen, hospitals can provide video educations to their patients at will.
          This application in used widely within the wards of various hospitals and clinics, providing
          an easy way to digest information using interesting videos.  Mums-to-be can view videos on
          how to breastfeed and how to bathe new-borns; patients in oncology wards can learn more about
          chemotherapy and so on.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          2. temi as video exercise and dance instructor for ward patients
        </Typography>
        <img className={blogStyles.blogImage} src={Dance} alt='temi Robot teaching hospital patients dancing' />
        <Typography className={blogStyles.blogText} >
          In Sengkang Community Hospital, temi service robot served as an exercise and dance “instructor”
          in wards where patients could watch the screen and follow videos of exercises and dance routines.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          3. Tele-medicine, tele-pharmacist consultations and tele-social counselling
        </Typography>
        <div className={blogStyles.DoubleImageContainer}>
          <img className={blogStyles.doubleImage} src={Teleprescence} alt='temi Robot deliver medicine in Tan Tock Seng Hospital' />
        </div>
        <Typography className={blogStyles.blogText} >
          temi(s) were used to conduct tele-consultations to minimise healthcare workers’ face-to-
          face interactions with Covid-19 patients at SingHealth-managed community care facility at
          Singapore Expo and at SingHealth community hospitals.  By reducing six times the amount of
          dwell time that front-line healthcare workers spend with Covid-19 patients, temi service
          robots significantly reduced cross contamination risks without sacrificing the quality of care.
          <br /><br />
          IIn the quarantine facilities, medical social workers also used temi robots to provide tele
          counselling to reduce patients’ anxiety.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          4. temi delivers medicine and nursing forms
        </Typography>
        <img className={blogStyles.blogImage} src={Delivery} alt='temi Robot deliver medicine in Tan Tock Seng Hospital' />
        <Typography className={blogStyles.blogText} >
          To cope with the increase for medication counselling for Covid-19 patients, the Pharmacy
          of Tan Tock Seng Hospital’s A&E turned to temi, the service robot. Besides using the robot
          for video medication counselling, pharmacy staff also used the service robot to deliver
          medicine to patients being treated at the A&E Department and awaiting medications not
          stocked at the location.
          <br /><br />
          In another SingHealth’s hospital, temi, the service robot was programmed to fetch and
          carry forms from the registration counter to nurses within the clinic. This helped to
          reduce nurses’ time spent to retrieve forms and allowed them to spend more quality time
          with their patients.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          5. temi guide to help way-find around the hospital
        </Typography>
        <img className={blogStyles.blogImage} src={Wayfinding} alt='temi Robot display screen show visitors where to go' />
        <Typography className={blogStyles.blogText} >
          At Changi General Hospital, temi robots were piloted and programmed as a guide robot
          to help visitors find their way around their large compound. temi will bring visitors
          to their desired location within the hospital.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          6. Entertain with songs and videos on demand
        </Typography>
        <img className={blogStyles.blogImage} src={EntertainPatient} alt='temi Robot plays video in ward for patients' />
        <Typography className={blogStyles.blogText} >
          Children and even adults are naturally anxious when going for surgery. temi is deployed
          to calm children before surgery in the pre-operating theatre. By playing the child’s
          favourite video and songs on demand, temi entertained the children, allayed their
          anxieties, and reduced their fears.
          <br /><br />
          In some community hospitals, temi(s) will play favourite songs of patients while they
          patrol within the ward in the morning, bringing smiles and pleasant moods to all the
          patients and even the healthcare workers.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          7. Robot as real time translator for patients who speak different languages
        </Typography>
        <img className={blogStyles.blogImage} src={Translator} alt='temi Robot screen display real time translation' />
        <Typography className={blogStyles.blogText} >
          temi has also been deployed as a translator robot in certain circumstances. Relying
          on its access to Google Translate, this real-time translation app empowers nurses and
          healthcare staff to communicate with patients and family members who speak different
          languages. At times, there may be volunteers who want to help remotely and temi can
          manage video calls between the different parties.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          8. temi as a roving announcer
        </Typography>
        <img className={blogStyles.blogImage} src={HighRiskWard} alt='temi Robot patrolling high risk ward' />
        <Typography className={blogStyles.blogText} >
          temi can be programmed to regularly go around a high fall risk ward to remind patients
          to take special care to avoid falls.
          <br />
          Every night, towards the end of the day, temi is scheduled to go to different locations
          within the ward to inform visitors that visiting hours are almost over and that they should
          leave the ward so that patients can rest for the night.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          9. First responder to Call Bell Service
        </Typography>
        <img className={blogStyles.blogImage} src={FirstResponder} alt='temi as a first responder' />
        <Typography className={blogStyles.blogText} >
          Within a red zone ward, temi can be the first responder to any call from patients. The duty
          nurse can control temi robot remotely from the nurse station to go to the bed calling for
          help.  They can communicate with the patient via a video call to know their full needs
          before proceeding to enter the red zone ward with full PPE.  This will help reduce
          unnecessary face-to-face contacts and better manage the use of PPEs that needed to be
          discarded after each use.
        </Typography>
        <Typography className={blogStyles.blogHeader} variant='h4' color='secondary'>
          10. temi provides ward orientation to new patients/family members
        </Typography>
        <img className={blogStyles.blogImage} src={EasyProgramming} alt='temi is easy to programme and use' />
        <Typography className={blogStyles.blogText} >
          Without coding, temi can be easily programmed through its web-based fleet management
          system to execute an orientation sequence that it will go through with patients (and
          their family members) coming into the ward and various important information about the
          ward and their stay.  This will take a load off nurses who would otherwise have to go
          through the information with each patient and their family members.
        </Typography>
        <Typography className={blogStyles.blogText} style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          Contact RoboSolutions Singapore on WhatsApp +(65) 8303-2264 to discuss how you can make
          use of temi in your work environment.
        </Typography>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(HospitalBlog);