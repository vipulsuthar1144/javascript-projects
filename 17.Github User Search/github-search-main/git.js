const gitFunc = async () => {
  let input = document.getElementById("input");
  let notFound = document.getElementById("notFound");
  let ul = document.getElementById("myul");
  let li = document.getElementsByClassName("li");
  let userName = document.getElementsByClassName("userName");
  let containerBody = document.getElementsByClassName("containerBody");

  try {
    let jsonData = await fetch("https://api.github.com/users");
    let data = await jsonData.json();

    if (data) {
      // ul.innerHTML = "";
      //   notFound.classList.add("hide");
      notFound.style.display = "none";
    }
    function setData() {
      data.map((user) => {
        let str = "";
        str = ` <li class="li">
            <img src=${user.avatar_url} alt=${user.avatar_url} />
            <div class="liDiv">
              <p class="userName">${user.login}</p>
              <a href=${user.html_url} target="_blank">${user.url}</a>
            </div>
          </li>`;
        ul.innerHTML += str;
      });
    }
    setData();
    input.addEventListener("input", () => {
      let inputedValue = input.value.toUpperCase();

      for (let i = 0; i < li.length; i++) {
        let userNameValue = userName[i].innerHTML.toUpperCase();
        //   console.log(i + userNameValue);
        if (userNameValue.indexOf(inputedValue) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
      //   console.log(ul);
      let count = 0;
      for (let i = 0; i < li.length; i++) {
        if (li[i].style.display == "none") {
          count++;
        }
      }
      if (count == 30) {
        containerBody[0].style.backgroundImage = "url('not-found.png')";
      } else {
        containerBody[0].style.backgroundImage = "url('')";
      }
    });
  } catch (error) {
    console.log(error);
  }
};
gitFunc();
