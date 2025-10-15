let response = await  fetch("http://localhost:3000/contacts")

const result = await response.json();
    console.log(result);



let  sendingdata = await fetch("http://localhost:3000/post",

{
      method: "POST",
      headers:{"content-type":"application/json"},
     body: JSON.stringify({ username: "example" })
}
)