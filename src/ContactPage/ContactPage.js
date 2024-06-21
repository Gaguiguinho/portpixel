import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { FaMessage } from "react-icons/fa6";
import { PiCursorClickFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nome, email, telefone, assunto, mensagem } = formData;
        const message = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
        const whatsappUrl = `https://wa.me/35988347801?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.contactPageContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.contactPageTitle}>
                        Entre em contato
                    </h1>
                    <h4 className={styles.contactPageSubtitle}>
                        Vamos trabalhar juntos?
                    </h4>
                </div>
                <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <div className={styles.formTitleContainer}>
                            <h1 className={styles.formTitle}>
                                Envie uma Mensagem
                            </h1>
                            <p className={styles.formTitleIcon}>
                                <FaMessage />
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.formCorrect}>
                            <div className={styles.intoFormContainer}>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="nome"
                                        type="text"
                                        className={styles.input}
                                        placeholder='Digite seu nome'
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="nome" className={styles.label}>Nome</label>
                                </div>
                            </div>
                            <div className={styles.intoFormContainer}>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="email"
                                        type="email"
                                        className={styles.input}
                                        placeholder='Digite seu email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                </div>
                            </div>
                            <div className={styles.intoFormContainer}>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="telefone"
                                        type="tel"
                                        className={styles.input}
                                        placeholder='Digite seu telefone'
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="telefone" className={styles.label}>Telefone</label>
                                </div>
                            </div>
                            <div className={styles.intoFormContainer}>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="assunto"
                                        type="text"
                                        className={styles.input}
                                        placeholder='Digite o assunto'
                                        value={formData.assunto}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="assunto" className={styles.label}>Assunto</label>
                                </div>
                            </div>
                            <div className={styles.intoFormContainer}>
                                <div className={styles.inputContainer}>
                                    <input
                                        id="mensagem"
                                        type="text"
                                        className={styles.input}
                                        placeholder='Digite a mensagem'
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="mensagem" className={styles.label}>Mensagem</label>
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.formButton}>
                                    Enviar
                                </button>
                                <p className={styles.buttonIconClick}>
                                    <PiCursorClickFill />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.socialContainer}>
                    <h1 className={styles.socialTitle}>
                        Social
                    </h1>
                    <div className={styles.socialSubtitleContainer}>
                        <p className={styles.socialSubtitle}>
                            ./digite para pesquisar
                        </p>
                    </div>
                    <div className={styles.linkContainer}>
                        <div className={styles.linkContainerInto}>
                            <p className={styles.linkIcon}>
                                <RiInstagramFill />
                            </p>
                        </div>
                        <div className={styles.linkContainerInto}>
                            <p className={styles.linkIcon}>
                                <FaLinkedin />
                            </p>
                        </div>
                        <div className={styles.linkContainerInto}>
                            <p className={styles.linkIcon}>
                                <FaGithub />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
