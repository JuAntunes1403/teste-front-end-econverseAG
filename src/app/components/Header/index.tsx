'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';


const Header = () => {
  const categories = [
    "TODAS CATEGORIAS",
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTOS",
    "OFERTAS DO DIA",
    "ASSINATURA"
  ];
  const [activeCategory, setActiveCategory] = useState(5);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    alert(`Você pesquisou por: ${inputValue}`);
  };

  return (
    <header className={styles.header}>
      <ul className={styles.topList}>
        <li>
          <Image src="/assets/icons/header/Compra-segura.svg" alt="" height={20} width={20} />
          <span>Compra <strong>100% segura</strong></span>
        </li>
        <li>
          <Image src="/assets/icons/header/Truck.svg" alt="" height={20} width={20} />
          <span><strong>Frete grátis</strong> acima de R$ 200</span>
        </li>
        <li>
          <Image src="/assets/icons/header/CreditCard.svg" alt="" height={20} width={20} />
          <span><strong>Parcele</strong> suas compras</span>
        </li>
      </ul>
      <hr />
      <section className={styles.topBar}>
        <div className={styles.logo}>
        <Image className={styles.icon} src="/assets/logo.svg" alt="" height={60} width={139} />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="O que você está buscando?" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleSearch}>
              <Image className={styles.icon} src="/assets/icons/header/Lupa.svg" alt="" height={28} width={28} />
            </button>
          </div>
        </div>
        <ul className={styles.icons}>
          <button>
            <Image className={styles.icon} src="/assets/icons/header/Caixinha.svg" alt="Ícone de Caixinha" height={24} width={24} />
          </button>
          <button>
            <Image className={styles.icon} src="/assets/icons/header/Favoritos.svg" alt="Ícone de Favoritos" height={24} width={24} />
          </button>
          <button>
            <Image className={styles.icon} src="/assets/icons/header/Conta.svg" alt="Ícone de Conta" height={24} width={24} />
          </button>
          <button>
            <Image className={styles.icon} src="/assets/icons/header/Carinho.svg" alt="Ícone de Carrinho" height={24} width={24} />
          </button>
        </ul>
      </section>
      <hr />
      <nav className={styles.navbar}>
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className={activeCategory === index ? styles.active : ''}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
