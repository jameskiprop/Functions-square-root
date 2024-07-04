function happyBirthday(username, age) {
  console.log("Happy Birthday James");
  console.log("Happy Birthday to you");
  console.log(`Happy Birthday ${username}!`);
  console.log(`You are ${age} years old`);
  console.log();
}
happyBirthday("Kiprop", 23);

function isValidEmail(email) {
  if (email.includes("@")) return true;
  else {
    return false;
  }
}
console.log(isValidEmail("jameskiprop.com"));
console.log(isValidEmail("jakepaul.com"));
console.log(isValidEmail("jameskiprop@gmail.com"));
console.log(isValidEmail("jameskiprop.com"));

const items = [
  { name: `socks`, price: `60` },
  { name: `shoe`, price: `500` },
  { name: `Pizza`, price: `50` },
  { name: `Bike`, price: `2000` },
  { name: `Phone`, price: `5000` },
  { name: `food`, price: `10` },
];
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000;
});
console.log(hasInexpensiveItems);
