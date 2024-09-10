import { Box, Button, Grid2, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { useAllBlogQuery } from '@/customHooks/cms.query.hooks';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Link from 'next/link';

const RecentBlogs:React.FC = () => {
  const {data:blogs, isLoading} = useAllBlogQuery();
  // console.log(blogs);
  function formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString); 
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);
    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th'; 
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    const day = date.getDate();
    const [weekday, dayOfMonth, month, year] = formattedDate.split(' ');
    return `${formattedTime}  ,${day}${getDaySuffix(day)} ${dayOfMonth} ${year}`;
  }
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, '//');
  }

  return (
    <Box sx={{py:2, background:'#f5f5f5', my:2, borderRadius:'13px'}} mx={{xs:0, md:2}}>
      <Typography variant='h4' m={4} sx={{fontWeight:'bolder'}}>Blogs</Typography>
    {isLoading?(
      <Grid2 container width='100%' spacing={1}>
        <Grid2 size={{xs:12}} m={2}>
          <Skeleton height='300px'/>
          <Skeleton height='300px'/>
          <Skeleton height='300px'/>
        </Grid2>
      </Grid2>
  ):(
  <Grid2 container width='100%' rowSpacing={2}>
      {
        blogs?.data.map((item)=>{
          return(
            <Grid2 size={{xs:12}} mx={2} key={item._id} sx={{transition: 'transform 0.3s ease-in-out','&:hover':{transform: 'scale(1.02)'}}}>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 justify-normal border-2">
            <Image className="w-34 h-34 md:w-auto md:h-64 md:rounded-xl rounded-xl  order-first" src={`https://doctor-app-bp0m.onrender.com/${replaceBackslashes(item.image)}`} alt="" width="904" height="720"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “{item.title}”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400 mb-2">
                  {formatDateTime(item.createdAt)}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  {item.description}
                </div>
              </figcaption>
              <Stack direction='row' spacing={2} justifyContent={{xs:'center', md:'start'}} alignItems='center'>
              <Link href={`/blogs/${item._id}`}><Button >Know more</Button></Link>
              </Stack>
            </div>
          </figure>
        </Grid2>
          )
        })
      }
    </Grid2>
  )}
    </Box>
  )
}

export default RecentBlogs
