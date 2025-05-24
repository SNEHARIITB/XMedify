import styles from "./Hero.module.css";
import Box from '@mui/material/Box';
import NavBar from "../NavBar/NavBar";
import Heroimg from "../../assets/NicePng_doctor-png_336282 1.png"
import { Button, Container, Typography } from "@mui/material";
//import Button from "../Button/Button";

const Hero = () => {

    return(
        <Box className={styles.herocontainer}> 
            <NavBar/>
            <Container>
            <Box className={styles.heroblock}>
                    <Box>
                    <Typography className={styles.herocontent}>
                        Skip the travel! Find Online 
                        <br />
                        <span>Medical</span> <span id={styles.centers}>Centers</span>
                    </Typography>
                    <Typography className={styles.herosub} >Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
                    <Button className={styles.btn}>Find Centers</Button>
                    </Box>
                    <Box>
                        <img src={Heroimg} alt="" />
                    </Box>
                </Box>
            </Container>
        </Box>

    );
}
export default Hero;