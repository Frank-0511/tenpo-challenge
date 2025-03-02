import { Card, InputField } from "@/shared/components";
import { LoginFormInputs, loginSchema } from "../../schemas";

import { useForm } from "react-hook-form";
import { useLogin } from "@/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin();

  return (
    <div className="flex items-center justify-center h-full w-full my-auto px-6">
      <Card title="Iniciar sesión" className="-mt-10">
        <form onSubmit={handleSubmit((data) => mutate(data))}>
          <InputField
            label="Correo electrónico"
            placeholder="ejemplo@example.com"
            error={errors.email}
            register={register("email")}
          />

          <InputField
            label="Contraseña"
            type="password"
            placeholder="********"
            error={errors.password}
            register={register("password")}
          />

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary no-animation"
              disabled={Object.keys(errors).length > 0 || isPending}
            >
              {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
