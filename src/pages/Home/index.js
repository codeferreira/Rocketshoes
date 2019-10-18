import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Adidas Ultraboost</strong>
        <span>$150.00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
    </ProductList>
  );
}
