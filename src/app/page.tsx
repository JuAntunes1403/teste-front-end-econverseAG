import ProductList from "./components/ProductList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './page.module.scss';

// Categories Images
import {
  Tecnologia,
  Supermercado,
  Bebidas,
  Ferramentas,
  Saude,
  EsportesFitness,
  Moda
} from '../../public/assets/icons/category';

import Head from 'next/head';
import Image from 'next/image';

const IndexPage = () => {

  const categories = [
    { name: 'Tecnologia', icon: Tecnologia },
    { name: 'Supermercado', icon: Supermercado },
    { name: 'Bebidas', icon: Bebidas },
    { name: 'Ferramentas', icon: Ferramentas },
    { name: 'Saúde', icon: Saude },
    { name: 'Esportes e Fitness', icon: EsportesFitness },
    { name: 'Moda', icon: Moda }
  ];

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home | VTEX</title>
        </Head>

        <main>
          <section className={styles.promoSection}>
            <h1>Venha conhecer nossas promoções</h1>
            <p>50% Off nos produtos</p>
            <button>Ver produto</button>
          </section>

          <section className={styles.productsSection}>
            <section className={styles.productCategories}>
              {categories.map((category) => (
                <button>
                  <Image className={styles.category} src={category.icon} alt="" height={128} width={128} />
                  <p className={styles.categoryName}>{category.name}</p>
                </button>
              ))}
            </section>
            <h1>Produtos relacionados</h1>
            <section className={styles.relatedProducts}>
              <button style={{color: '#F71963', fontWeight: 700}}>Celular</button>
              <button>Acessórios</button>
              <button>Tablets</button>
              <button>Notebooks</button>
              <button>TVs</button>
              <button>Ver Todos</button>
            </section>

            <div className={styles.productsGrid}>
              <ProductList />
            </div>
          </section>

          <section className={styles.partnersSection}>
            <div className={styles.partnerItems}>
              <div className={styles.partnerItem}>
                <h2>Parceiros</h2>
                <h3>Lorem ipsum dolor sit amet</h3>
                <button>Confirma</button>
              </div>
              <div className={styles.partnerItem}>
                <h2>Parceiros</h2>
                <h3>Lorem ipsum dolor sit amet</h3>
                <button>Confirma</button>
              </div>
            </div>
          </section>

          <section className={styles.relatedProductsSection}>
            <h1>
              Produtos Relacionados
            </h1>
            <a href="#">Ver todos</a>
            <div className={styles.partnerItems}>
              <div className={styles.partnerItem}>
                <h2>Produtos</h2>
                <h3>Lorem ipsum dolor sit amet</h3>
                <button>Confirma</button>
              </div>
              <div className={styles.partnerItem}>
                <h2>Produtos</h2>
                <h3>Lorem ipsum dolor sit amet</h3>
                <button>Confirma</button>
              </div>
            </div>
          </section>

          <section className={styles.brandsSection}>
            <h1>Navegue por marcas</h1>
            <div className={styles.brandItems}>
              <div className={styles.brandItem}>
                <Image height={100} width={100} alt='VTEX Logo' src='/assets/logo.svg' />
              </div>
              <div className={styles.brandItem}>
                <Image height={100} width={100} alt='VTEX Logo' src='/assets/logo.svg' />
              </div>
              <div className={styles.brandItem}>
                <Image height={100} width={100} alt='VTEX Logo' src='/assets/logo.svg' />
              </div>
              <div className={styles.brandItem}>
                <Image height={100} width={100} alt='VTEX Logo' src='/assets/logo.svg' />
              </div>
            </div>
          </section>
        </main>
      </div>
      <ToastContainer />
    </>
  );
};

export default IndexPage;
