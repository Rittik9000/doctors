import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import Head from "next/head";
import { Box, Button, Stack, Grid2, Typography } from "@mui/material";
import RotatedButton from "@/components/rotatedButton/RotatedButton";
import ScrollingText from "@/components/ updates/UpdateLog";
import DoctorsCompoent from "@/components/doctorsView/DoctorsComponent";
import Departments from "@/components/departments/Departments";
import RecentBlogs from "@/components/recentBlogs/RecentBlogs";

const inter = Inter({ subsets: ["latin"] });
const steps = [
  {imgSrc:"/images/firstStep.jpg", heading:'Online appointment', text:'access healthcare easily with our online booking'},
  {imgSrc:"/images/teleconsultation.jpg", heading:'teleconsultation', text:'consult easily with our healthcare experts easily'},
  {imgSrc:"/images/thirdStep.jpeg", heading:'Bill enquiry and payment', text:'simplyfy health care with online payments'},
  {imgSrc:"/images/fourthStep.jpg", heading:'Reports download', text:'Get your investigation reports with only one click'}
]
export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <title>the doctor app</title>
    </Head>
    <div>
      <Carousel/>
      <RotatedButton/>
      <Stack spacing={0} direction='row'>
        <Box sx={{backgroundColor:'#03045e',px:4, py:2, color:'white'}}>
          UPDATES
        </Box>
      <ScrollingText/>
      </Stack>
      <Typography variant="h4" sx={{my:4, mx:4}}>Easy apply: </Typography>
      <Grid2 container spacing={2} m={2}>
        {
          steps.map((item,idx)=>{
            return(
              <Grid2  className="md:flex bg-slate-100 rounded-xl p-8 md:p-2 dark:bg-slate-900 outline-2 divide-y divide-blue-200 border-4"  size={{md:4, lg:3}} p={3} display='flex' alignItems='center' justifyContent='center' flexDirection='column' key={item.heading} sx={{ transition: 'transform 0.3s ease-in-out','&:hover':{transform: 'scale(1.1)'}}}>
                <Image className="w-34 h-34 md:w-64 md:h-auto md:rounded-xl rounded-full mx-auto" src={item.imgSrc} alt="" width="384" height="720"/>
              <Typography variant="h6" sx={{color:'blue'}}>{item.heading}</Typography>
              <Typography variant="body2" sx={{color:'gray'}}>{item.text}</Typography>
            </Grid2>
            )
          })
        }
      </Grid2>
        <DoctorsCompoent/>
        <Departments/>
        <RecentBlogs/>
    </div>
    </>
    
  );
}
