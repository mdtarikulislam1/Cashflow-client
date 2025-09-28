import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const newData = {
        ...data,
        addDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
      };

      const res = await axios.post(
        "https://cashflow-server-blue.vercel.app/api/cashflows",
        newData
      );

      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data submitted successfully!",
        timer: 2000,
        showConfirmButton: false,
      });

      reset();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err?.text}`,
      });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
        Add Your Cash<span className="text-blue-700">flow</span>
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 lg:grid-cols-2"
      >
        {/* Type */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Type</label>
          <select
            {...register("type", { required: true })}
            className="border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type && (
            <span className="text-red-500">Type is required</span>
          )}
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Amount</label>
          <input
            type="number"
            {...register("amount", { required: true })}
            className="border p-2 rounded"
            placeholder="Enter amount"
          />
          {errors.amount && (
            <span className="text-red-500">Amount is required</span>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Category</label>
          <select
            {...register("category", { required: true })}
            className="border p-2 rounded"
          >
            <option value="">Select Categogy</option>
            <option value="house">House</option>
            <option value="tax">Tax</option>
            <option value="shopping">Shopping</option>
            <option value="food">Food</option>
            <option value="job">Job</option>
          </select>
          {errors.category && (
            <span className="text-red-500">Category is required</span>
          )}
        </div>

        {/* Payment method */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Payment Method</label>
          <select
            {...register("method", { required: true })}
            className="border p-2 rounded"
          >
            <option value="">Select payment Method</option>
            <option value="bank">Bank</option>
            <option value="nagad">Nagad</option>
            <option value="bkash">Bkash</option>
            <option value="manual">Manual</option>
            <option value="another">Another</option>
          </select>
          {errors.method && (
            <span className="text-red-500">Method is required</span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col lg:col-span-2">
          <label className="mb-2 font-semibold">Description</label>
          <textarea
            {...register("description")}
            className="border p-2 rounded"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col lg:col-span-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-w-full block text-white py-2 text-center rounded hover:from-blue-800 hover:via-blue-600 hover:to-blue-400 transition-all duration-800 font-bold text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
