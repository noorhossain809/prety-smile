import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const BlogPost = (props) => {
    const { title, authorImg, author, description, date } = props.blog;
    return (
        <Grid item xs={12} sm={12} md={4}>
              <Card sx={{p:2}} className="card">
              <Box className="card-header d-flex align-items-center">
                 <img className="mx-3" src={authorImg} alt="" width="70"/>
                <Box>
                     <Typography variant="body1" style={{fontWeight:'700'}}>{author}</Typography>
                    <Typography variant="body2" className="m-0 text-secondary">{date}</Typography>
                 </Box>
            </Box>
                 <Box className="card-body">
                   <Typography variant="subtitle2" style={{fontWeight:'600'}}>{title}</Typography>
           <Typography variant="body2" className="text-secondary">{description}</Typography>
                    
           </Box>
        </Card>

        </Grid>

        // <div className="card shadow-sm">
        //     <div className="card-header d-flex align-items-center">
        //         <img className="mx-3" src={authorImg} alt="" width="70"/>
        //         <div>
        //             <h6 style={{fontWeight:'700'}}>{author}</h6>
        //             <p className="m-0 text-secondary">{date}</p>
        //         </div>
        //     </div>
        //     <div className="card-body">
        //             <h5 style={{fontWeight:'600'}}>{title}</h5>
        //             <p className="text-secondary">{description}</p>
                    
        //         </div>
        // </div>
    );
};

export default BlogPost;