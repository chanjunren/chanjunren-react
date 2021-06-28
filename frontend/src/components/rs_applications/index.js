import React from 'react';

import temiPatrolIcon from '../../images/app_logos/temi_patrol_icon.png';
import temiConciergeIcon from
  '../../images/app_logos/temi_ohs_concierge_icon.png';
// import temiMuseumIcon from '../../images/app_logos/temi_museum_icon.png';
import receptemistIcon from '../../images/app_logos/receptemist_icon.png';

import {
  AppsContainer,
  AppsH1,
  AppsWrapper,
  AppCard,
  AppIcon,
  AppH2,
  AppP,
} from './app_elements';

const AppsSection = () => {
  return (
    <AppsContainer id="applications">
      <AppsH1>Our Applications</AppsH1>
      <AppsWrapper>
        <AppCard>
          <AppIcon src={temiPatrolIcon}/>
          <AppH2>Temi Patrol</AppH2>
          <AppP>Mask detection application</AppP>
        </AppCard>
        <AppCard>
          <AppIcon src={temiConciergeIcon}/>
          <AppH2>Temi OHS Concierge</AppH2>
          <AppP>Concierge Application for NUS OHS</AppP>
        </AppCard>
        {/* <AppCard>
          <AppIcon src={temiMuseumIcon}/>
          <AppH2>National Museum Concierge</AppH2>
          <AppP>Concierge Application for National Museum</AppP>
        </AppCard> */}
        <AppCard>
          <AppIcon src={receptemistIcon}/>
          <AppH2>Receptemist</AppH2>
          <AppP>Receptionist Temi Application</AppP>
        </AppCard>
      </AppsWrapper>
    </AppsContainer>
  );
};

export default AppsSection;
