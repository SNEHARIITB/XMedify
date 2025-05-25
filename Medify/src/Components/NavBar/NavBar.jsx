import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import medifylogo from "../../assets/medifylogo.svg";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const handlebookings = () => {

        navigate(`/my-bookings`);

    };


    return (
        <Box className={styles.container}>

            <Box className={styles.navicon}><img src={medifylogo} alt="Medify Logo" /></Box>
            <Box className={styles.navmenu}>
                <Typography>Find Doctors</Typography>
                <Typography>Hospitals</Typography>
                <Typography>Medicines</Typography>
                <Typography>Surgeries</Typography>
                <Typography>Software for Provider</Typography>
                <Typography>Facilities</Typography>
                
              
                <Button
                    
                    onClick={handlebookings}
                    className={styles.btn}
                    variant="contained"
                    size="large"
                >
                    My Bookings
                </Button>
            </Box>
        </Box>
    );
}

export default NavBar;
