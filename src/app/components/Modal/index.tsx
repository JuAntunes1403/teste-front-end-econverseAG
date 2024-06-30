'use client'

import { Product } from '@/app/interfaces/Product';

export interface ProductItemProps {
    product: Product | null;
    handleClose: () => void
}

import styles from './Modal.module.scss';
import Image from 'next/image';
import { formatValue } from '@/app/utils/formatValue';
import { useState } from 'react';
import { inDevelopmentFeature } from '@/app/utils/genericToast';
import { toast } from 'react-toastify';

export default function Modal({ product, handleClose }: ProductItemProps) {

    const [quantity, setQuantity] = useState(1);

    const handleBuy = (item?: Product) => {
        toast.success(`${item?.productName} adicionado ao carrinho`);
        handleClose();
    };

    return (
        <div className={styles.modalBackdrop}>
            <section className={styles.modalContainer}>
                <Image className={styles.productContainerImage} src={product?.photo || ''} width={208} height={192} alt={`${product?.productName} image`} />
                <div>
                    <button className={styles.closeBtn} onClick={handleClose}>X</button>
                    <p className={styles.productContainerTitle}>{product?.productName}</p>
                    <p className={styles.productContainerPrice}>{formatValue(product?.price || 0)}</p>
                    <p className={styles.productContainerDescription}>{product?.descriptionShort}</p>
                    <button className={styles.productContainerSeeMore} onClick={inDevelopmentFeature}>Veja mais detalhes do produto &gt;</button>
                    <div className={styles.quantityContainer}>

                        <button className={styles.quantityBtn} onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                        <span>{quantity}</span>
                        <button className={styles.quantityBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button className={styles.modalFooterBtn} onClick={() => handleBuy(product)}>
                        <span className={styles.modalFooterText}>Comprar</span>
                    </button> 
                </div>
            </section>
        </div>
    );
}
