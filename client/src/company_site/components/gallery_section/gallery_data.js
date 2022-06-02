import GuideCard from '../../images/gallery_images/autonomous_guide/guide_card.jpg';
// import GuideRes1 from '../../images/gallery_images/autonomous_guide/guide_res1.mp4';

//import EduCard from '../../images/gallery_images/education/edu_card2.jpg';
// import EduRes1 from '../../images/gallery_images/education/edu_res1.mp4';
import EduCard from '../../images/gallery_images/education/edu_card3.jpg';

import HomeCard from '../../images/gallery_images/home_office/home_office_card2.jpg';

import ConciergeCard from '../../images/gallery_images/concierge/concierge_card2.jpg';

import HealthCard from '../../images/gallery_images/healthcare/health_card.jpg';
// import HealthRes1 from '../../images/gallery_images/healthcare/health_res1.mp4';
import HealthRes2 from '../../images/gallery_images/healthcare/health_res2.jpg';

import OtherCard from '../../images/gallery_images/others/others_card2.jpg';
// import OtherRes1 from '../../images/gallery_images/others/others_res1.mp4';
// import OtherRes2 from '../../images/gallery_images/others/others_res2.mp4';

import { IMG_TYPE, VID_TYPE } from '../../../util/values';
import getS3AssetUrl from '../../../util/aws_url_generator';

const galleryData = [
  {
    title: 'Healthcare',
    description: 'Temi in the healthcare industry!',
    url: HealthCard,
    width: '34%',
    gallery: [
      {
        src: getS3AssetUrl('healthcare1.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('healthcare2.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('healthcare3.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('healthcare4.mp4'),
        type: VID_TYPE,
      },

      {
        src: getS3AssetUrl('healthcare5.mp4'),
        type: VID_TYPE,
      },

    ],
  },
  {
    title: 'Autonomous Guide',
    description: 'Temi as an Autonomous Guide!',
    url: GuideCard,
    width: '33%',
    gallery: [
      {
        src: getS3AssetUrl('autonomous_guide1.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide2.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide3.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide4.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide5.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide6.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('autonomous_guide7.mp4'),
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
        src: getS3AssetUrl('education1.jpg'),
        type: IMG_TYPE,
      },
      {
        src: getS3AssetUrl('education2.jpg'),
        type: IMG_TYPE,
      },
      {
        src: getS3AssetUrl('education3.jpg'),
        type: IMG_TYPE,
      },
      {
        src: getS3AssetUrl('education4.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('education5.mp4'),
        type: VID_TYPE,
      },
    ],
  },
  {
    title: 'Home / Office',
    description: 'Temi at Home and Office! ',
    url: HomeCard,
    width: '34%',
    gallery: [
      {
        src: getS3AssetUrl('home_office1.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('home_office2.mov'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('home_office3.mov'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('home_office4.mp4'),
        type: VID_TYPE,
      },

    ],
  },
  {
    title: 'Concierge',
    description: 'Temi in the concierge industry!',
    url: ConciergeCard,
    width: '33%',
    gallery: [
      {
        src: getS3AssetUrl('concierge_1.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('concierge_2.mp4'),
        type: VID_TYPE,
      },

      {
        src: getS3AssetUrl('concierge_3.mp4'),
        type: VID_TYPE,
      },

      {
        src: getS3AssetUrl('concierge_4.mp4'),
        type: VID_TYPE,
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
        src: getS3AssetUrl('others1.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others2.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others3.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others4.mov'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others5.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others6.mp4'),
        type: VID_TYPE,
      },
      {
        src: getS3AssetUrl('others7.mp4'),
        type: VID_TYPE,
      },
    ],
  },
];

export default galleryData;
