import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import blogs from './blog_info';
import BlogCard from './blog_card';

import { useBlogStyles } from './blog_card_style.js';
const BlogSection = (props) => {
  const classes = useBlogStyles();
  return (
    <div id="blog" container className={classes.root}>
      <Typography className={classes.header} variant="h4" component="h4">
        Blog
      </Typography>
      <Grid container spacing={6}>
        {blogs.map((blog) => { return <BlogCard {...blog} />})}
      </Grid>
    </div>

  );
};

export default BlogSection;
