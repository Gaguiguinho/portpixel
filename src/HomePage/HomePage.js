import styles from './HomePage.module.css'
import { FaArrowDownLong } from "react-icons/fa6";
import DinoImage from '../assets/dino.png';

const HomePage = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about-me'); // Ajuste o ID para a próxima seção desejada
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.homePage}>
            <div className={styles.homePageContainer}>
                
                <div className={styles.animationContainer}>


                    <h3 className={styles.homePageTitle}>
                        Hello Wolrd, sou
                    </h3>
                    <h1 className={styles.homePageSubtitle}>
                        Igor Cassiano
                    </h1>
                    <h2 className={styles.homePageParagraph}>
                        desenvolvedor web.
                    </h2>
                </div>
                <div className={styles.dinoContainer}>
                    <img src={DinoImage} alt='DinoImage' className={styles.dinoImage}/>
                </div>
                <div className={styles.scrollContainer} onClick={scrollToNextSection} >
                    <p className={styles.scrollParagraph}>
                        scroll
                    </p>
                    <p className={styles.scrollIcon}>
                        <FaArrowDownLong />
                    </p>
                </div>

            </div>

        </div>
    )
}

export default HomePage;