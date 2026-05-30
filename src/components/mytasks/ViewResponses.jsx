const ViewResponses = ({ task }) => {

    // =========================
    // DUMMY RESPONSES
    // =========================

    const responses = [

        {
            id: 1,
            user: "rahul123",
            message:
                "I can complete this today.",
            offeredPrice: 300
        },

        {
            id: 2,
            user: "amit_dev",
            message:
                "I already did similar tasks.",
            offeredPrice: 250
        }
    ];



    // =========================
    // UI
    // =========================

    return (

        <div className="mt-10">

            {/* TITLE */}

            <h2
                className="
                    text-2xl
                    font-bold
                    mb-6
                "
            >
                Responses for:
                {" "}
                {task.title}
            </h2>



            {/* EMPTY STATE */}

            {
                responses.length === 0 ? (

                    <div
                        className="
                            bg-gray-100
                            p-8
                            rounded-xl
                            text-center
                        "
                    >

                        <p
                            className="
                                text-gray-500
                            "
                        >
                            No responses yet
                        </p>

                    </div>

                ) : (

                    <div
                        className="
                            grid
                            gap-5
                        "
                    >

                        {
                            responses.map((response) => (

                                <div

                                    key={response.id}

                                    className="
                                        bg-white
                                        border
                                        shadow-md
                                        rounded-2xl
                                        p-5
                                    "
                                >

                                    {/* USER */}

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                        "
                                    >
                                        👤 {response.user}
                                    </h3>



                                    {/* MESSAGE */}

                                    <p
                                        className="
                                            text-gray-600
                                            mt-3
                                        "
                                    >
                                        {response.message}
                                    </p>



                                    {/* PRICE */}

                                    <p
                                        className="
                                            mt-3
                                        "
                                    >
                                        💰 Offered Price:
                                        {" "}
                                        <span
                                            className="
                                                font-semibold
                                            "
                                        >
                                            ₹
                                            {response.offeredPrice}
                                        </span>
                                    </p>



                                    {/* BUTTONS */}

                                    <div
                                        className="
                                            flex
                                            gap-4
                                            mt-5
                                        "
                                    >

                                        {/* ACCEPT */}

                                        <button
                                            className="
                                                bg-green-500
                                                hover:bg-green-600
                                                text-white
                                                px-5
                                                py-2
                                                rounded-lg
                                            "
                                        >

                                            Accept

                                        </button>



                                        {/* REJECT */}

                                        <button
                                            className="
                                                bg-red-500
                                                hover:bg-red-600
                                                text-white
                                                px-5
                                                py-2
                                                rounded-lg
                                            "
                                        >

                                            Reject

                                        </button>

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                )
            }

        </div>
    );
};

export default ViewResponses;