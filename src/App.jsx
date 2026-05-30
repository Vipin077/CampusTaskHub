import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import EditTaskModal from "./components/mytasks/EditTaskModal";
import ExploreTasks from "./pages/dashboard/ExploreTasks";
import MyTasks from "./pages/dashboard/MyTasks";
import Messages from "./pages/dashboard/Messages";
import Responses from "./pages/dashboard/Responses";
import Earnings from "./pages/dashboard/Earnings";
import Leaderboard from "./pages/dashboard/Leaderboard";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
import CreateTaskForm from "./components/mytasks/CreateTaskForm";
import PostedTask from "./components/mytasks/PostedTask";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


        {/* Protected Dashboard Layout */}

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >

          {/* Default Route */}

          <Route index element={<ExploreTasks />} />

          <Route path="explore" element={<ExploreTasks />} />

          <Route path="mytasks" element={<MyTasks />} />

          <Route path="messages" element={<Messages />} />

          <Route path="responses" element={<Responses />} />

          <Route path="earnings" element={<Earnings />} />

          <Route path="leaderboard" element={<Leaderboard />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

         <Route path="/home/mytasks/create" element={<CreateTaskForm />} /> 
           <Route path="/home/mytasks/posted" element={<PostedTask />} /> 
            <Route path="/home/mytasks/responses" element={<Responses />} /> 
             

      </Routes>

         


    </BrowserRouter>
  );
}

export default App;