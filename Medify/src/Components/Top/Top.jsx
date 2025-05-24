import styles from "./Top.module.css";

import Box from '@mui/material/Box';


const Top = () => {
    
    return(
        <Box className={styles.countainer}>
            <span>
                The health and well-being of our patients and their 
                health care team will always be our priority, 
                so we follow the best practices for cleanliness.
            </span>
        </Box>
    );
};

export default Top;