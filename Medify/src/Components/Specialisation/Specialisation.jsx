import { Button, Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from "./Specialisation.module.css"

const Specialisation = () => {

    const data = [1,2,3,4,5,6,7,8];

    return(
        <Box className={styles.container}>
            <Container disableGutters className={styles.insidecontainer}>
                <Typography gutterBottom className={styles.text}>
                    Find by specialisation
                </Typography>
                <Grid className={styles.grid} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((_, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4, lg: 3 }}>
                        <Box className={styles.card}>{index + 1}</Box>
                    </Grid>
                    ))}
                </Grid>
                <Button className={styles.btn}>View All</Button>
            </Container>
        </Box>
    );
}
export default Specialisation;