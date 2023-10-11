import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <div class="nav">
      <img src="../assets/img/logo.png" alt="logo" class="logo" />
      <ul class="nav__items">
        <li>menu</li>
        <li>rental policy</li>
        <li>how it works</li>
        <button class="nav__btn">Sign Up</button>
      </ul>
    </div>
  `,
  styles: [
    `
      .nav {
        text-decoration: none;
        padding: 0 2rem;
        background: var(--color-black);
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .logo {
        height: 1.2rem;
      }
      .nav__items {
        display: flex;
        list-style: none;
        color: var(--color-white);
        gap: 1.2rem;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        font-size: 1rem;
      }

      .nav__btn {
        border: 1px solid var(--color-white);
        background-color: transparent;
        padding: 0.5rem 0.8rem;
        color: var(--color-white);
        font-family: inherit;
        margin-left: 2rem;
      }
      .nav__btn:active {
      }
    `,
  ],
})
export class NavComponent {}
