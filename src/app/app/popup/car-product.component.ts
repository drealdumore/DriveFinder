import { Component } from '@angular/core';

@Component({
  selector: 'car-product',
  template: `
    <div class="cars__display">
      <div class="display">
        <div class="display__img--box">
          <img src="/assets/img/bmw/BMW 4 Series 2021-1.jpg" alt="" />
        </div>
        <div class="info">
          <p class="name">Car Name</p>
          <div class="rating__box">
            <p class="rating">5.0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              class="rating__icon"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              version="1.1"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="details">
            <p>224mph</p>
            <p>4 Seats</p>
          </div>
        </div>
        <div class="button-box">
          <button class="button">$499/Day</button>
        </div>
      </div>

      <div class="display">
        <div class="display__img--box">
          <img src="/assets/img/bmw/BMW 4 Series 2021-1.jpg" alt="" />
        </div>
        <div class="info">
          <p class="name">Car Name</p>
          <div class="rating__box">
            <p class="rating">5.0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              class="rating__icon"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              version="1.1"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="details">
            <p>224mph</p>
            <p>4 Seats</p>
          </div>
        </div>
        <div class="button-box">
          <button class="button">$499/Day</button>
        </div>
      </div>

      <div class="display">
        <div class="display__img--box">
          <img src="/assets/img/bmw/BMW 4 Series 2021-1.jpg" alt="" />
        </div>
        <div class="info">
          <p class="name">Car Name</p>
          <div class="rating__box">
            <p class="rating">5.0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              class="rating__icon"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              version="1.1"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="details">
            <p>224mph</p>
            <p>4 Seats</p>
          </div>
        </div>
        <div class="button-box">
          <button class="button">$499/Day</button>
        </div>
      </div>

      <div class="display">
        <div class="display__img--box">
          <img src="/assets/img/bmw/BMW 4 Series 2021-1.jpg" alt="" />
        </div>
        <div class="info">
          <p class="name">Car Name</p>
          <div class="rating__box">
            <p class="rating">5.0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              class="rating__icon"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              version="1.1"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="details">
            <p>224mph</p>
            <p>4 Seats</p>
          </div>
        </div>
        <div class="button-box">
          <button class="button">$499/Day</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cars__display {
        display: flex;
        gap: 1.2rem;
        justify-content: center;
        align-items: center;
      }

      .display {
        background: rgba(255, 255, 255, 0);
        backdrop-filter: blur(9.5px);
        -webkit-backdrop-filter: blur(9.5px);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        width: 16rem;
        height: 19rem;
      }

      .display__img--box {
        position: relative;
        height: 50%;
        width: 100%;
        overflow: hidden;
        transition: 0.3s ease;
      }

      .display__img--box img {
        max-width: 100%;
        position: absolute;
        width: 100%;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
        height: 100%;
      }

      .info {
        padding: 0 1rem;
      }

      .name {
        margin-bottom: 0;
        font-weight: bold;
      }

      .rating__box {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 0;
      }

      .rating {
        margin: 0;
        font-size: 0.9rem;
      }

      .rating__icon {
        padding-bottom: 1.5px;
      }

      .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8rem;
      }

      .details p {
        margin: 0;
      }

      .button-box {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button {
        border: 1px solid var(--color-black);
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: 0.3s ease-in-out;
        margin-top: 1rem;
      }

      .button:hover {
        border: 1px solid var(--color-black);
        background-color: var(--color-secondary);
      }
    `,
  ],
})
export class CarProductComponent {}
