const content = document.querySelector("#content");

const menuItemsArr = [
  {
    name: "Cookie Overload",
    description: "A mountain of chocolate chip cookies. No, we won’t judge.",
    price: 6,
  },
  {
    name: "Mini Donuts",
    description: "They’re small, so they don’t count. Right?",
    price: 5,
  },
  {
    name: "Triple Chocolate Overdose",
    description: "If this doesn’t fix your problems, nothing will.",
    price: 8,
  },
  {
    name: "Caramel Flan-tasy",
    description: "Soft, creamy, and just enough sugar to fuel bad decisions.",
    price: 7,
  },
  {
    name: "Shaved Ice: Brain Freeze Edition",
    description: "Comes with a free headache.",
    price: 4,
  },
  {
    name: "Virgin Pina Colada",
    description: "No alcohol, but still makes you feel fancy.",
    price: 6,
  },
];

export const renderMenuPage = function () {
  const containerMenu = document.createElement("div");
  containerMenu.classList.add("container");

  const listMenu = document.createElement("ul");
  listMenu.classList.add("list", "menu-list");

  menuItemsArr.forEach((menuItem) => {
    const html = `<li class="menu-item">
            <p class="menu-item-name">${menuItem.name}</p>
            <p class="menu-item-description">
           ${menuItem.description}
            </p>
            <p class="menu-item-price">$${menuItem.price}</p>
          </li>`;

    listMenu.insertAdjacentHTML("beforeend", html);
  });

  containerMenu.appendChild(listMenu);
  content.appendChild(containerMenu);
};
