import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.test();
  }

  test(): void {
    // ---------Responsive-navbar-active-animation-----------
    const tabsNewAnim = document.getElementById('navbarSupportedContent');

    if (!tabsNewAnim) return;

    tabsNewAnim.addEventListener('click', (event) => {
      const clickedElement = event.target as HTMLElement;
      const navbarItems = tabsNewAnim.querySelectorAll('.nav-item');
      const horiSelector = document.querySelector('.hori-selector') as HTMLElement;

      if (!navbarItems || !horiSelector) return;

      navbarItems.forEach(navItem => navItem.classList.remove('active'));

      if (clickedElement.tagName === 'A' && clickedElement.parentElement) {
        clickedElement.parentElement.classList.add('active');
        const activeWidthNewAnimHeight = clickedElement.parentElement.offsetHeight;
        const activeWidthNewAnimWidth = clickedElement.parentElement.offsetWidth;
        const itemPosNewAnimTop = clickedElement.parentElement.offsetTop;
        const itemPosNewAnimLeft = clickedElement.parentElement.offsetLeft;

        this.renderer.setStyle(horiSelector, 'top', itemPosNewAnimTop + 'px');
        this.renderer.setStyle(horiSelector, 'left', itemPosNewAnimLeft + 'px');
        this.renderer.setStyle(horiSelector, 'height', activeWidthNewAnimHeight + 'px');
        this.renderer.setStyle(horiSelector, 'width', activeWidthNewAnimWidth + 'px');
      }
    });

    // Add event listener for window resize
    window.addEventListener('resize', () => {
      setTimeout(() => { this.test(); }, 500);
    });

    // Add event listener for navbar toggler click
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (!navbarToggler) return;
    navbarToggler.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (!navbarCollapse) return;
      navbarCollapse.classList.toggle('show');
      setTimeout(() => { this.test(); });
    });

    // Add active class on another-page move
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const target = document.querySelector(`#navbarSupportedContent ul li a[href="${path}"]`);
    if (target && target.parentElement) {
      target.parentElement.classList.add('active');
    }
  }
}
