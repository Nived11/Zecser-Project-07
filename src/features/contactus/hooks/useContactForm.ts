
import { useState } from "react";

export function useContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("This is a dummy form. Data not sent.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return { form, handleChange, handleSubmit };
}