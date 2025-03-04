import { HttpResponse, http, passthrough } from "msw";
import { LoginRequest, LoginResponse } from "@/core/types";

const mockUsers = [
  {
    email: "test@example.com",
    password: "123456",
    name: "John Doe",
    token: "fake-jwt-token-1",
  },
  {
    email: "user2@example.com",
    password: "password123",
    name: "Jane Doe",
    token: "fake-jwt-token-2",
  },
  {
    email: "admin@example.com",
    password: "adminpass",
    name: "Admin User",
    token: "fake-jwt-token-3",
  },
];

export const handlers = [
  http.post("/api/login", async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest;

    await new Promise((res) => setTimeout(res, 1000));

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const response: LoginResponse = {
        token: user.token,
        user: { name: user.name, email: user.email },
      };
      return HttpResponse.json(response, { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }
  }),
  http.get(import.meta.env.VITE_API_PUBLIC_URL, ({ request }) => {
    if (request.headers.has("x-msw-bypass")) {
      return passthrough();
    }

    return HttpResponse.text("Mocked response");
  }),
];
