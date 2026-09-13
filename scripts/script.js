function studentLogin(){
  let content=document.querySelector('.login-box-js').innerHTML=`
  <p class="login-text-js">STUDENT LOGIN</p>
  <p class="textbox-label-js">Username</p>
  <div class="collective">
    <div class="textbox-icon"></div>
    <input placeholder="Enter your user name here..." class="username-input-js">
  </div>
  <p class="textbox-label-js">Password</p>
  <div class="collective">
    <div class="password-icon"></div>
    <input placeholder="Enter the password" class="username-input-js">
  </div>
  <button class="login-button" onclick="window.location.href='studentModule.html'">LOG IN</button>`;
}

function HRlogin(){
  let content=document.querySelector('.login-box-js').innerHTML=`
  <p class="login-text-js">HR LOGIN</p>
  <p class="textbox-label-js">Employee ID</p>
  <div class="collective">
    <div class="textbox-icon"></div>
    <input placeholder="Enter your employee ID here..." class="username-input-js">
  </div>
  <p class="textbox-label-js">Password</p>
  <div class="collective">
    <div class="password-icon"></div>
    <input placeholder="Enter the password" class="username-input-js">
  </div>
  <button class="login-button" onclick="window.location.href='HRmodule.html'">LOG IN</button>`;
}

function adminLogin(){
  let content=document.querySelector('.login-box-js').innerHTML=`
  <p class="login-text-js">Admin LOGIN</p>
  <p class="textbox-label-js">Admin ID</p>
  <div class="collective">
    <div class="textbox-icon"></div>
    <input placeholder="Enter your admin ID here..." class="username-input-js">
  </div>
  <p class="textbox-label-js">Password</p>
  <div class="collective">
    <div class="password-icon"></div>
    <input placeholder="Enter the password" class="username-input-js">
  </div>
  <button class="login-button" onclick="window.location.href='adminModule.html'">LOG IN</button>`;
}
