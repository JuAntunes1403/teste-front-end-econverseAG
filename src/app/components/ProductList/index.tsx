'use client'

import { Product } from '@/app/interfaces/Product';
import ProductItem from "../ProductItem";
import styles from './ProductList.module.scss';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from 'next/image';
import Modal from '../Modal';
import { apiError } from '@/app/utils/genericToast';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(products.length / 4);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/products');
      setProducts(data.products);
    } catch (error) {
      apiError();
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * 4;
  const selectedProducts = products.slice(startIndex, startIndex + 4);

  const [openedModal, setOpenedModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  const handleBuy = (selectedProduct: Product) => {
    setOpenedModal(true);
    setSelectedItem(selectedProduct);
  };

  const handleCloseModal = () => {
    setOpenedModal(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
          <section className={styles.carouselContainer}>
            <button className={styles.btnPrev} onClick={handlePrev} disabled={currentPage === 0} aria-label="Previous Page">
              <Image src="/assets/icons/Seta.svg" alt="Seta para esquerda" width={20} height={34} />
            </button>
            <div className={styles.productListContainer}>
              {selectedProducts.map((product) => (
                <ProductItem key={product.productName} product={product} handleBuyBtn={handleBuy} />
              ))}
            </div>
            <button className={styles.btnNext} onClick={handleNext} disabled={currentPage === totalPages - 1} aria-label="Next Page">
              <Image src="/assets/icons/Seta.svg" alt="Seta para direita" width={20} height={34} />
            </button>
          </section>
      </div>
      {openedModal && <Modal product={selectedItem} handleClose={handleCloseModal}/>}
    </>
  );
};