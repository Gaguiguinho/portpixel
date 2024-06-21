import styles from './Footer.module.css';
import { FaWindows } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { SiFiles } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoIosVolumeHigh } from "react-icons/io";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContainerInto}>
                    <div className={styles.footerContainerIntoRight}>
                        <p className={styles.footerIcon}>
                            <FaWindows />
                        </p>
                        <p className={styles.footerIcon}>
                            <FaChrome />
                        </p>
                        <p className={styles.footerIcon}>
                            <SiFiles />
                        </p>
                    </div>
                    <div className={styles.footerContainerIntoMid}>
                        <p className={styles.copyIcon}>
                            <FaRegCopyright />
                        </p>
                        <p className={styles.footerParagraph}>
                         <strong>Igaoooo</strong>
                        </p>
                    </div>
                    <div className={styles.footerContainerIntoLeft}>
                        <p className={styles.footerIcon}>
                            <RiComputerLine />
                        </p>
                        <p className={styles.footerIcon}>
                            <IoIosVolumeHigh />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;