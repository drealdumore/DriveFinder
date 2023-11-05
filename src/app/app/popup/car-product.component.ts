import { Component } from '@angular/core';

@Component({
  selector: 'car-product',
  template: `
    <div class="car">
      <div class="car-img"></div>
      <div class="car-info">
        <p class="car-name">Car Name</p>
        <div class="car-details">
          <p class="car-spec">224mph</p>
          <span class="line"></span>
          <p class="car-spec">4 Seats</p>
        </div>
      </div>
      <div class="button-containter">
        <button class="car-button">$499/Day</button>
      </div>
    </div>
  `,
  styles: [
    `
      .car {
        width: 13rem;
        height: 16rem;
        padding: 0.8em;
        background: #f5f5f5;
        border-radius: 0.4rem;
      }

      .car-img {
        background-color: var(--color-secondary);
        height: 45%;
        width: 100%;
        border-radius: 0.5rem;
        transition: 0.3s ease;
      }

      .car-name {
        margin-bottom: 0;
        font-weight: bold;
      }

      .car-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
      }

      .line {
        height: 1rem;
        width: 0.1rem;
        background-color: var(--color-black);
      }

      .button-containter {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .car-button {
        border: 1px solid var(--color-black);
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: 0.3s ease-in-out;
        margin-top: 1rem;
      }

      .car-img:hover {
        transform: translateY(-25%);
      }

      .car-button:hover {
        border: 1px solid var(--color-black);
        background-color: var(--color-secondary);
      }
    `,
  ],
})
export class CarProductComponent {}
