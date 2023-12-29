//     function addBorder(element) {
//   // Remove 'clicked' class from all list items
//   const listItems = document.querySelectorAll('li');
//   listItems.forEach(item => item.classList.remove('clicked'));

//   // Add 'clicked' class to the clicked list item
//   element.classList.add('clicked');
//     }
    // addBorder to the menu bar 
function addBorder(element) {
  const list = document.querySelectorAll("li");
  list.forEach((item) => item.classList.remove("clicked"));

  element.classList.add("clicked");
}


// login & sinup

let logout = false;
function userid() {
  let login = document.getElementById("userid").innerHTML; 
  if (!document.getElementById('logup') ){
    const setup = document.createElement("div");
    setup.className = "logup";
    setup.id = "logup";
    setup.style.height = "500px";
    setup.style.width = "800px";
    setup.innerHTML = `<div classname = "logdiv" id = "logdiv"><button id="close" onclick="closeup()"><span><i class="fa-solid fa-rectangle-xmark" style="color: #89e19e;"></i></span></button><button id = "long" onclick = "logged()" style = "margin-top: -480px;">Login</button> <br> <h3>OR</h3> <hr>
          <button onclick = "signup()">SignUp</button></div>`;
    // setup.innerHTML.style.height = "300px";
    // setup.innerHTML.style.width = "300px";
    // setup.innerHTML.style.backgroundColor = "black";
    document.body.appendChild(setup);
     }
 
}
  // logging action 
function logged() {
  const happen = document.getElementById("logdiv");
  happen.style.display = "none";
  const form = document.createElement("div");
  form.className = "form_log";
  form.innerHTML = `<button id="close" onclick="closeup()"><span><i class="fa-solid fa-rectangle-xmark" style="color: #89e19e;"></i></span></button><form id = "logform"> <label for = "log_detail">Enter Mobile Number/Email/User_Id</label> <br> <input id="log_detail" type="text" placeholder="Mobile/E-mail/UserId"> <br> <label class = "jump" for="log_passward">Enter Passward</label> <br> <input id="log_passward" type="password" placeholder="Passward"> <br> </form><button id = "loggedIn" type = "submit" onclick = "loggedIn()" >Login</button>`;
  document.getElementById("logup").appendChild(form);
}

// create or signup section 

function signup(){
    const happen = document.getElementById("logdiv");
    happen.style.display = "none";
    const formup = document.createElement('div');
    formup.className = "formup";
    formup.id = "myForm";
    formup.innerHTML = `<button id="close" onclick="closeup()"><span><i class="fa-solid fa-rectangle-xmark" style="color: #89e19e;"></i></span></button> <form id = "myform">
    <h2>Sign Up</h2>
    <br>
   <div class = "name">
   <label for="fname" style = "background-image: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
   -webkit-background-clip: text; 
   color: transparent;
   display: inline-block; ">First Name</label>
   <br>
   <input type="text" id="fname" name="fname" required>
   <br>
   <label for="lname" style = "background-image: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
   -webkit-background-clip: text; 
   color: transparent;
   display: inline-block; ">Last Name</label>
   <br>
   <input type="text" id="lname" name="lname" required>
   </div>
   <label for = "phone" style = "color:blue;">Phone</label>
   <input type="number" id="phone" name="phone" required>
   <br>
    <label for="email" style = "color:blue;">Email</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="password" style = "color:blue;">Password</label>
    <input type="password" id="password" name="password" required>
     <br>
  </form><button id = "signup" type="submit" onclick = "signin()">Sign Up</button>`;
  document.getElementById("logup").appendChild(formup);
}









// Sign up section //


function isValidEmail(email) {
// Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 //The regular expression ^[^\s@]+@[^\s@]+\.[^\s@]+$ is used to check if the email has a valid format
 return emailRegex.test(email); 
//The test method returns true if the email matches the regular expression, indicating that it's valid.

//   A regular expression, often abbreviated as regex or regexp, is a powerful tool for matching patterns in strings. It is a sequence of characters that defines a search pattern. Regular expressions are widely used in programming, text processing, and data validation.
// Here are some key concepts and components of regular expressions:
// Literal Characters:
// Characters in a regular expression that match themselves.
// Metacharacters:
// Special characters with a symbolic meaning. Examples include ^, $, ., *, +, ?, \, |, (), [], and {}.
// Quantifiers:

// Specify the number of occurrences of a character or a group. Examples include * (zero or more), + (one or more), ? (zero or one), and {n, m} (between n and m occurrences).
// Character Classes:

// Represent a set of characters. For example, [a-z] matches any lowercase letter, and \d matches any digit.
// Anchors:

// ^ and $ are used as anchors. ^ denotes the start of a line, and $ denotes the end of a line.
// Groups and Capturing:

// Parentheses () are used to create groups. They can also be used for capturing matched portions of the text.
// Escape Characters:

// Backslash \ is used to escape metacharacters, allowing them to be treated as literal characters.
// Modifiers:

// i (case-insensitive), g (global), m (multiline), and others modify the behavior of the regular expression.
// Wildcard:

// The dot . matches any character except for a newline.
// Negation:

// ^ can be used as the first character inside square brackets to negate the character class.
// Alternation:

// The pipe | is used for alternation, allowing the matching of either of two patterns.
// Regular expressions are supported in many programming languages and tools, including JavaScript, Python, Java, Perl, and text editors like Vim and grep. They provide a concise and flexible way to describe and search for patterns within strings. However, they can be complex, and mastering them requires practice and understanding of their various components.
  
}

// check pasword validity

