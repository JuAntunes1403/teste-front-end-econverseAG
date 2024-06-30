import Image from 'next/image';
import styles from './ProductItem.module.scss';
import { formatValue } from '@/app/utils/formatValue';
import { Product } from '@/app/interfaces/Product';

interface ProductItemProps {
  product: Product,
  handleBuyBtn: (selectedProduct: Product) => void
}

export default function ProductItem({ product, handleBuyBtn }: ProductItemProps) {
  return (
    <section className={styles.productContainer}>
      <Image className={styles.productContainerImage} src={product.photo} width={300} height={80} alt={`${product.productName} image`} />
      <p className={styles.productContainerTitle}>{product.productName}</p>
      <p className={styles.productContainerPriceOriginal}>{formatValue(+product.price * 1.1)}</p>
      <p className={styles.productContainerPrice}>{formatValue(product.price)}</p>
      <p className={styles.productContainerPriceInstallments}>ou 2x de {formatValue(+product.price / 2)} sem juros</p>
      <button className={styles.productContainerFooterBtn} onClick={() => handleBuyBtn(product)}>
        <span className={styles.productContainerFooterText}>Comprar</span>
      </button>
    </section>
  );
};
