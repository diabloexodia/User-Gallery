class User {
  constructor(id, avatar, dateofbirth, email, name) {
    this.apiURL = "https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo";
    this.id = id;
    this.avatar = avatar;
    this.dateofbirth = dateofbirth;
    this.email = email;
    this.name = name;

    this.displayOnLoad();
  }
  async displayOnLoad() {
    const addButton = document.createElement("button");
    addButton.textContent = " + Add New User";

    addButton.style.position = "fixed";
    addButton.style.top = "10px";
    addButton.style.right = "10px";

    addButton.addEventListener("click", () => {
      const modal1 = document.createElement("div2");
      modal1.classList.add("modaladd");

      const modalContent = `
    <div class="modal-content">
  <h4>Add User</h4>
  <label for="addname">Name:</label>
  <input type="text" id="addname" required autocomplete="name"><br>
  <label for="addemail">Email:</label>
  <input type="email" id="addemail" required autocomplete="email"><br>
  <label for="addavatar">Avatar URL:</label>
  <input type="text" id="addavatar" autocomplete="url"><br>
  <label for="adddateOfBirth">Date of Birth:</label>
  <input type="date" id="adddateOfBirth"><br>
  <button id="insertButton">Insert</button>
</div>
  
    `;
      modal1.innerHTML = modalContent;

      document.body.appendChild(modal1);
      modal1.style.display = "block";

      const insertButton = document.getElementById("insertButton");
      insertButton.addEventListener("click", () => {
        const name = document.getElementById("addname").value;
        const email = document.getElementById("addemail").value;
        const avatar = document.getElementById("addavatar").value;
        const dateOfBirth = document.getElementById("adddateOfBirth").value;

        const apiURL = "https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo";
        fetch(apiURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            avatar,
            dateOfBirth,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const userContainer = this.createUserContainer(data);

            document.getElementById("bodyy").appendChild(userContainer);

            modal1.remove();
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      });
    });
    document.body.appendChild(addButton);
    try {
      const response = await fetch(this.apiURL);
      if (!response.ok) {
        console.error("HTTP error occurred!");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      data.forEach((user) => {
        const userContainer = document.createElement("div");
        console.log(user);
        userContainer.id = "div" + user.id;
        userContainer.classList.add("user-container");
        // userContainer.

        const image = document.createElement("img");
        image.classList.add("user-image");
        image.src = user.avatar;
        image.alt = user.name;
        image.style.width = "100%";
        image.style.height = "100%";
        userContainer.appendChild(image);

        const details = document.createElement("div");
        details.classList.add("user-details");

        const nameParagraph = document.createElement("p");
        nameParagraph.classList.add("name");
        nameParagraph.id = "name" + user.id;
        nameParagraph.textContent = `Name: ${user.name}`;
        details.appendChild(nameParagraph);

        const emailParagraph = document.createElement("p");
        emailParagraph.classList.add("email");
        emailParagraph.textContent = `${user.email}`;
        emailParagraph.id = "email" + user.id;
        details.appendChild(emailParagraph);

        const idText = document.createTextNode(`ID :${user.id}`);

        details.appendChild(idText);

        const dobParagraph = document.createElement("p");
        dobParagraph.classList.add("dob");
        dobParagraph.textContent = ` ${user.dateOfbirth}`;
        dobParagraph.id = "date" + user.id;
        details.appendChild(dobParagraph);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          this.editDetails(user.id);
        });
        details.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener(
          "click",

          () => {
            deleteDetails(user.id);
          }
        );
        details.appendChild(deleteButton);
        details.style.display = "none"; // Initially hidden

        userContainer.appendChild(details);
        userContainer.addEventListener("mouseover", () => {
          details.style.display = "block"; // Show details on hover
        });

        userContainer.addEventListener("mouseout", () => {
          details.style.display = "none"; // Hide details on mouseout
        });

        document.getElementById("bodyy").appendChild(userContainer);
      });

      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  editDetails(userId) {
    const apiURL = "https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo";
    console.log("inside");
    const modal = document.createElement("div");
    modal.classList.add("edit-modal");
    modal.id = "modalID";

    document.body.appendChild(modal);
    const form = document.createElement("div");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.textContent = document.getElementById("name" + userId).value;
    form.appendChild(document.createElement("br"));
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Enter email";
    form.appendChild(document.createElement("br"));
    const dateOfBirthInput = document.createElement("input");
    dateOfBirthInput.type = "date";
    dateOfBirthInput.id = "dateofbirth";
    form.appendChild(document.createElement("br"));
    const imageUrlInput = document.createElement("input");
    imageUrlInput.type = "text";
    imageUrlInput.id = "imageURL";
    imageUrlInput.placeholder = "Enter image URL";
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Name:";
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "email:";
    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "date";
    dateLabel.textContent = "date:";

    form.appendChild(nameLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(emailLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateOfBirthInput);

    modal.appendChild(form);
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    form.appendChild(confirmButton);
    confirmButton.addEventListener("click", () => {
      const updatedName = nameInput.value;
      const updatedEmail = emailInput.value;
      const updatedDateOfBirth = dateOfBirthInput.value;

      let resp = this.updateUserDetails(
        apiURL,
        userId,
        updatedName,
        updatedEmail,
        updatedDateOfBirth
      );
      let temp = document.getElementById("modalID");
      temp.parentNode.removeChild(temp);
    });
  }
  async updateUserDetails(
    apiURL,
    userId,
    updatedName,
    updatedEmail,
    updatedDateOfBirth
  ) {
    try {
      const response = await fetch(`${apiURL}/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: updatedName,
          Email: updatedEmail,
          dateOfbirth: updatedDateOfBirth,
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        // Update the user's details in the UI
        document.getElementById("name" + updatedUser.id).textContent =
          updatedName;
        document.getElementById("email" + updatedUser.id).textContent =
          updatedEmail;
        document.getElementById("date" + userId).textContent =
          updatedDateOfBirth;
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  createUserContainer(data) {
    const userContainer = document.createElement("div");
    userContainer.id = "div" + data.id;
    userContainer.classList.add("user-container");

    // Create image element
    const image = document.createElement("img");
    image.classList.add("user-image");
    image.src = data.avatar;
    image.alt = data.name;
    image.style.width = "100%";
    image.style.height = "100%";
    userContainer.appendChild(image);

    // Create details element
    const details = document.createElement("div");
    details.classList.add("user-details");
    details.style.display = "none";
    // Create name paragraph
    const nameParagraph = document.createElement("p");
    nameParagraph.classList.add("name");
    nameParagraph.id = "name" + data.id;
    nameParagraph.textContent = `Name: ${data.name}`;
    details.appendChild(nameParagraph);

    // Create email paragraph
    const emailParagraph = document.createElement("p");
    emailParagraph.classList.add("email");
    emailParagraph.textContent = `${data.email}`;
    emailParagraph.id = "email" + data.id;
    details.appendChild(emailParagraph);

    // Create ID text
    const idText = document.createTextNode(`ID: ${data.id}`);
    details.appendChild(idText);

    // Create date of birth paragraph
    const dobParagraph = document.createElement("p");
    dobParagraph.classList.add("dob");
    dobParagraph.textContent = `${data.dateOfBirth}`;
    dobParagraph.id = "date" + data.id;
    details.appendChild(dobParagraph);

    // Create edit and delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      this.editDetails(data.id);
    });
    details.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener(
      "click",

      () => {
        deleteDetails(data.id);
      }
    );
    details.appendChild(deleteButton);

    userContainer.appendChild(details);
    userContainer.addEventListener("mouseover", () => {
      details.style.display = "block";
    });

    userContainer.addEventListener("mouseout", () => {
      details.style.display = "none";
    });

    return userContainer;
  }
}
async function deleteDetails(userId) {
  const apiURL = "https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo";
  try {
    const response = await fetch(`${apiURL}/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("User deleted successfully");
      let temp = document.getElementById("div" + userId);
      temp.parentNode.removeChild(temp);
    } else {
      console.error("Error deleting user:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

new User();
