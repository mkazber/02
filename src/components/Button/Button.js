import React from "react";
import styles from './Button.module.scss'

const Button = ({children, href}) => (
    <>
    {
        href ? (
            <a
                href={href}
                target="_blank"
                className={styles.button}
                rel="noopener noreferrer"
            >
            {children}
            </a> 
        ) : (
            <Button className={styles.button}>
                {children}
            </Button>
            )
    }
    </>
);

export default Button;