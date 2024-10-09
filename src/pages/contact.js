// import image from "../assets/images/home.jpg";
import Title from "../components/Title";
import fb from "../assets/icons/brand-facebook.svg";
import ig from "../assets/icons/brand-instagram.svg";
import map from "../assets/icons/map-pin.svg";
import phone from "../assets/icons/phone.svg";
import clock from "../assets/icons/clock.svg";
import mail from "../assets/icons/mail.svg";
import world from "../assets/icons/world.svg";

const contacts = [
  {
    icon: map,
    content: "123 Via Roma, <br> Downtown, Cityname, State, 12345",
  },
  {
    icon: clock,
    content:
      "Monday – Thursday: 11:30 AM – 10:00 PM<br> Friday – Saturday: 11:30 AM – 11:00 PM <br> Sunday: 12:00 PM – 9:00 PM",
  },
  {
    icon: world,
    content:
      "<a href='https://www.labellatavola.com'>www.labellatavola.com</a>",
  },
  {
    icon: mail,
    content:
      "<a href='mailto:info@labellatavola.com'>info@labellatavola.com</a>",
  },
  {
    icon: phone,
    content: "<a href='tel:+39 351 236 00 00'>(555) 123-4567</a>",
  },
  {
    icon: ig,
    content:
      "<a href='https://www.instagram.com/LaBellaTavola/'>@LaBellaTavola</a>",
  },
  {
    icon: fb,
    content:
      "<a href='https://www.facebook.com/LaBellaTavolaRestaurant'>facebook.com/LaBellaTavolaRestaurant</a>",
  },
];

const pageContent = document.querySelector("#content");

export default function Contact() {
  Title("La Bella Tavola", pageContent);
  const container = document.createElement("div");
  container.classList.add("contacts-container");

  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts");

  contacts.forEach((contact) => {
    ContactItem(contact.icon, contact.content, contactsContainer);
  });

  const cta = document.createElement("p");
  cta.classList.add("contacts__cta");
  cta.innerHTML =
    "Reservations: <br> Book your table here or call us to reserve. Walk-ins welcome!";

  contactsContainer.appendChild(cta);
  container.appendChild(contactsContainer);
  GoogleMaps(container);
  pageContent.appendChild(container);
}

function GoogleMaps(container) {
  container.insertAdjacentHTML(
    "beforeend",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1729.3247378463582!2d12.327771536455415!3d45.438090612331074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c4543c7f09%3A0x391ef5164e01b4fb!2sCalle%20de%20la%20Chiesa%2C%202304d%2C%2030125%20Venezia%20VE%2C%20Italy!5e0!3m2!1sen!2sse!4v1728310285053!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
}

function ContactItem(icon, content, container = null) {
  const item = document.createElement("div");
  item.classList.add("contact-item");
  item.innerHTML = `
    <div class="contact-item__icon">
      <img src="${icon}" alt="${icon}" />
    </div>
    <div class="contact-item__content">
      <p>${content}</p>
    </div>
  `;
  if (container) {
    container.appendChild(item);
  }
  return item;
}
