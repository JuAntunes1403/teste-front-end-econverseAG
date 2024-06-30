import styles from './Footer.module.scss';
import Image from 'next/image';

import {
    Visa,
    Elo,
    Alelo,
    Dinners,
    Ifood,
    Mastercard,
    PIX,
    AmericanExpress,
    Ticket,
    Sodexo
} from '../../../../public/assets/icons/payments';

export default function Footer() {
    const paymentMethods = [
        Visa,
        Elo,
        Alelo,
        Dinners,
        Ifood,
        Mastercard,
        PIX,
        AmericanExpress,
        Ticket,
        Sodexo
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <h3>Sobre nós</h3>
                    <ul>
                        <li>Conheça</li>
                        <li>Como comprar</li>
                        <li>Indicação e desconto</li>
                    </ul>
                    <section className={styles.socialMediaList}>
                        <button><Image src="/assets/icons/social/facebook.svg" alt="Facebook logo" height={22} width={22} /></button>
                        <button><Image src="/assets/icons/social/instagram.svg" alt="Instagram logo" height={22} width={22} /></button>
                        <button><Image src="/assets/icons/social/youtube.svg" alt="Youtube logo" height={22} width={22} /></button>
                    </section>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Informações úteis</h3>
                    <ul>
                        <li>Fale conosco</li>
                        <li>Dúvidas</li>
                        <li>Prazos de entrega</li>
                        <li>Formas de pagamento</li>
                        <li>Política de privacidade</li>
                        <li>Trocas e devoluções</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Formas de pagamento</h3>
                    <ul className={styles.paymentMethodsList}>
                        {paymentMethods.map((pyMethod) => (<li>
                            <Image src={pyMethod} alt="" height={48} width={48} />
                        </li>))}
                    </ul>
                </div>
                <div className={styles.newsletterContainer}>
                    <h3>Cadastre-se e receba nossas <strong>novidades e promoções</strong></h3>
                    <span>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</span>
                    <form>
                        <input type="email" placeholder="Seu e-mail" />
                        <button>OK</button>
                    </form>
                </div>
            </div>
            <hr className={styles.divider} />
            <section className={styles.copyright}>
                <div>
                    <p>
                        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                    </p>
                    <p>
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                    </p>
                </div>
                <Image src="/assets/icons/FooterLogos.svg" alt="Econverse e VTEX logos" height={32} width={226} />
            </section>
        </footer>
    )
}