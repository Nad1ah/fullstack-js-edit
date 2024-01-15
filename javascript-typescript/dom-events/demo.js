async function getUsers() {
    try {
      let res = await fetch("https://random-data-api.com/api/v2/users?size=2");
      let data = await res.json();

      console.log(data);

     const userList = document.getElementById("userList");

      userList.innerHTML = "";

     
      data.forEach((user) => {
        const liElem = document.createElement("li");
        liElem.textContent = `${user.first_name}`;
        userList.appendChild(liElem);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  getUsers();