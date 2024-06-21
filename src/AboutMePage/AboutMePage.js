import { CgBorderStyleSolid } from "react-icons/cg";
import { RiRectangleLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
// import { GiRingedPlanet } from "react-icons/gi";



import styles from './AboutMe.module.css';

const AboutMePage = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('projetos'); // Ajuste o ID para a próxima seção desejada
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const rainDrops = [
        { id: 1, i: 15 },
        { id: 2, i: 12 },
        { id: 3, i: 10 },
        { id: 4, i: 14 },
        { id: 5, i: 18 },
        { id: 6, i: 16 },
        { id: 7, i: 19 },
        { id: 8, i: 20 },
        { id: 9, i: 19 },
        { id: 10, i: 10 },
        { id: 11, i: 16 },
        { id: 12, i: 14 },
        { id: 13, i: 18 },
        { id: 14, i: 11 },
        { id: 15, i: 13 },
        { id: 16, i: 15 },
        { id: 17, i: 12 },
        { id: 18, i: 17 },
        { id: 1, i: 15 },
        { id: 2, i: 12 },
        { id: 3, i: 10 },
        { id: 4, i: 14 },
        { id: 5, i: 18 },
        { id: 6, i: 16 },
        { id: 7, i: 19 },
        { id: 8, i: 20 },
        { id: 9, i: 19 },
        { id: 10, i: 10 },
        { id: 11, i: 16 },
        { id: 12, i: 14 },
        { id: 13, i: 18 },
        { id: 14, i: 11 },
        { id: 15, i: 13 },
        { id: 16, i: 15 },
        { id: 17, i: 12 },
        { id: 18, i: 17 }, { id: 1, i: 15 },
        { id: 2, i: 12 },
        { id: 3, i: 10 },
        { id: 4, i: 14 },
        { id: 5, i: 18 },
        { id: 6, i: 16 },


    ];

    return (
        <div className={styles.aboutMePage}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.nuvem}>
                    <h1 className={styles.nuvemTitle}>
                        Sobre Mim
                    </h1>

                </div>
                <div className={styles.chuva}>
                    {rainDrops.map(drop => (
                        <span key={drop.id} style={{ '--i': drop.i }}></span>
                    ))}


                </div>
                <h1 className={styles.aboutMeTitle}>
                    Sobre Mim
                </h1>
                <div className={styles.paragraphContainer}>
                    <div className={styles.borderTop}>
                        <p className={styles.borderTopIcon}>
                            <CgBorderStyleSolid />
                        </p>
                        <p className={styles.borderTopIcon}>
                            <RiRectangleLine />
                        </p>
                        <p className={styles.borderTopIcon}>
                            <IoIosClose />
                        </p>
                    </div>
                    <p className={styles.aboutMeParagraph}>
                        Olá Mundo, sou Igor Cassiano,
                        carinhosamente conhecido como Igão.
                        Meu trabalho é aumentar a visiblidade
                        digital e modernizar a sua empresa
                        através de um site Web|. Quer que
                        a sua empresa seja a próxima a ser
                        exibida nos meus projetos? Mande uma
                        mensagem ;)!
                    </p>
                    <div className={styles.terminalContainer}>
                        <div className={styles.terminalTecnologh}>
                            <h1 className={styles.terminalTecnologhTitle}>
                                Terminal
                            </h1>
                            <div className={styles.iconTerminalContainer}>
                                <h5 className={styles.iconTerminalTitle}>
                                    ./Tecnologias:
                                </h5>
                                <p className={styles.iconTerminalTecnologh}>
                                    <SiTypescript />
                                </p>
                                <p className={styles.iconTerminalTecnologh}>
                                    <FaNodeJs />
                                </p>
                                <p className={styles.iconTerminalTecnologh}>
                                    <FaReact />
                                </p>
                            </div>
                            <div className={styles.paragraphTerminalContainer}>
                                <h5 className={styles.paragraphTerminalTitle}>
                                    ./O que são?:
                                </h5>
                                <p className={styles.paragraphTerminal}>
                                    São ferramentas utilizadas para construção
                                    da parte estética e lógica do site. Sendo
                                    essas citadas: TypeScript, Javascript, React.js .
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.tecnologhContainer}>
                    <h1 className={styles.tecnologhTitle}>
                        Tecnologias
                    </h1>
                    <div className={styles.iconTecnologhContainer}>
                        <p className={styles.iconTecnologh}>
                            <SiTypescript />
                        </p>
                        <p className={styles.iconTecnologh}>
                            <FaNodeJs />
                        </p>
                        <p className={styles.iconTecnologh}>
                            <FaReact />
                        </p>
                    </div>
                    <div className={styles.questContainer}>
                        <p className={styles.questParagraph}>
                            O que são tecnologias
                        </p>
                        <p className={styles.questIcon}>
                            <BsFillPatchQuestionFill />
                        </p>

                    </div>

                </div>
                <div className={styles.scrollContainer} onClick={scrollToNextSection}>
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

export default AboutMePage;