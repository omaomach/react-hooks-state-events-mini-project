import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  function onChangeSubmit(e) {
    let key = e.target.id
    setFormData({
      ...formData,
      [key]:e.target.value
    })
  }

  function taskSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  const selectOptions = [...categories]
  selectOptions.shift()

  return (
    
    <form className="new-task-form" onSubmit={taskSubmit}>
      <label>
        Details
        <input type="text" id="text" name="text"  placeholder={formData.text} onChange={onChangeSubmit} />
      </label>
      <label>
        Category
        <select id="category" value={formData.category} name="category" onChange={onChangeSubmit}>
          {/* render <option> elements for each category here */}
            {selectOptions.map((category) => (
              <option key={category}>{category}</option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
