import TemiPreview from './temp/tokyo.jpg';

import SteamiPreview from '../../images/products/steami_preview.png';
import SteamiDemo from '../../images/products/steami_demo.mp4';

import SnapFitPreview from '../../images/products/snap_fit_tray_preview.png';
import SnapFitDemo from '../../images/products/snap_fit_tray_demo.mp4';

import PesGuardPreview from '../../images/products/pes_guard_preview.png';
import PesGuardDemo from '../../images/products/pes_guard_demo.mp4';

import IaqXPreview from '../../images/products/iaq_x_preview.png';
import IaqXDemo from '../../images/products/iaq_x_demo.mp4';

import TrayRunnerPreview from '../../images/products/tray_runner_preview.png';
import TrayRunnerDemo from '../../images/products/tray_runner_demo.mp4';

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
    demoVideo: SteamiDemo,
    type: null,
  },
  {
    title: 'Snap-Fit Tray',
    description: 'Attachable tray for item delivery',
    cardImg: SnapFitPreview,
    demoVideo: SnapFitDemo,
    type: null,
  },
  {
    title: 'PesGuard',
    description: 'Module that performs administrative tasks for entry',
    cardImg: PesGuardPreview,
    demoVideo: PesGuardDemo,
    type: null,
  },
  {
    title: 'IAQ+X',
    description: '',
    cardImg: IaqXPreview,
    demoVideo: IaqXDemo,
    type: null,
  },
  {
    title: 'Tray Runner',
    description: 'Autonomous tray return service',
    cardImg: TrayRunnerPreview,
    demoVideo: TrayRunnerDemo,
    type: null,
  },
]

export default productData;