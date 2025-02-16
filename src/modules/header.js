export const renderHeader = function () {
  const html = `<header class="header">
      <nav class="main-nav">
        <button class="tab" id="home-tab">Home</button>
        <button class="tab" id="menu-tab">Menu</button>
        <button class="tab" id="contact-tab">Contact</button>
      </nav>
    </header>`;
  document.body.insertAdjacentHTML("afterbegin", html);
};
