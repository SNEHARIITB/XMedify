import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import medifylogo from "../../assets/medifylogo.svg";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

const NavBar = () => {
    return (
        <Box className={styles.countainer}>
            <Box className={styles.navicon}><img src={medifylogo} alt="Medify Logo" /></Box>
            <Box className={styles.navmenu}>
                <Typography>Find Doctors</Typography>
                <Typography>Hospitals</Typography>
                <Typography>Medicines</Typography>
                <Typography>Surgeries</Typography>
                <Typography>Software for Provider</Typography>
                <Typography>Facilities</Typography>
                
              
                <Button
                    component={Link}
                    to="/my-bookings"
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
