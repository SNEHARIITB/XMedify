import { Button } from "@mui/material";
import styles from "./Button.module.css"
const button = ({text}) => {

    return(
        <Button className={styles.btn}>
            {text}
        </Button>
    );
}
export default button;