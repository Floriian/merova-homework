"use client";
import { Box } from "@/components/box/Box";
import styles from "./LoginForm.module.scss";
import { Alert, Button, Checkbox, Input, Title } from "@/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { loginUser } from "./actions";
export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin: SubmitHandler<LoginSchema> = async (data) => {
    const response = await loginUser(data);
    setErrorMessage(response?.message);
  };

  const onAlertClose = () => setErrorMessage(undefined);

  return (
    <form className={styles.loginform} onSubmit={handleSubmit(onLogin)}>
      <Box className={styles.formbox}>
        <Title>Bejelentkezés</Title>
        {errorMessage && (
          <Alert onIconClick={onAlertClose}>{errorMessage}</Alert>
        )}
        <Input
          label="Email cím:"
          {...register("email")}
          errorText={errors.email}
        />
        <Input
          label="Jelszó:"
          {...register("password")}
          errorText={errors.password}
        />

        <Checkbox
          label="Emlékezzen rám"
          id="#remind-me"
          {...register("rememberMe")}
        />

        <Button>Bejelentkezés</Button>
      </Box>
    </form>
  );
}
