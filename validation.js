const email = "example@example.com";
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (emailPattern.test(email)) {
  console.log("Adresse email valide");
} else {
  console.log("Adresse email invalide");
}
