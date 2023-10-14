import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <div class="nav">
      <img src="../assets/img/logo.png" alt="logo" class="logo" />
      <!-- <ul class="nav__items">
        <li>menu</li>
        <li>rental policy</li>
        <li>how it works</li>
        <button class="nav__btn">Sign Up</button>
      </ul>
    </div> -->

      <div class="nav__items">
        <label class="radio">
          <input type="radio" name="radio" checked="" />
          <span class="name">Menu</span>
        </label>
        <label class="radio">
          <input type="radio" name="radio" />
          <span class="name">Rental Policy</span>
        </label>

        <label class="radio">
          <input type="radio" name="radio" />
          <span class="name">How it works</span>
        </label>
      </div>
      <button class="nav__btn">Sign Up</button>
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
      /* .nav__items {
        display: flex;
        cursor: pointer;
        list-style: none;
        color: var(--color-grey);
        gap: 1.2rem;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        font-size: 1rem;
        transition: all 0.4s;
      }

      .nav__items li:hover {
        color: var(--color-white);
      } */

      .nav__btn {
        padding: 0.5rem 0.8rem;

        background-color: transparent;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-family: inherit;
        transition: all 0.6s;
        cursor: pointer;
        border: 1px solid var(--color-grey);
        color: var(--color-grey);
      }
      .nav__btn:hover {
        background-color: transparent;
        border: 1px solid var(--color-white);
        color: var(--color-white);
      }

      .nav__items {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        border-radius: 0.5rem;
        background-color: none;
        box-sizing: border-box;
        padding: 0.25rem;
        width: 300px;
        font-size: 14px;
        border: 1px solid var(--color-grey);
      }

      .nav__items .radio {
        flex: 1 1 auto;
        text-align: center;
      }

      .nav__items .radio input {
        display: none;
      }

      .nav__items .radio .name {
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: none;
        padding: 0.5rem 0;
        color: var(--color-grey);
        transition: all 0.15s ease-in-out;
      }

      .nav__items .radio input:checked + .name {
        background-color: var(--color-white);
        font-weight: 600;
        border-radius: 0.3rem;
      }
    `,
  ],
})
export class NavComponent {}
