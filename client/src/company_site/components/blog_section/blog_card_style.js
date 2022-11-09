import { makeStyles } from '@material-ui/styles';

export const useBlogStyles = makeStyles((theme) => ({
  root: {
    padding: '24px',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    padding: '30px',
  },
}));

export const useBlogCardStyles = makeStyles((theme) => ({
  blogButton: {
    display: 'flex',
    alignContent: 'center',
    // maxHeight: '150px',
    borderRadius: '30px',
    textDecoration: 'none',
    backgroundColor: '#424242',
    border: 'transparent',
    cursor: 'pointer',
    transition: "border-color 0.5s, background-color 0.5s",
    overflow: 'hidden',
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      backgroundColor: '#000',
    },
  },
  blogItem: {
    width: '100%',
  },
  gradient: {
    overflow: 'hidden',
    maxWidth: '20vw',
    // height: '120px'
  },
  blogImage: {
    // height: '120px',
    width: '100%',
    // left: '0',
    minHeight: '100%',
    // height: '100%',
    objectFit: 'cover',
  },
  blogText: {
    textAlign: 'left',
    textOverflow: 'clip',
  },
  blogDescription: {
    padding: '20px'
  }
}));