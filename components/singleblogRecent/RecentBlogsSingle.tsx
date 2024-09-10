import { useRecentBlogQuery } from '@/customHooks/cms.query.hooks'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

const RecentBlogsSingle = () => {
    const {data:recentblogs, isLoading} = useRecentBlogQuery();
    console.log(recentblogs);
    
  return (
    
    <Stack p={2} sx={{background:'#ffb3b3', borderRadius:'13px'}} spacing={2}>
        <Typography variant='h4' gutterBottom>RECENT BLOGS</Typography>
        {recentblogs?.data.map((item)=>{
            return(
                <Link href={`/blogs/${item._id}`} key={item._id}><Typography variant='h6'>{item?.title}</Typography></Link>
            )
        })
        }
    </Stack>
  )
}

export default RecentBlogsSingle
