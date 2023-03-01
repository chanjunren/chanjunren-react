import temiMuseumIcon from '../../images/app_logos/temi_museum_icon.png';
import receptemistIcon from '../../images/app_logos/receptemist_icon.png';
// import temiAnnouncerIcon from '../../images/app_logos/temi_announcer_icon.png';
import temiConciergeIcon from '../../images/app_logos/temi_concierge_icon.png';
import temiWayFinderIcon from '../../images/app_logos/temi_wayfinder_icon.png';
import temiEyeIcon from '../../images/app_logos/temi_eye_icon.png';

export const applicationsData = [
  {
    imageSrc: receptemistIcon,
    title: 'Receptemist',
    description: 'Receptionist Application designed to your specific user interface requirements. ',
  },
  {
    imageSrc: temiMuseumIcon,
    title: 'Autonomous Tour Guide',
    description: 'Tour guide for museums and showrooms customised to introduce exhibits to ' +
      'visitors. Add temi\'s capabilities to take photos. Visitors can provide visit feedbacks',
    url: 'https://www.youtube.com/watch?v=tB3oNlf_sJg'
  },
  {
    imageSrc: temiConciergeIcon,
    title: 'TemiConcierge',
    description: 'Concierge Application that utilises temi\'s capabilities. Concierge services covered ' +
      'include teleconferencing, directory, promotion & marketing materials, wayfinding and many more.',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiConcierge/preview.md'
  },
  // {
  //   imageSrc: temiAnnouncerIcon,
  //   title: 'TemiAnnouncer',
  //   description: 'Announcer Application to repeatedly announce customised speeches along a patrol route. '+
  //   'Create custom routes from temi\'s saved locations to announce. ',
  //   url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiAnnouncer/preview.md'
  // },
  {
    imageSrc: temiWayFinderIcon,
    title: 'TemiWayFinder',
    description: 'Organise your way finding locations into different categories so visitors can easily ' +
      'find them on temi screen. ',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiWayFinder/preview.md'
  },
  {
    imageSrc: temiEyeIcon,
    title: 'TemiEye',
    description: 'A security application for temi robot with patrolling and live video feed capabilities. ' +
      'Create patrol routes from temi\'s saved locations and monitor and record from command centre.',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiEye/preview.md'
  },
];
