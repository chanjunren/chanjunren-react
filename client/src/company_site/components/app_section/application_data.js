import temiMuseumIcon from '../../images/app_logos/temi_museum_icon.png';
import receptemistIcon from '../../images/app_logos/receptemist_icon.png';
import temiAnnouncerIcon from '../../images/app_logos/temi_announcer_icon.png';
import temiConciergeIcon from '../../images/app_logos/temi_concierge_icon.png';
import temiWayFinderIcon from '../../images/app_logos/temi_wayfinder_icon.png';
import temiEyeIcon from '../../images/app_logos/temi_eye_icon.png';

export const applicationsData = [
  {
    imageSrc: receptemistIcon,
    title: 'Receptemist',
    description: 'Receptionist Application designed to serve clients. ',
  },
  {
    imageSrc: temiMuseumIcon,
    title: 'Autonomous Tour Guide',
    description: 'Tour Guide for National Gallery Singapore customised to introduce art exhibits to '+
    'visitors. Tours can be requested as required without human interaction.',
    url: 'https://www.youtube.com/watch?v=tB3oNlf_sJg'
  },
  {
    imageSrc: temiConciergeIcon,
    title: 'TemiConcierge',
    description: 'Concierge Application that utilises temi\'s capabilities. Concierge services covered '+
    'include teleconferencing, directory, promotion & marketing materials plus many more.',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiConcierge/preview.md'
  },
  {
    imageSrc: temiAnnouncerIcon,
    title: 'TemiAnnouncer',
    description: 'Announcer Application to repeatedly announce customised speeches along a patrol route. '+
    'Create custom routes from temi\'s saved locations to announce. ',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiAnnouncer/preview.md'
  },
  {
    imageSrc: temiWayFinderIcon,
    title: 'TemiWayFinder',
    description: 'Wayfinding application to direct users to saved locations before automtically returning '+
    'back home. Custom speeches can be announced upon arrival at each location before return.',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiWayFinder/preview.md'
  },
  {
    imageSrc: temiEyeIcon,
    title: 'TemiEye',
    description: 'A security application for Temi robot with patrolling and live video feed capabilities. '+
    'Create patrol routes from temi\'s saved locations and monitor from Command and Control.',
    url: 'https://github.com/temideveloper/Rs-App-Guides/blob/master/TemiEye/preview.md'
  },
];
