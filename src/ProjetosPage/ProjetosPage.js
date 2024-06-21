import styles from './ProjetosPage.module.css';
import { MdWorkHistory } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import IgaoLogo from '../assets/igao-logo.png';
import MarkinhosLogo from '../assets/Markinhos-logo.png'
import { RiTimerFill } from "react-icons/ri";

const ProjetosPage = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('contact'); // Ajuste o ID para a próxima seção desejada
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles.projetosPage}>
            <div className={styles.projetosContainer}>
                <div className={styles.projetoTitleContainer}>
                    <h1 className={styles.projetoTitle}>
                        Projetos
                    </h1>
                    <div className={styles.subtitleContainer}>
                        <h4 className={styles.projetoSubtitle}>
                            ./Conheça meu trabalho
                        </h4>
                        <p className={styles.workIcon}>
                            <MdWorkHistory />
                        </p>
                    </div>

                </div>
                <div className={styles.work}>

                    <div className={styles.workContainer}>
                        <div className={styles.workContainerTop}>
                            <img src={IgaoLogo} className={styles.workContainerImage} alt='workContainerImage' />
                            <h1 className={styles.workContainerTitle}>
                                Igor Cassiano
                            </h1>
                        </div>
                        <div className={styles.workContainerBottom}>
                            <p className={styles.workContainerSubtitle}>
                                WebSite
                            </p>
                            <a className={styles.workContainerLink} href='https://igaolinks.vercel.app/' target='blank'>
                                https://igaolinks.vercel.app/
                            </a>
                        </div>
                    </div>

                    <div className={styles.workContainer}>
                        <div className={styles.workContainerTop}>
                            <img src={MarkinhosLogo} className={styles.workContainerImage} alt='workContainerImage' />
                            <h1 className={styles.workContainerTitle}>
                                Markinhos Costa
                            </h1>
                        </div>
                        <div className={styles.workContainerBottom}>
                            <p className={styles.workContainerSubtitle}>
                                Cartão de visita digital
                            </p>
                            <a className={styles.workContainerLink} href='https://markinhos-contact-link.vercel.app/' target='blank'>
                                https://markinhos-contact-link.vercel.app/
                            </a>
                        </div>
                    </div>

                    <div className={styles.workContainer}>
                        <div className={styles.workContainerTop}>
                            <p className={styles.timeIcon}>
                               <RiTimerFill />
                            </p>
                            <h1 className={styles.workContainerTitle}>
                                Can be you!
                            </h1>
                        </div>
                        <div className={styles.workContainerBottom}>
                            <p className={styles.workContainerSubtitle}>
                                Loading
                            </p>
                            {/* <a className={styles.workContainerLink} href='#'>
                                https://seusite.com.br
                            </a> */}
                        </div>
                    </div>

                    
                    <div className={styles.workContainer}>
                        <div className={styles.workContainerTop}>
                            <p className={styles.timeIcon}>
                               <RiTimerFill />
                            </p>
                            <h1 className={styles.workContainerTitle}>
                                Can be you!
                            </h1>
                        </div>
                        {/* <div className={styles.workContainerBottom}>
                            <p className={styles.workContainerSubtitle}>
                                Loading
                            </p>
                            <a className={styles.workContainerLink} href='#'>
                                https://seusite.com.br
                            </a>
                        </div> */}
                    </div>
                    {/* 
                <div className={styles.workContainer}>
                    <div className={styles.workContainerTop}>
                    <img src={IgaoLogo} className={styles.workContainerImage} alt='workContainerImage'/>
                        <h1 className={styles.workContainerTitle}>
                            Igor Cassiano
                        </h1>
                    </div>
                    <div className={styles.workContainerBottom}>
                        <p className={styles.workContainerSubtitle}>
                            WebSite
                        </p>
                        <a className={styles.workContainerLink}>
                        https://igaolinks.vercel.app/
                        </a>
                    </div>
                </div> */}



                    {/* <div className={styles.workContainerPc}>
                    <div className={styles.workContainerTop}>
                    <img src={IgaoLogo} className={styles.workContainerImage} alt='workContainerImage'/>
                        <h1 className={styles.workContainerTitle}>
                            Igor Cassiano
                        </h1>
                    </div>
                    <div className={styles.workContainerBottom}>
                        <p className={styles.workContainerSubtitle}>
                            WebSite
                        </p>
                        <a className={styles.workContainerLink}>
                        https://igaolinks.vercel.app/
                        </a>
                    </div>
                </div>

                
                <div className={styles.workContainerPc}>
                    <div className={styles.workContainerTop}>
                    <img src={IgaoLogo} className={styles.workContainerImage} alt='workContainerImage'/>
                        <h1 className={styles.workContainerTitle}>
                            Igor Cassiano
                        </h1>
                    </div>
                    <div className={styles.workContainerBottom}>
                        <p className={styles.workContainerSubtitle}>
                            WebSite
                        </p>
                        <a className={styles.workContainerLink}>
                        https://igaolinks.vercel.app/
                        </a>
                    </div>
                </div>

                
                <div className={styles.workContainerPc}>
                    <div className={styles.workContainerTop}>
                    <img src={IgaoLogo} className={styles.workContainerImage} alt='workContainerImage'/>
                        <h1 className={styles.workContainerTitle}>
                            Igor Cassiano
                        </h1>
                    </div>
                    <div className={styles.workContainerBottom}>
                        <p className={styles.workContainerSubtitle}>
                            WebSite
                        </p>
                        <a className={styles.workContainerLink}>
                        https://igaolinks.vercel.app/
                        </a>
                    </div>
                </div> */}


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

export default ProjetosPage;