import Title from "../components/Title";

const pageContent = document.querySelector("#content");
const menu = [
  {
    title: "Antipasti (Starters)",
    items: [
      {
        name: "Bruschetta al Pomodoro",
        description:
          "Grilled bread topped with marinated tomatoes, garlic, and fresh basil.",
        price: 9,
      },
      {
        name: "Caprese Salad",
        description:
          "Vine-ripened tomatoes, fresh mozzarella, basil, and a drizzle of balsamic glaze.",
        price: 12,
      },
      {
        name: "Calamari Fritti",
        description:
          "Lightly battered and fried calamari, served with lemon aioli and marinara sauce.",
        price: 14,
      },
      {
        name: "Arancini",
        description:
          "Crispy risotto balls stuffed with mozzarella and served with a zesty tomato sauce.",
        price: 11,
      },
    ],
  },
  {
    title: "Primi Piatti (First Course)",
    items: [
      {
        name: "Tagliatelle alla Bolognese",
        description: "Hand-cut pasta with a rich and slow-cooked beef ragù.",
        price: 22,
      },
      {
        name: "Spaghetti alla Carbonara",
        description:
          "Classic Roman dish with pancetta, egg yolk, Pecorino Romano, and black pepper.",
        price: 20,
      },
      {
        name: "Risotto ai Funghi",
        description:
          "Creamy Arborio rice with wild mushrooms and a touch of truffle oil.",
        price: 24,
      },
      {
        name: "Lasagna Classica",
        description:
          "Layers of pasta, Bolognese, béchamel, and mozzarella, baked to perfection.",
        price: 23,
      },
    ],
  },
  {
    title: "Secondi Piatti (Main Course)",
    items: [
      {
        name: "Pollo alla Parmigiana",
        description:
          "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.",
        price: 26,
      },
      {
        name: "Branzino al Forno",
        description:
          "Oven-baked sea bass with olive oil, garlic, and rosemary, served with seasonal vegetables.",
        price: 30,
      },
      {
        name: "Tagliata di Manzo",
        description:
          "Grilled ribeye steak sliced and topped with arugula, shaved Parmesan, and balsamic reduction.",
        price: 32,
      },
      {
        name: "Melanzane alla Parmigiana",
        description:
          "Baked eggplant layered with tomato sauce, mozzarella, and Parmesan cheese.",
        price: 22,
      },
    ],
  },
  {
    title: "Dolci (Desserts)",
    items: [
      {
        name: "Tiramisu",
        description:
          "Layers of espresso-soaked ladyfingers, mascarpone, and cocoa powder.",
        price: 10,
      },
      {
        name: "Panna Cotta",
        description: "Silky vanilla cream custard with a berry compote.",
        price: 9,
      },
      {
        name: "Cannoli Siciliani",
        description:
          "Crispy pastry shells filled with sweet ricotta and chocolate chips.",
        price: 8,
      },
      {
        name: "Gelato della Casa",
        description:
          "Your choice of house-made gelato: vanilla, chocolate, or pistachio.",
        price: 7,
      },
    ],
  },
  {
    title: "Vini (Wine)",
    items: [
      {
        name: "Chianti Classico",
        description:
          "Tuscany’s iconic red wine with notes of cherry and spice.",
        price: {
          glass: 12,
          bottle: 45,
        },
      },
      {
        name: "Pinot Grigio delle Venezie",
        description:
          "Crisp and refreshing with hints of green apple and citrus.",
        price: {
          glass: 10,
          bottle: 38,
        },
      },
      {
        name: "Prosecco Superiore",
        description: "Light, sparkling wine perfect for any celebration.",
        price: {
          glass: 9,
          bottle: 36,
        },
      },
    ],
  },
];

export default function Menu() {
  Title("La Bella Tavola", pageContent);
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";
  menu.forEach((category) => {
    MenuCategory(category, menuContainer);
  });
  pageContent.appendChild(menuContainer);
}

function MenuCategory(category, container) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "menu-category";
  const h3 = document.createElement("h3");
  h3.innerText = category.title;
  categoryDiv.appendChild(h3);
  const itemsList = document.createElement("ul");
  category.items.forEach((item) => {
    MenuItem(item, itemsList);
  });
  categoryDiv.appendChild(itemsList);
  container.appendChild(categoryDiv);
}

function MenuItem(item, container) {
  const itemContainer = document.createElement("li");
  const itemHead = document.createElement("div");
  itemHead.className = "menu-item__header";
  const itemName = document.createElement("strong");
  itemName.innerText = item.name;
  itemHead.appendChild(itemName);
  const itemPrice = document.createElement("p");
  itemPrice.innerText = `$${item.price}`;
  itemHead.appendChild(itemPrice);
  itemContainer.appendChild(itemHead);
  const itemDescription = document.createElement("p");
  itemDescription.innerText = item.description;
  itemContainer.appendChild(itemDescription);
  container.appendChild(itemContainer);
}
