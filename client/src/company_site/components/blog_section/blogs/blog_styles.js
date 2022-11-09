import { makeStyles } from "@material-ui/styles";

const BlogStyles = makeStyles((theme) => ({
  blogContainer: {
    width: '100%',
    padding: '20px',
    alignContent: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    '@media (min-width: 940px)': {
      paddingLeft: '20vw',
      paddingRight: '20vw',
    }
  },
  blogTitle: {
    paddingTop: '30px',
    fontWeight: 'bold',
  },
  blogHeader: {
    paddingBottom: '10px',
  },
  blogText: {
    paddingBottom: '40px',
    textAlign: 'justify'
  },
  blogImage: {
    // width: '100%',
    maxWidth: '100%', 
    borderRadius: '20px'
  },
  doubleImage: {
    // height: '100%',
    maxWidth: '100%',
    borderRadius: '20px'
  },
  DoubleImageContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }
}));

export default BlogStyles;