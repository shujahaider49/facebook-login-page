import './App.css';

function App() {
  return (
    <>
      <div class="content">
      <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">Facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
          <form>
            <input type="text" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button class="login">Log In</button>
            <a href="#">Forgot Password ?</a>
            <hr />
            <button class="create-account">Create New Account</button>
          </form>
      </div>
    </div>
    
  </>
  );
}

export default App;
