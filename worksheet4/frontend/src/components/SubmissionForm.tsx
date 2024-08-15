import React from "react";
import { useForm } from "react-hook-form";

export default function SubmissionForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:8082/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the article");
      }

      // Clear the form fields after successful submission
      reset();
      alert("Article submitted successfully!");
    } catch (error) {
      console.error("Error submitting article:", error);
      alert("There was an error submitting your article. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" required />
      <p>
        <input {...register("authors")} placeholder="Authors" required />
      </p>
      <p>
        <input {...register("source")} placeholder="Source" required />
      </p>
      <p>
        <input
          {...register("pubyear")}
          placeholder="Publication Year"
          type="number"
          required
        />
      </p>
      <p>
        <input {...register("doi")} placeholder="DOI" required />
      </p>

      <select {...register("linked_discussion")} required>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>
      <input type="submit" />
    </form>
  );
}
