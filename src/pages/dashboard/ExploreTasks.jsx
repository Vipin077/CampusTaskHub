import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, IndianRupee, User, Eye } from "lucide-react";

function ExploreTasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

//Accepted Task
const handleAcceptTask = async (taskId) => {

  try {

    const token =
      localStorage.getItem("token");

    await axios.post(
      `http://localhost:8082/api/tasks/${taskId}/accept`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Task Accepted Successfully!");

    fetchTasks();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Could not accept task"
    );
  }
};



  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8082/api/tasks/explore",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter(

    (task) =>
      task.title?.toLowerCase().includes(search.toLowerCase()) ||
      task.description?.toLowerCase().includes(search.toLowerCase())
  );




  return (

    

    <div
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background:
            "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(59,130,246,0.12))",
          backdropFilter: "blur(25px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "32px",
          padding: "40px",
          boxShadow:
            "0 0 80px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
         <h1
  style={{
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "12px",
  }}
>
  Explore Tasks
</h1>

<p
  style={{
    color: "#cbd5e1",
    fontSize: "18px",
  }}
>
  Discover opportunities posted across campus
</p>
        </div>

        {/* Search Bar */}
        <div
          style={{
            position: "relative",
            marginBottom: "40px",
          }}
        >
          <Search
            size={22}
            style={{
              position: "absolute",
              left: "18px",
              top: "18px",
              color: "#ec4899",
            }}
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              height: "60px",
              paddingLeft: "55px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Loading */}
        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "50px",
              color: "#94a3b8",
            }}
          >
            Loading tasks...
          </div>
        ) : filteredTasks.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "50px",
              color: "#94a3b8",
            }}
          >
            No tasks found.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredTasks.map((task) => (


              <div
                key={task.id}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "24px",
                  transition: "0.3s ease",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    marginBottom: "12px",
                  }}
                >
                  📌 {task.title}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    minHeight: "70px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  {task.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IndianRupee size={18} color="#facc15" />
                    ₹{task.reward}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Calendar size={18} color="#a855f7" />
                    {task.deadline}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <User size={18} color="#38bdf8" />
                    {task.createdByName}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <button  onClick={() => setSelectedTask(task)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <Eye size={18} />
                    {" "}View
                  </button>

                <button
  onClick={() =>{  console.log(task);
    handleAcceptTask(task.id)}
    }  style={{
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "14px",
    background:
      "linear-gradient(135deg,#ec4899,#8b5cf6)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  Accept Task
</button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      {selectedTask && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        width: "600px",
        maxWidth: "90%",
        background:
          "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(59,130,246,0.15))",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        padding: "30px",
        color: "white",
      }}
    >
      <h2>{selectedTask.title}</h2>

      <p>{selectedTask.description}</p>

      <p>
        <strong>Reward:</strong> ₹{selectedTask.reward}
      </p>

      <p>
        <strong>Deadline:</strong> {selectedTask.deadline}
      </p>

      <p>
        <strong>Posted By:</strong>{" "}
        {selectedTask.createdByName}
      </p>

      <button
        onClick={() => setSelectedTask(null)}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg,#ec4899,#8b5cf6)",
          color: "white",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
    
  );
}

export default ExploreTasks;