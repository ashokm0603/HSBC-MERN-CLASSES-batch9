let API_URL = "https://api.github.com/users";
window
  .fetch(API_URL)
  .then((res) => res.json())
  .then((users) => {
    users.forEach((user) => {
      let container = document.createElement("div");
      let divTag1 = document.createElement("div");
      let divTag2 = document.createElement("div");
      let image = document.createElement("img");
      let id = document.createElement("h1");
      let name = document.createElement("h1");



      
      image.style.height="150px";
      image.style.width="150px";
      image.style.borderRadius="20px"
      image.style.boxShadow="5px 5px 5px gray"
      let body = document.querySelector("body");
      image.src = user.avatar_url;
      id.innerText = ` UserID:  ${user.id}`;
      name.innerText = ` Name:  ${user.login}`;
      
      
      
      
      //stylings for container 
      
      container.style.display="flex"
      container.style.justifyContent="space-evenly"
      container.style.margin="20px"
      container.style.backgroundColor="orange"
      container.style.borderRadius="20px"
      container.style.padding="20px"
      
      body.appendChild(container)
      container.appendChild(divTag1);
      container.appendChild(divTag2);
      divTag2.appendChild(id)
      divTag2.appendChild(name)
      divTag1.appendChild(image)

      
    });
  })
  .catch((err) => console.log(err));
