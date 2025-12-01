import React, { useState } from "react";
import bgImage from "./assets/bg.png"; // <-- your background image

function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!form.name || !form.email || !form.phone || !form.role) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({ name: "", email: "", phone: "", role: "" });
  };

  const editUser = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const deleteUser = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>User Management System</h1>

        {/* FORM */}
        <label style={labelStyle}>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="User">User</option>
        </select>

        <button onClick={addUser} style={buttonStyle}>
          {editIndex !== null ? "Update User" : "Add User"}
        </button>

        {/* USER LIST */}
        <h2 style={listTitleStyle}>User List</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i} style={rowStyle}>
                <td style={tdStyle}>{u.name}</td>
                <td style={tdStyle}>{u.email}</td>
                <td style={tdStyle}>{u.phone}</td>
                <td style={tdStyle}>{u.role}</td>
                <td style={tdStyle}>

                  {/* EDIT BUTTON */}
                  <button
                    style={editBtn}
                    onClick={() => editUser(i)}
                  >
                    Edit
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    style={deleteBtn}
                    onClick={() => deleteUser(i)}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======== STYLES ======== */

const backgroundStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardStyle = {
  width: "90%",
  maxWidth: "850px",
  background: "rgba(255, 255, 255, 0.35)",
  padding: "40px",
  borderRadius: "20px",
  border: "1.5px solid white",
  backdropFilter: "blur(12px)",
  color: "black",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "34px",
  fontWeight: "700",
  marginBottom: "30px",
  color: "black",
};

const listTitleStyle = {
  marginTop: "30px",
  marginBottom: "15px",
  fontSize: "26px",
  fontWeight: "700",
};

const labelStyle = {
  marginTop: "14px",
  fontSize: "16px",
  fontWeight: "600",
  color: "black",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "6px",
  marginBottom: "18px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.55)",
  border: "1.5px solid #dddddd",
  color: "black",
  outline: "none",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  marginTop: "15px",
  background: "#0d6efd",
  color: "white",
  fontSize: "17px",
  border: "none",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
  background: "rgba(255,255,255,0.6)",
  borderRadius: "12px",
  overflow: "hidden",
  color: "black",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "700",
  background: "rgba(255,255,255,0.85)",
  borderBottom: "2px solid #ccc",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ccc",
};

const rowStyle = {
  transition: "0.3s",
};

/* Buttons */
const editBtn = {
  marginRight: "8px",
  padding: "6px 12px",
  background: "#ffc107",
  color: "black",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "6px 12px",
  background: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default App;
