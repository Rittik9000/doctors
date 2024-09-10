import { useGetAllDeptsQuery } from "@/customHooks/cms.query.hooks";
import {
  Box,
  Grid2,
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import DepartmentDoctors from "../departmentDoctors/DepartmentDoctors";

const Departments = () => {
  const [selectedDept, setSelectedDept]   =  useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (dept: any) => {
    setSelectedDept(dept);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const { data: depts, isLoading } = useGetAllDeptsQuery();
  // console.log(depts);

  return (
    <Box p={{ xs: 0, md: 2 }} sx={{borderRadius:'13px', mx:{xs:0, md:2}, backgroundColor:'#90e0ef', mt:2}}>
        <Typography variant="h4" m={2}>Departments</Typography>
        {isLoading?(
           <Grid2 container width="100%" alignItems="center" justifyContent="center" >
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
           </Grid2>
    ):(
    <Grid2 container width="100%" alignItems="center" justifyContent="center" >
        {depts?.data.map((item) => {
          return (
            <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}} key={item._id}>
              <Card variant="outlined" sx={{transition: 'transform 0.3s ease-in-out','&:hover':{transform: 'scale(1.1)'}}}>
                <React.Fragment>
                  <CardContent>
                    <Typography variant="h5" component="div">{item.departmentName}</Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      Assigned Doctors: {item.doctor_id.length}
                    </Typography>
                    <Accordion sx={{display:{xs:'none', md:'block'}}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Description
                    </AccordionSummary>
                    <AccordionDetails>
                    {item.description}
                    </AccordionDetails>
                </Accordion>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>{handleOpen({id: item._id, name: item.departmentName})}}>See appointed Doctors</Button>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>)}
      {selectedDept && (
        <DepartmentDoctors
          open={open}
          handleClose={handleClose}
          dept={selectedDept}
        />
      )}
    </Box>
  );
};

export default Departments;
