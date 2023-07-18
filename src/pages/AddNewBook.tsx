import { useForm } from "react-hook-form";

export default function AddNewBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddBook = (data) => {
    const formData = new FormData();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Add a New Book</h2>
    </div>
  );
}
