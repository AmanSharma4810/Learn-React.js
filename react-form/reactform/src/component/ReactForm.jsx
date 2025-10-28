export default function ReactForm(){
    return (
        <>
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        // onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Contact Form
        </h2>

        <label className="block mb-2 text-gray-600">Name</label>
        <input
          type="text"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <label className="block mb-2 text-gray-600">Email</label>
        <input
          type="email"
          name="email"
        //   value={formData.email}
        //   onChange={handleChange}
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <label className="block mb-2 text-gray-600">Phone Number</label>
        <input
          type="tel"
          name="phno"
        //   value={formData.phno}
        //   onChange={handleChange}
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <label className="block mb-2 text-gray-600">Address</label>
        <textarea
          name="address"
        //   value={formData.address}
        //   onChange={handleChange}
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          rows="3"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
        
        </>

    )
}