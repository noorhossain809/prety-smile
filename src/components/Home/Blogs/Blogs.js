import React from 'react';
import wilson from '../../../images/william.png';
import ema from '../../../images/ema.png';
import Aliza from '../../../images/Aliza.png'
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'
import { Container, Typography } from '@mui/material';


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : ema,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : Aliza,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <Container className="blogs" sx={{mt:10}}>
            
            <div className="section-header text-center">
            <Typography variant="h5" sx={{color: '#2dd4bf', fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase'}}>Our Blog</Typography>
            <Typography variant="h4" style={{color:'#3C4356', fontWeight: '600'}}>From Our Blog News</Typography>
        </div>
              <div className="card-deck mt-5">
                  {
                      blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                  }
              </div>
           
        </Container>
    );
};

export default Blogs;