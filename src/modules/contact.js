const content = document.querySelector("#content");

const contact = {
  location:
    "Right next to your self-control, which you lost when you walked in.",
  phone: "1-800-SUGAR-HIGH",
  email: "ohno@nomorecalories.com",
};

export const renderContactPage = function () {
  const containerMenu = document.createElement("div");
  containerMenu.classList.add("container");

  const listMenu = document.createElement("ul");
  listMenu.classList.add("list", "contact-list");

  const contactEntries = Object.entries(contact);
  contactEntries.forEach(([key, value]) => {
    const property = key.replace(key[0], key[0].toUpperCase());
    const html = `<li class="contact-list-item list">
        ${property}:
        <span class="contact-${key}">
        ${value}
        </span>
      </li>`;
    listMenu.insertAdjacentHTML("beforeend", html);
  });

  containerMenu.appendChild(listMenu);
  content.append(containerMenu);
};
