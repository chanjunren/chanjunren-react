import TemiPreview from '../../images/products/temi_preview.png';

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

const productData = [
  {
    title: 'temi',
    description: 'Autonomous service robot',
    cardImg: TemiPreview,
    demoVideo: '',
    type: null,
  },
  {
    title: 'Steami',
    description: 'Disinfectant spray unit',
    cardImg: SteamiPreview,
    demoVideo: getS3AssetUrl('steami_demo.mp4'),
    type: null,
  },
  {
    title: 'Snap-Fit Tray',
    description: 'Attachable tray for item delivery',
    cardImg: SnapFitPreview,
    demoVideo: getS3AssetUrl('snap_fit_tray_demo.mp4'),
    type: null,
  },
  {
    title: 'PesGuard',
    description: 'Visitor Mgt System ( FR, Safe Entry and attendance taking)',
    cardImg: PesGuardPreview,
    demoVideo: getS3AssetUrl('pes_guard_demo.mp4'),
    type: null,
  },
  {
    title: 'IAQ+X',
    description: 'Real time indoor air quality monitoring ( temp, humidity, CO2, PM 10, PM 2.5, TVOC, CH2O)',
    cardImg: IaqXPreview,
    demoVideo: getS3AssetUrl('iaq_x_demo.mp4'),
    type: null,
  },
  {
    title: 'Tray Runner',
    description: 'Autonomous tray return service',
    cardImg: TrayRunnerPreview,
    demoVideo: getS3AssetUrl('tray_runner_demo.mp4'),
    type: null,
  },
]

export default productData;