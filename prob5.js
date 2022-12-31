details={
  name: "Kiran",
  age: 42,
  father_name: "Roop chand",
  Mother_name: "Mohini",
  Bestfriend: "Annu",
  hobbies: ["Reading", "Writing","Playing"]
};
for(let a in details){
  console.log(a);// give only keys
  console.log(details[a]);// to get values
  console.log(a, details[a]);// to get both values and keys
}