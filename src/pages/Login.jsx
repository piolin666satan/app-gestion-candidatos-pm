import { useState } from "react"

const Login = () => {
  //primer estado para el nombre de usuario, segundo estado para la contraseña, ambos con valor inicial de cadena vacía.
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  //tipo de dato desmarcado, booleano, para el checkbox de recordar usuario predeterminado en false.
  const [remember, setRemember] = useState(false)

  function iniciarSesion(e) {
    e.preventDefault() //evita que el formulario se envíe y recargue la página al hacer clic en el botón de inicio de sesión.
    if(username === "" || password === "" ) {
      return
      alert("el campo de usuario y contraseña no pueden estar vacíos")
    } else if(username === "admin" && password === "hola123") {
      return
      alert("inicio de sesión exitoso, ¡bienvenido admin!")
    } else {
      return
      alert("credenciales incorrectas, por favor intente de nuevo")
    }
  }
  return (
    //contenedor del formulario de login
    <div className="form-login-container">
<div
  class="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
>
  <div class="flex flex-col justify-center items-center space-y-2">
    <h2 class="text-2xl font-medium text-slate-700">Login</h2>
    <p class="text-slate-500">Enter details below.</p>
  </div>
  <form class="w-full mt-4 space-y-3">
    <div>
      
      <input
        class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
        placeholder="Username"
        id="username"
        name="username"
        type="text"
        onChange={function(e) {
          setUsername(e.target.value) //captura la el valor de la variable target del evento de cambio y lo asigna al estado de username usando la función setUsername.
        }}
      />
    </div>
    <div>
      <input
        class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
        placeholder="Password"
        id="password"
        name="password"
        type="password"
        onChange={function(e) {
          setPassword(e.target.value) //captura la el valor de la variable target del evento de cambio y lo asigna al estado de password usando la función setPassword.
        }}
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          class="mr-2 w-4 h-4"
          id="remember"
          name="remember"
          type="checkbox"
          onChange={function() {
            setRemember(!remember) //captura el valor de la propiedad checked del evento de cambio y lo asigna al estado de remember usando la función setRemember.
          }}
        />
        <span class="text-slate-500">Remember me </span>
      </div>
      <a class="text-blue-500 font-medium hover:underline" href="#"
        >Forgot Password</a
      >
    </div>
    <button
      class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
      id="login"
      name="login"
      type="button" //para que no recargue la pagina al hacer clic en el botón de inicio de sesión.
      onClick={function(e) {
        iniciarSesion(e) //llama a la función iniciarSesion y le pasa el evento como argumento.
      }}
    >
      login
    </button>
    <p class="flex justify-center space-x-1">
      <span class="text-slate-700"> Have an account? </span>
      <a class="text-blue-500 hover:underline" href="#">Sign Up</a>
    </p>
  </form>
</div>

    </div>
  )
}

export default Login