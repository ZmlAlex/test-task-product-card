const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '540px',
  tabletM: '768px',
  laptopS: '1024px',
  laptopM: '1220px',
  laptopL: '1440px',
  desktopS: '2560px',
};

export const device = {
  // min width
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletM})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  // max height
  horizontalPhones: `(max-height: ${size.mobileM})`,
};
