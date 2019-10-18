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
