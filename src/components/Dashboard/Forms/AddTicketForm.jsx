import { useForm } from "react-hook-form";
import { useState } from "react";

const perksList = ["AC", "WiFi", "Breakfast", "Charging Port"];

const AddTicketForm = () => {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Ticket Data:", data);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Add Ticket</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Ticket Title */}
        <div className="md:col-span-2">
          <label className="label">Ticket Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="input"
            placeholder="Dhaka to Cox's Bazar"
          />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>

        {/* Transport Type */}
        <div>
          <label className="label">Transport Type</label>
          <select
            {...register("transport", { required: true })}
            className="input"
          >
            <option value="">Select</option>
            <option>Bus</option>
            <option>Train</option>
            <option>Flight</option>
            <option>Launch</option>
          </select>
          {errors.transport && <p className="error">Required</p>}
        </div>

        {/* From */}
        <div>
          <label className="label">From</label>
          <input
            {...register("from", { required: true })}
            className="input"
            placeholder="Dhaka"
          />
        </div>

        {/* To */}
        <div>
          <label className="label">To</label>
          <input
            {...register("to", { required: true })}
            className="input"
            placeholder="Cox's Bazar"
          />
        </div>

        {/* Price */}
        <div>
          <label className="label">Price (Per Unit)</label>
          <input
            type="number"
            {...register("price", { required: true, min: 1 })}
            className="input"
            placeholder="1200"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="label">Ticket Quantity</label>
          <input
            type="number"
            {...register("quantity", { required: true, min: 1 })}
            className="input"
            placeholder="50"
          />
        </div>

        {/* Departure Date */}
        <div>
          <label className="label">Departure Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="input"
          />
        </div>

        {/* Departure Time */}
        <div>
          <label className="label">Departure Time</label>
          <input
            type="time"
            {...register("time", { required: true })}
            className="input"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="label">Ticket Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImage}
            className="input"
          />
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-2 h-24 rounded-md object-cover"
            />
          )}
        </div>

        {/* Vendor Name */}
        <div>
          <label className="label">Vendor Name</label>
          <input value="ABC Travels" readOnly className="input bg-gray-100" />
        </div>

        {/* Vendor Email */}
        <div>
          <label className="label">Vendor Email</label>
          <input
            value="abc@travels.com"
            readOnly
            className="input bg-gray-100"
          />
        </div>

        {/* Perks */}
        <div className="md:col-span-2">
          <label className="label mb-2 block">Perks</label>
          <div className="flex flex-wrap gap-4">
            {perksList.map((perk) => (
              <label key={perk} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value={perk}
                  {...register("perks")}
                  className="accent-lime-500"
                />
                {perk}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-6 w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-lg font-semibold transition"
      >
        Add Ticket
      </button>
    </form>
  );
};

export default AddTicketForm;
