import React from 'react';

import temiPatrolIcon from '../../images/app_logos/temi_patrol_icon.png';
import temiConciergeIcon from
  '../../images/app_logos/temi_ohs_concierge_icon.png';
// import temiMuseumIcon from '../../images/app_logos/temi_museum_icon.png';
import receptemistIcon from '../../images/app_logos/receptemist_icon.png';

import './rs_applications.css';

const AppsSection = () => {
  return (
    <div className="apps-container" id="applications">
      <h1 id="apps-h1">Our Applications</h1>
      <div id="apps-wrapper">
        <div className="app-card">
          <img className="app-icon" src={temiPatrolIcon}/>
          <h2 className="app-h2">Temi Patrol</h2>
          <p className="app-p">Mask detection application</p>
        </div>
        <div className="app-card">
          <img className="app-icon" src={temiConciergeIcon}/>
          <h2 className="app-h2">Temi OHS Concierge</h2>
          <p className="app-p">Concierge Application for NUS OHS</p>
        </div>
        <div className="app-card">
          <img className="app-icon" src={receptemistIcon}/>
          <h2 className="app-h2">Receptemist</h2>
          <p className="app-p">Receptionist Temi Application</p>
        </div>
        {/* <AppCard>
          <AppIcon src={temiMuseumIcon}/>
          <AppH2>National Museum Concierge</AppH2>
          <AppP>Concierge Application for National Museum</AppP>
        </AppCard> */}
      </div>
    </div>
  );
};

export default AppsSection;
