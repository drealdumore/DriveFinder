import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <div class="nav">
      <img src="../assets/img/logo.png" alt="logo" class="logo" />
      <div class="icon__box">
        <svg
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12L10 12"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M20 5L4 5"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M20 19L4 19"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  `,
  styles: [
    `
      .nav {
        position: sticky;
        text-decoration: none;
        padding: 0 1rem;
        /* background: var(--color-black); */
        background: red;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .logo {
        height: 1rem;
      }

      .icon {
        height: 2rem;
      }
    `,
  ],
})
export class NavComponent {}
