import React from 'react';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/8f31b7a8e7f34c9085d1a80f009b2cc9_9366/Tenis_Ultraboost_Preto_BB6166_01_standard.jpg"
                alt="Ultraboost"
              />
            </td>
            <td>
              <strong>Adidas Ultraboost</strong>
              <span>$150.00</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button>Check Out</button>

        <Total>
          <span>Total</span>
          <strong>$ 500.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
