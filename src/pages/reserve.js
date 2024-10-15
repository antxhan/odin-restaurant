import Title from "../components/Title";

const pageContent = document.querySelector("#content");

export default function Menu() {
  Title("La Bella Tavola", pageContent);

  // img container
  const imgDiv = document.createElement("div");
  imgDiv.className = "register-img-div";

  // form container
  const formContainer = document.createElement("div");
  formContainer.className = "register-form-container";

  // h2
  const h2 = document.createElement("h2");
  h2.innerText = "Reserve a Table";
  formContainer.appendChild(h2);

  // form
  const form = document.createElement("form");
  form.className = "register-form";
  form.innerHTML = `
    <label for="name">
      Name
      <input type="text" id="name" name="name" required>
    </label>
    
    <label for="email">
      Email
      <input type="email" id="email" name="email" required>
    </label>
    
    <label for="phone">
      Phone
      <input type="tel" id="phone" name="phone" required>
    </label>
    
    <label for="message">
      Message
      <textarea id="message" name="message" required></textarea>
    </label>
    
    <button type="submit">Submit</button>
  `;
  formContainer.appendChild(form);

  // appending
  imgDiv.appendChild(formContainer);
  pageContent.appendChild(imgDiv);
}
