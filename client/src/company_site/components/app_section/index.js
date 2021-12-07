import React from 'react';
import { applicationsData } from './application_data';
// import './rs_applications.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { AppSectionStyles, AppCardStyles } from './app_section_style';
import SwiperCore, { Pagination, EffectCoverflow, Navigation } from 'swiper/core';
import { Grid } from '@material-ui/core';
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const AppsSection = () => {
  const sectionClasses = AppSectionStyles();
  const cardClasses = AppCardStyles();
  return (
    <div id="apps" className={sectionClasses.root}>
      <Typography className={sectionClasses.header} variant="h4" component="h4">
        Customised Applications
      </Typography>
      <Grid container spacing={3} className={sectionClasses.productsContainer}>
        {applicationsData.map((app, index) => {
          return (
            <Grid className={sectionClasses.appCard} key={index} item xs={12} sm={6} md={4} lg={2}>
              <Card className={cardClasses.root}>
                <CardHeader
                  avatar={<Avatar rounded={1} className={cardClasses.avatar} src={app.imageSrc}/>}
                  title={app.title}
                />
                <CardContent>{app.description}</CardContent>
                <CardActions>
                  <Button color="secondary" variant="outlined">View Guide</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        {/* <Swiper
        id="swiper-list"
        tag="section"
        wrapperTag="ul"
        navigation={true}
        centeredSlides={true}
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination
      >
        {applications}
      </Swiper> */}
        {/* {productData.map((item, index) => {
          return (
            <Grid className={psClasses.productCard} key={index} item xs={12} sm={6} md={4} lg={2}>
              <ProductCard
                cardImg={item.cardImg}
                title={item.title}
                description={item.description}
                onCardClick={() => {
                  openProductModal(index);
                }}
              />
            </Grid>
          );
        })} */}
      </Grid>
    </div>
  );
};

export default AppsSection;
