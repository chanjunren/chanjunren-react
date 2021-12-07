// Temi section
import TemiCard from '../../images/gallery_images/temi/temi_card.jpg';
import TemiRes1 from '../../images/gallery_images/temi/temi_res1.jpg';
import TemiRes2 from '../../images/gallery_images/temi/temi_res2.gif';
import TemiRes3 from '../../images/gallery_images/temi/temi_res3.gif';
import TemiRes4 from '../../images/gallery_images/temi/temi_res4.gif';
import TemiRes5 from '../../images/gallery_images/temi/temi_res5.gif';
import TemiRes6 from '../../images/gallery_images/temi/temi_res6.gif';

import GuideCard from '../../images/gallery_images/autonomous_guide/guide_card.jpg';
import GuideRes1 from '../../images/gallery_images/autonomous_guide/guide_res1.mp4';

import EduCard from '../../images/gallery_images/education/edu_card.jpg';
import EduRes1 from '../../images/gallery_images/education/edu_res1.mp4';

import HealthCard from '../../images/gallery_images/healthcare/health_card.jpg';
import HealthRes1 from '../../images/gallery_images/healthcare/health_res1.mp4';
import HealthRes2 from '../../images/gallery_images/healthcare/health_res2.jpg';

import OtherCard from '../../images/gallery_images/others/others_card.jpg';
import OtherRes1 from '../../images/gallery_images/others/others_res1.mp4';
import OtherRes2 from '../../images/gallery_images/others/others_res2.mp4';
import { IMG_TYPE, VID_TYPE } from '../../../util/values';

const galleryData = [
  {
    title: 'Healthcare',
    description: 'Temi in the healthcare industry!',
    url: HealthCard,
    width: '34%',
    gallery: [
      {
        src: HealthRes1,
        type: VID_TYPE,
      },
      {
        src: HealthRes2,
        type: IMG_TYPE,
      },
    ],
  },
  {
    title: 'Autonomous Guide',
    description: 'Temi in action at the National Gallery Concierge!',
    url: GuideCard,
    width: '33%',
    gallery: [
      {
        src: GuideRes1,
        type: VID_TYPE,
      },
    ],
  },
  {
    title: 'Education',
    description: 'Temi in schools!',
    url: EduCard,
    width: '33%',
    gallery: [
      {
        src: EduRes1,
        type: VID_TYPE,
      },
    ],
  },
  {
    title: 'Home / Office',
    description: 'Temi in the healthcare industry!',
    url: HealthCard,
    width: '34%',
    gallery: [
      {
        src: HealthRes1,
        type: VID_TYPE,
      },
      {
        src: HealthRes2,
        type: IMG_TYPE,
      },
    ],
  },
  {
    title: 'Concierge',
    description: 'Temi in the healthcare industry!',
    url: HealthCard,
    width: '33%',
    gallery: [
      {
        src: HealthRes1,
        type: VID_TYPE,
      },
      {
        src: HealthRes2,
        type: IMG_TYPE,
      },
    ],
  },
  
  {
    title: 'Others',
    description: 'Temi in action elsewhere!',
    url: OtherCard,
    width: '33%',
    gallery: [
      {
        src: OtherRes1,
        type: VID_TYPE,
      },
      {
        src: OtherRes2,
        type: VID_TYPE,
      },
    ],
  },
];

export default galleryData;
