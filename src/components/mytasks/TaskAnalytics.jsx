const TaskAnalytics = ({ tasks }) => {

    // =========================
    // ANALYTICS
    // =========================

    const totalTasks = tasks.length;

    const openTasks = tasks.filter(
        (task) => task.status === "OPEN"
    ).length;

    const closedTasks = tasks.filter(
        (task) => task.status === "CLOSED"
    ).length;

    const totalReward = tasks.reduce(

        (sum, task) => sum + Number(task.reward),

        0
    );



    // =========================
    // UI
    // =========================

    return (

        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-6
                mt-8
                mb-10
            "
        >

            {/* TOTAL TASKS */}

            <div
                className="
                    bg-white
                    shadow-md
                    rounded-2xl
                    p-6
                    border
                "
            >

                <h3
                    className="
                        text-gray-500
                        text-lg
                    "
                >
                    Total Tasks
                </h3>

                <p
                    className="
                        text-4xl
                        font-bold
                        mt-3
                    "
                >
                    {totalTasks}
                </p>

            </div>



            {/* OPEN TASKS */}

            <div
                className="
                    bg-white
                    shadow-md
                    rounded-2xl
                    p-6
                    border
                "
            >

                <h3
                    className="
                        text-gray-500
                        text-lg
                    "
                >
                    Open Tasks
                </h3>

                <p
                    className="
                        text-4xl
                        font-bold
                        text-green-600
                        mt-3
                    "
                >
                    {openTasks}
                </p>

            </div>



            {/* CLOSED TASKS */}

            <div
                className="
                    bg-white
                    shadow-md
                    rounded-2xl
                    p-6
                    border
                "
            >

                <h3
                    className="
                        text-gray-500
                        text-lg
                    "
                >
                    Closed Tasks
                </h3>

                <p
                    className="
                        text-4xl
                        font-bold
                        text-red-600
                        mt-3
                    "
                >
                    {closedTasks}
                </p>

            </div>



            {/* TOTAL REWARD */}

            <div
                className="
                    bg-white
                    shadow-md
                    rounded-2xl
                    p-6
                    border
                "
            >

                <h3
                    className="
                        text-gray-500
                        text-lg
                    "
                >
                    Total Reward
                </h3>

                <p
                    className="
                        text-4xl
                        font-bold
                        text-blue-600
                        mt-3
                    "
                >
                    ₹ {totalReward}
                </p>

            </div>

        </div>
    );
};

export default TaskAnalytics;