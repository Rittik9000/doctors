import { useForm } from "react-hook-form";
import { IContactUsPayload } from '@/typescript/cms.interface';
import { Box, Grid2, Paper,Typography, TextField, Button } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react'
import styles from '@/styles/auth.module.css'; 
import { useContactUsMutation } from "@/customHooks/cms.query.hooks";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
    const Map = dynamic(() => import('@/components/map/Map'), { ssr: false });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IContactUsPayload>();

    const { mutate, isPending, isSuccess } = useContactUsMutation();
    const onSubmit = (formData: IContactUsPayload) => {
      const formdata = new URLSearchParams();
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("topic",formData.topic);
      formdata.append("phone",formData.phone);
      formdata.append("msg",formData.msg)
      mutate(formdata.toString());
      if(isSuccess){
        toast.success("contact created successfully");
      }
    };
  return (
    <>
    <ToastContainer/>
    <Grid2 container width='100%' p={2} spacing={2}>
        <Grid2 size={{xs:12, md:6}}>
            <Map/>
        </Grid2>
        <Grid2 size={{xs:12, md:6}}>
            <Paper
        elevation={6}
        sx={{
          px: 4,
          py: 3,
          width: '100%',
          textAlign: 'center',
          animation:`${styles['fade-up']} 0.5s`
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("name", {
                  required: "First name is required",
                })}
                label="Name"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                label="Your Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
              <TextField
                {...register("topic", {
                  required: "First name is required",
                })}
                label="Topic"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.topic}
                helperText={errors.topic?.message}
              />
              <TextField
                {...register("phone", {
                  required: "phone no is required",
                })}
                label="Phone no"
                type="number"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                {...register("msg", {
                  required: "First name is required",
                })}
                label="Message"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.msg}
                helperText={errors.msg?.message}
              />
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
                sx={{ marginTop: 2 }}
              >
                {isPending ? 'Loading...' : 'Sign up'}
              </Button>
            </form>
      </Paper>
        </Grid2>
    </Grid2>
    </>
  )
}

export default Index
