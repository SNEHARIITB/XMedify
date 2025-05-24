import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Add01 from "../../assets/de8624e639f85edb6078e19d7a6e7fdbb9054f70.png";
import Add02 from "../../assets/b28493da72ad49e23d6d55549e1b5970acfba4c0.png";
import styles from "./AddArea.module.css";

const AddArea = () => {

    return(
        <Container className={styles.container}>
            
            <Box className={styles.boximg}>
                <Box className={styles.card}><img src={Add01} alt="" /></Box>
                <Box className={styles.card}><img src={Add02} alt="" /></Box>
                <Box className={styles.card}><img src={Add01} alt="" /></Box>
            </Box>
        </Container>
    );
}
export default AddArea;