import TemiPreview from '../../images/products/temi.png';

import SteamiPreview from '../../images/products/steami_preview.png';
// import SteamiDemo from '../../images/products/steami_demo.mp4';

import SnapFitPreview from '../../images/products/snap_fit_tray_preview.png';
// import SnapFitDemo from '../../images/products/snap_fit_tray_demo.mp4';

import PesGuardPreview from '../../images/products/pes_guard_preview.png';
// import PesGuardDemo from '../../images/products/pes_guard_demo.mp4';

import IaqXPreview from '../../images/products/iaq_x_preview.png';
// import IaqXDemo from '../../images/products/iaq_x_demo.mp4';

import TrayRunnerPreview from '../../images/products/tray_runner_preview.png';
// import TrayRunnerDemo from '../../images/products/tray_runner_demo.mp4';

import getS3AssetUrl from '../../../util/aws_url_generator';

import TemiV3Preview from '../../images/products/temiV3.png';
import TemiPlatformPreview from '../../images/products/temi_Platform.png';
import TemiGoPreview from '../../images/products/temi_Go.png';
import TemiGoTrayPreview from '../../images/products/temi_Go\(tray\).png';

// const productData = [
//   {
//     title: 'temi',
//     description: 'Autonomous service robot',
//     cardImg: TemiPreview,
//     demoVideo: '',
//     type: null,
//   },
//   {
//     title: 'temi add-on: Steami',
//     description: 'Disinfectant spray unit',
//     cardImg: SteamiPreview,
//     demoVideo: getS3AssetUrl('steami_demo.mp4'),
//     type: null,
//   },
//   {
//     title: 'temi add-on: Snap-Fit Tray',
//     description: 'Attachable tray for item delivery',
//     cardImg: SnapFitPreview,
//     demoVideo: getS3AssetUrl('snap_fit_tray_demo.mp4'),
//     type: null,
//   },
//   {
//     title: 'PesGuard',
//     description: 'Visitor Mgt System ( FR, Safe Entry and attendance taking)',
//     cardImg: PesGuardPreview,
//     demoVideo: getS3AssetUrl('pes_guard_demo.mp4'),
//     type: null,
//   },
//   {
//     title: 'temi add-on: IAQ+X',
//     description: 'Real time indoor air quality monitoring ( temp, humidity, CO2, PM 10, PM 2.5, TVOC, CH2O)',
//     cardImg: IaqXPreview,
//     demoVideo: getS3AssetUrl('iaq_x_demo.mp4'),
//     type: null,
//   },
//   {
//     title: 'Tray Runner',
//     description: 'Autonomous tray return service',
//     cardImg: TrayRunnerPreview,
//     demoVideo: getS3AssetUrl('tray_runner_demo.mp4'),
//     type: null,
//   },
// ]

const productData = [
  {
    title: 'temi',
    description: 'Autonomous Service Robot',
    cardImg: TemiV3Preview, 
    demoVideo: '',
    type: null,
  },
  {
    title: 'temi Platform',
    description: 'Autonomous Mobility Platform',
    cardImg: TemiPlatformPreview, 
    demoVideo: '',
    type: null,
  },
  {
    title: 'temi Go (Door)',
    description: 'Autonomous Delivery Robot',
    cardImg: TemiGoPreview, 
    demoVideo: '',
    type: null,
  },
  {
    title: 'temi Go (Tray)',
    description: 'Autonomous Delivery robot',
    cardImg: TemiGoTrayPreview, 
    demoVideo: '',
    type: null,
  }
]

export default productData;