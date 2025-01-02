import React, { ChangeEvent, useState } from "react";

// Define the type for form inputs
type FormDataType = {
  username: string;
  age: string;
};

const Form = () => {
  const [formInputs, setFormInputs] = useState<FormDataType>({
    username: "",
    age: "",
  });

  // Handle onChange
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // Destructure properties from event.target
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value })); // Update state immutably
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form Submitted Successfully!! Form Data:", formInputs); // Log form data
  };

  return (
    <div>
      <h2>Form Example in React</h2>

      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formInputs.username} // Controlled component
          onChange={handleChange} // Input change handler
        />
        <br />

        {/* Age Input */}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formInputs.age} // Controlled component
          onChange={handleChange} // Input change handler
        />
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
