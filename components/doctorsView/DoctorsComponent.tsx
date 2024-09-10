import {
  Stack,
  Box,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid2,
  useMediaQuery,
  useTheme,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAllDoctorList } from "@/customHooks/cms.query.hooks";
import DoctorDetails from "../doctorDetails/DoctorDetails";
import Link from "next/link";

// Ensure to define the Doctor type or interface if not already defined
interface doctorDeptDetails {
  departmentName: string;
}
interface Doctor {
  _id: number;
  name: string;
  department_details: doctorDeptDetails[];
  aperture_time: string;
  departure_time: string;
  image:string
}

const DoctorsComponent: React.FC = () => {
  const [slicer, setSlicer] = useState<number>(0);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (doctor: any) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const { data: allDoctors, isLoading: isDoctorsLoading } = useAllDoctorList();
  const theme = useTheme();
  const isMdOrUpper = useMediaQuery(theme.breakpoints.up("md"));
  // console.log(allDoctors?.data);

  const handlePrev = () => {
    setSlicer((prev) => Math.max(prev - (isMdOrUpper ? 3 : 1), 0));
  };

  const handleNext = () => {
    setSlicer((prev) => {
      if (allDoctors?.data.length) {
        const cardsToShow = isMdOrUpper ? 3 : 1;
        return Math.min(
          prev + cardsToShow,
          allDoctors.data.length - cardsToShow
        );
      }
      return prev;
    });
  };
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, '//');
  }
  return (
    <Box
      sx={{
        p: { xs: 2, lg: 2 },
        mx: { xs: 0, lg: 2 },
        bgcolor: "#e0fbfc",
        borderRadius: "13px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={1} m={4}>
          <Typography variant="h4">Our</Typography>
          <Typography variant="h4" sx={{ color: "blue" }}>
            Doctors
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: { xs: "0.5rem", md: "1.5rem" },
            "&:hover": {
              background: "none",
              color: "blue",
              borderColor: "blue",
            },
          }}
        >
          Show All
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={handlePrev} disabled={slicer === 0}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* loading handler */}

        {isDoctorsLoading?(
          <Grid2 container spacing={2} direction="row" width="80%">
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Skeleton variant="rectangular" width='400px' height='300px' />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} sx={{display:{xs:'none',md:'block'}}}>
            <Skeleton variant="rectangular" width='400px' height='300px' />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} sx={{display:{xs:'none',md:'block'}}}>
            <Skeleton variant="rectangular" width='400px' height='300px' />
            </Grid2>
          </Grid2>
        ):(
          <Grid2 container spacing={2} direction="row" width="80%">
          {allDoctors?.data
            .slice(slicer, slicer + (isMdOrUpper ? 3 : 1))
            .map((item: Doctor) => (
              <Grid2
                size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                sx={{ boxShadow: 2 }}
                key={item._id}
              >
                <Card sx={{ height: "100%", width: "100%" }}>
                  <CardMedia
                    sx={{ height: 200, backgroundSize:'cover' }}
                    image={`https://doctor-app-bp0m.onrender.com/${replaceBackslashes(item.image)}`}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#3d5a80" }}>
                      {item.department_details[0].departmentName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Aperture time: {item.aperture_time}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Departure time: {item.departure_time}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Stack alignItems="center" justifyContent="center" width="100%">
                  <Button
                    size="small"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2, p: 1 }}
                    onClick={() => handleOpen(item._id)}
                  >
                    see details
                  </Button>
                  <Link
                    href={`/appointment/${item._id}`}
                    style={{ width: "100%" }}
                  >
                    <Button
                      size="small"
                      fullWidth
                      variant="contained"
                      sx={{ p: 1 }}
                      color="secondary"
                    >
                      take an appointment
                    </Button>
                  </Link>
                </Stack>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
        </Grid2>
        )}
        <IconButton
          onClick={handleNext}
          disabled={
            slicer >= (allDoctors?.data.length || 0) - (isMdOrUpper ? 3 : 1)
          }
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      {selectedDoctor && (
        <DoctorDetails
          open={open}
          handleClose={handleClose}
          doctor={selectedDoctor}
        />
      )}
    </Box>
  );
};

export default DoctorsComponent;
