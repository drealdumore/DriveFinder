import { Component } from '@angular/core';

@Component({
  template: `
    <div class="box">
      <div class="container">
        <div>
          <div class="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">404</text>
            </svg>
          </div>
          <p>Sorry, we couldn't find the page you're looking for 😞</p>
          <a routerLink="/" class="btn-404">
            <span class="btn-text">Go Back to App</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .box {
        background-color: var(--color-black);
      }

      @media only screen and (min-width: 320px) and (max-width: 480px) {
        .box {
          width: 91%;
        }
        .container {
          padding-left: 0;
        }
      }

      .container {
        height: 100vh;
        color: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        margin-bottom: 2rem;
      }
      .btn-text {
        z-index: 10;
        position: relative;
      }
      .btn-404 {
        color: #f3f3f3;
        border: 1px solid #f3f3f3;
        padding: 0.9rem 2rem;
        text-decoration: none;
        position: relative;
        transition: all 0.4s;
        border-radius: 10px;
      }


      h1 {
        font-size: 4rem;
      }

      svg {
        width: 100%;
        height: 100%;
      }
      svg text {
        animation: stroke 5s infinite alternate;
        stroke-width: 2;
        stroke: #ffffff;
        font-size: 100px;
      }
      @keyframes stroke {
        0% {
          fill: var(--color-black);
          stroke: rgba(255, 255, 255, 1);
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 2;
        }
        70% {
          fill: var(--color-black);
          stroke: rgba(255, 255, 255, 1);
        }
        80% {
          fill: var(--color-black);
          stroke: rgba(255, 255, 255, 1);
          stroke-width: 3;
        }
        100% {
          fill: rgba(83, 80, 80, 1);
          stroke: rgba(255, 255, 255, 0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 0;
        }
      }

      .wrapper {
        background-color: transparent;
      }
    `,
  ],
})
export class Error404Component {}
