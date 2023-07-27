import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Task(props) {
  const [expanded, setExpanded] = useState(false);
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null)
  const handleOpen = (i) => {
    setModalData(data[i])
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = (i) => {
    let newArr = [...data]
    newArr[i].open = !newArr[i].open
    setdata([...newArr])
  };



  useEffect(()=>{
    console.log(props.card.map((data) => ({...data,toggle:true})))
    setdata(props.card.map((data) => ({...data,open:false})))
  },[props])

  return (
    <>
    <div className="row">
    {data.map((data, i) => (
        <Card key={i} className="m-4 h-100 " sx={{ maxWidth: 320 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {data.Owner[0]}
              </Avatar>
            }
            title={data.Owner}
            subheader={data.Date}
            
          ></CardHeader>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.Title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="contained" color={data.Status==="Pending"?"success":data.Status==="Success"?"success":"error"}>{data.Status}</Button>
            <Button variant="contained" className="mx-2" color={"secondary"} onClick={()=>handleOpen(i)}>Edit</Button>

            <ExpandMore
              expand={data.open}
              onClick={()=>handleExpandClick(i)}
              aria-expanded={data.open}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={data.open} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{data.Des}</Typography>
              
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
{modalData&&(
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...style, width: 350 }}>
    <h2 id="parent-modal-title">Edit Task : {modalData.Owner}</h2>
    <br/>
    <TextField fullWidth  id="outlined-basic" label="Task" variant="outlined" value={modalData.Title} />
    <br/>
    <br/>

    <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth 
          defaultValue={modalData.Des}
        />
  </Box>
</Modal>
)}


    </>
  );
}

export default Task;
