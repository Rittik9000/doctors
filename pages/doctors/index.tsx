import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { useAllDoctorList } from "@/customHooks/cms.query.hooks";
import DoctorDetails from "@/components/doctorDetails/DoctorDetails";

const Index = () => {
  const { data: allDoctors, isLoading: isDoctorsLoading } = useAllDoctorList();
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const handleOpen = (doctor: any) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, "//");
  }
  return (
    <Box sx={{ backgroundColor: "#e0fbfc", p: { xs: 1, md: 3 } }}>
      <Stack direction="row" spacing={1} m={4}>
        <Typography variant="h4">Our</Typography>
        <Typography variant="h4" sx={{ color: "blue" }}>
          Doctors
        </Typography>
      </Stack>
      <Grid container width="100%" p={{ xs: 0, md: 2 }} spacing={2}>
        {allDoctors?.data.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={item._id}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                sx={{
                  height: 140,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                image={`https://doctor-app-bp0m.onrender.com/${replaceBackslashes(
                  item.image
                )}`}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "#3d5a80" }}>
                  {item.department_details[0].departmentName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Aperture time: {item.aperture_time}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
          </Grid>
        ))}
      </Grid>
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

export default Index;
