import React, { useState } from "react";
import HospitalTable from "./HospitalTable";
import DoctorTable from "./DoctorTable";
import PatientTable from "./PatientTable";
import FacilityTable from "./FacilityTable";
import FeesTable from "./FeesTable";
import { Tabs, Tab, Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Alert } from "@mui/material";

// SVG backgrounds for each tab (replace with your own SVGs if needed)
const backgrounds = [
  "linear-gradient(135deg, #1e6322ff 60%, #145717ff 100%), url('https://www.svgrepo.com/show/354095/hospital-building.svg')",
  "linear-gradient(135deg, #1e6322ff 60%, #145717ff 100%), url('https://www.svgrepo.com/show/354096/doctor.svg')",
  "linear-gradient(135deg, #1e6322ff 60%, #145717ff 100%), url('https://www.svgrepo.com/show/354097/patient.svg')",
  "linear-gradient(135deg, #1e6322ff 60%, #145717ff 100%), url('https://www.svgrepo.com/show/354098/facility.svg')",
  "linear-gradient(135deg, #1e6322ff 60%, #145717ff 100%), url('https://www.svgrepo.com/show/354099/bill.svg')",
];

const tabLabels = ["Hospitals", "Doctors", "Patients", "Facilities", "Fees"];

const initialUsers = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

function AuthDialog({ open, onClose, onLogin, onSignup, isSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!username || !password) {
      setError("Username and password required");
      return;
    }
    if (isSignup && !role) {
      setError("Role required");
      return;
    }
    setError("");
    if (isSignup) {
      onSignup({ username, password, role });
    } else {
      onLogin({ username, password });
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isSignup ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField label="Username" fullWidth margin="dense" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="dense" value={password} onChange={(e) => setPassword(e.target.value)} />
        {isSignup && <TextField label="Role (admin/user)" fullWidth margin="dense" value={role} onChange={(e) => setRole(e.target.value)} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Dashboard() {
  const [tab, setTab] = useState(0);
  const [authOpen, setAuthOpen] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState("");

  const handleLogin = ({ username, password }) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      setAuthOpen(false);
      setAuthError("");
    } else {
      setAuthError("Invalid credentials");
    }
  };

  const handleSignup = ({ username, password, role }) => {
    if (users.some((u) => u.username === username)) {
      setAuthError("Username already exists");
      return;
    }
    const newUser = { username, password, role };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setAuthOpen(false);
    setAuthError("");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthOpen(true);
    setIsSignup(false);
  };

  const renderTabContent = () => {
    switch (tab) {
      case 0:
        return <HospitalTable />;
      case 1:
        return <DoctorTable />;
      case 2:
        return <PatientTable />;
      case 3:
        return <FacilityTable />;
      case 4:
        return <FeesTable />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `${backgrounds[tab]} no-repeat right bottom/220px`,
        color: "#fff",
        p: 4,
        transition: "background 0.3s",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Healthhub-dev
        </Typography>
        {currentUser && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1">
              Welcome, {currentUser.username} ({currentUser.role})
            </Typography>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Box>
      {!currentUser && (
        <Box sx={{ mb: 2 }}>
          {authError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {authError}
            </Alert>
          )}
          <Button
            variant="contained"
            onClick={() => {
              setIsSignup(false);
              setAuthOpen(true);
            }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={() => {
              setIsSignup(true);
              setAuthOpen(true);
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
      <AuthDialog open={authOpen && !currentUser} onClose={() => setAuthOpen(false)} onLogin={handleLogin} onSignup={handleSignup} isSignup={isSignup} />
      {currentUser && (
        <>
          <Tabs
            value={tab}
            onChange={(_, newTab) => setTab(newTab)}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              mb: 3,
              background: "#fff",
              borderRadius: 2,
              color: "#333",
              "& .Mui-selected": { color: "#1976d2" },
            }}
          >
            {tabLabels.map((label, idx) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
          <Box sx={{ background: "rgba(255,255,255,0.85)", borderRadius: 2, p: 2, color: "#333" }}>{renderTabContent()}</Box>
        </>
      )}
    </Box>
  );
}