function ispassvalid(password){
             hasnum = false;
             hasalpha = false;
             hasspecial = false;
            const passarray = [...password];

            for( const char of passarray)
            {
                  // Check if the character is a letter
                  if (/[a-zA-Z]/.test(char)) {
                    hasalpha = true;
                  }
                  // Check if the character is a number
                  else if (/\d/.test(char)) {
                    hasnum = true;
                  }

                  else if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(char))
                  {
                    hasspecial = true;
                  }

                  if(hasnum && hasalpha && hasspecial)
                   break;
            }

            return hasalpha && hasnum && hasspecial;
}

// email validation............

function validation(){
           E_id = document.getElementById('email').value;
           Validpass = document.getElementById('password').value;
         if(!isValidEmail(E_id))
          alert('Enter Valid Email');
         else if(!ispassvalid(Validpass))
         {
          alert('Password must be 8 character with 1 character ,1 number & 1 alphabet');
         }
         else if(document.getElementById('phone').length !== 10)
          alert('Enter valid Phone Number');
}


// storing the sign detail in object of arrays...........
let signdetail = [];

function signin(){
  // e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   if(!fname || !lname || !phone || !email || !password){
     alert('Fill the empty detail');
     return;
   }
if(phone.length === 10 && password.length >= 8 && isValidEmail(email) && ispassvalid(password))
{
  const user = {
    fname: fname,
    lname: lname,
    phone: phone,
    email: email,
    password: password
  };
  signdetail.push(user);
}
else{
  validation();
}
    console.log(signdetail);
    document.getElementById('myform').reset();
}


// login detail validator(Enter item correct or not)


function loggedIn(){
    const userproof = document.getElementById('log_detail').value;
    const userpass = document.getElementById('log_passward').value;
    let found = false;
   if(!userproof || !userpass)
   {
    alert("Don't leave Blank");
   }
   else {
    for (let index = 0; index < signdetail.length; index++) {
        if(userproof === signdetail[index].phone || userproof === signdetail[index].email)
        {
          found = true;
          document.getElementById('logup').innerHTML = `<button id="closes" onclick="closeup()"><span><i class="fa-solid fa-rectangle-xmark" style="color: #89e19e;"></i></span></button><h1>You are successfully loggedIn😊❤️</h1>`
          console.log(index);
          document.getElementById('userid').style.display = "none"; 
          document.getElementById('userid2').style.display = "block";
          document.getElementById('wcart').innerHTML = `<span id="cart"><i class="fa-solid fa-cart-shopping fa-beat fa-l" style="color: #1779c4;"></i>&nbsp;&nbsp;&nbsp;<a href="./cart.html">Cart</a></span>`
          break;
        }
    }
    logout = found;
    if(!found)
    {
      alert('Wrong credetal!!');
      document.getElementById('logform').reset();
    }
  }
        
}

// display and block login and logout button............
function userid1(){
  document.getElementById('userid').style.display = "block"; 
  document.getElementById('userid2').style.display = "none";
}



// cart info and function 
// console.log(logout);
function addcart() { 
  if(logout === false)
  {
    userid();
    document.getElementById('userid').style.display = "none"; 
    document.getElementById('userid2').style.display = "block";
    logout = true;
  }
  else if(logout === true)
  {
    document.getElementById("wcart").innerHTML = `<span id="cart"><i class="fa-solid fa-cart-shopping fa-beat fa-l" style="color: #1779c4;"></i>&nbsp;&nbsp;&nbsp;<a href="./cart.html">Cart</a></span>`;
    document.getElementById('userid').style.display = "none"; 
    document.getElementById('userid2').style.display = "block";
  }
}
// story form invokation..........
function fun()
{
  if (!document.getElementById('storyper') ){
  const story = document.createElement('div');
  story.className = "Story_div";
  story.id = "storycall";
  story.innerHTML = `<button id="shut" onclick="setup()"><span><i class="fa-solid fa-rectangle-xmark" style="color: #89e19e;"></i></span></button><div class = "message"> <h2 id = "experience">Your Cake Experience</h2> 
  <form id="storyForm">
    <label for="picInput">Select Image:</label><br>
    <input type="file" id="picInput" accept="image/jpeg, image/png, image/jpg">
    <br>
    <label for="kahaniInput">Enter Story:</label><br>
    <textarea id="kahaniInput" rows="4" cols="50"></textarea>
    <br>
    <label for="editorInput">Enter Editor:</label><br>
    <input type="text" id="editorInput">
</form><button type = "submit" id = "stbtn" onclick = "share()">Share</button>
</div>`;
  document.body.appendChild(story);
  }
}



// close login section

function closeup(){
  const setup = document.getElementById('logup');
  
  if (setup) {
    setup.remove();
  }
}

// invoke the story section.................
function setup()
{
  const story = document.getElementById('storycall');
  if(story)
  {
    story.remove();
  }
}


// story and adding our story section.......
 let m = 1
 function share() {
  const kahani = document.getElementById('kahaniInput').value;
  const editor = document.getElementById('editorInput').value;
  const pic = document.getElementById('picInput');
  const storyline = document.createElement('div');  // Remove the extra 'a' character
  if (m % 2 === 0) {
      m++;
      storyline.className = "right";
      storyline.innerHTML = `<img src="${pic ? URL.createObjectURL(pic.files[0]) : ''}" alt="delight"><div class="storyr"><p>${kahani}</p><h3>${editor}</h3></div>`;
  } else {
      m++;
      storyline.className = "left";
      storyline.innerHTML = `<img src="${pic ? URL.createObjectURL(pic.files[0]) : ''}" alt="delight"><div class="storyl"><p>${kahani}</p><br><h3>${editor}</h3></div>`;
  }
  document.getElementById('fun').appendChild(storyline);
}


// export {loggedIn};


