"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginForm = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState({
    username: "19-4872",
    password: "Ogpi1013a",
    // username: "",
    // password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onSubmit(form);
  };

  const VisibleIcon = () => {
    return (
      <button
        className="absolute right-3 top-3"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (
          <AiFillEye size={23} color="grey" />
        ) : (
          <AiFillEyeInvisible size={23} color="grey" />
        )}
      </button>
    );
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          placeholder="00-0000"
          required
          type="text"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <div className="relative">
          <TextInput
            id="password"
            required
            type={!showPassword ? "password" : "text"}
            value={form.password}
            onChange={handleChange}
            rightIcon={() => <></>}
          />
          <VisibleIcon />
        </div>
      </div>

      <Button disabled={isLoading} isProcessing={isLoading} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
