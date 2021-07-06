// Way of creating reusable code :D

export const aboutSectionObj = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Us',
  headline: 'Exclusive distributor ' +
    'of Temi Robots in Singapore, Malaysia and Indonesia',
  description: 'Extra description',
  buttonLabel: 'Get Started',
  imgStart: true,
  img: require('../../images/about_svg.svg').default,
  alt: 'About Us Svg',
  dark: true,
  primary: true,
  darkText: true,
};

export const gallerySectionObj = {
  id: 'gallery',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Gallery',
  headline: 'Want to see more?',
  description: 'Here is a collage of Temi and our applications in action',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: require('../../images/gallery.svg').default,
  alt: 'About Us Svg',
  dark: false,
  primary: false,
  darkText: true,
};

export const contactUsSectionObj = {
  id: 'contactUs',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Contact Us',
  headline: 'To be filled',
  description: 'To be filled',
  buttonLabel: 'To be filled',
  imgStart: true,
  img: require('../../images/about_svg.svg').default,
  alt: 'About Us Svg',
  dark: false,
  primary: false,
  darkText: true,
};
