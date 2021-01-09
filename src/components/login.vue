<template>
  <body>
    <div class="header">
      <h3>digipuskes</h3>
    </div>
    <div class="container1">
      <main id="main-holder">
        <h1 id="login-header">Digital Puskesmas</h1>
        <h4 id="login-sub-header">
          Welcome Back! Please login to your account
        </h4>

        <div id="login-error-msg-holder">
          <p id="login-error-msg">
            Invalid username
            <span id="error-msg-second-line">and/or password</span>
          </p>
        </div>

        <form id="login-form">
          <input
            type="text"
            name="username"
            id="username-field"
            class="login-form-field"
            placeholder="USERNAME"
          />
          <input
            type="password"
            name="password"
            id="password-field"
            class="login-form-field"
            placeholder="PASSWORD"
          />
          <input
            @click="login"
            type="submit"
            value="Login"
            id="login-form-submit"
          />
        </form>
      </main>
    </div>
  </body>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("loginStaff");
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #ffffff;

}

.header {
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;

}
.header h3 {
  color:  #ffffff;
  background-color: #2f80ed;
  text-align: center;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  font-size: 15px;
  margin-right: 15px;
}

.container1{
  height: 100%;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
  color: #2f80ed;
}

#button {
    border-radius: 10px;
    margin: auto;
    width: 90%;
    padding: 10px;
    color: white;
    display: flex;
    text-align: center;
    background-color: #2f80ed;
    justify-content: flex-end;
    align-items: flex-end;
    
  }

  #main-holder {
    width: 50%;
    height: 50%;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 2px rgb(255, 255, 255);
    text-align: center;
  }
  
  #login-header {
    margin: 0;
    font-size: 65px;
    padding-left: 0px;    
  }

  #login-sub-header {
      margin-top: 10px;
      font-size: 20px;
  }

  #login-error-msg-holder {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  
  #login-error-msg {
    width: 23%;
    text-align: center;
    margin: 0;
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #8a0000;
    border: 1px solid #8a0000;
    background-color: #e58f8f;
    opacity: 0;
  }
  
  #error-msg-second-line {
    display: block;
  }
  
  #login-form {
    align-self: flex-start;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  
  .login-form-field::placeholder {
    color: #3a3a3a;
  }
  
  .login-form-field {
    border: none;
    border-bottom: 1px solid #3a3a3a;
    margin-bottom: 10px;
    border-radius: 3px;
    outline: none;
    padding: 0px 0px 5px 5px;
  }
  
  #login-form-submit {
    width: 100%;
    padding: 7px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: #2f80ed;
    cursor: pointer;
    outline: none;
  }
</style>
