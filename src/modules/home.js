const content = document.querySelector("#content");

export const renderHomePage = function () {
  const html = `<div class="container">
  <h1 class="brand">Sweet Regrets</h1>
  <div class="paragraph-container">
    <div class="paragraph">
      <p>Are you looking for a “healthy option”? That’s cute… But no.</p>
      <p>We only serve happiness—glazed, frosted, and covered in caramel.</p>
    </div>
    <div class="paragraph">
      <p>
        Our mission?
        <em>To make you question your life choices after every bite.</em>
      </p>
      <p>(And maybe take a nap... Or cry... Either way, you’ll be back.)</p>
    </div>
  </div>
  <h2 class="tagline">Because who needs moderation?</h2>
</div>`;
  content.insertAdjacentHTML("afterbegin", html);
};
