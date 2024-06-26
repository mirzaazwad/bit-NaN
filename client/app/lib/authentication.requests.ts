import { ILogin } from "../utils/templates/login";
import { IRegister } from "../utils/templates/signup";

export async function login(data: ILogin) {
  try {
    const result = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await result.json();
  } catch (err) {
    return { err };
  }
}

export async function register(data: IRegister) {
  try {
    const result = await fetch("http://localhost:8000/api/users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await result.json();
  } catch (err) {
    return { err };
  }
}

