function aboutMe() {
  let name = prompt("What is your name?");
  let age = prompt("how old are you?");

  if (age > 18) {
    alert("😎 Thats great!" + " " + name + " " + "You can get some fenugreek!");
  } else {
    alert("You so precious" + " " + name);
  }
}

let aboutMe = document.querySelector("button");
