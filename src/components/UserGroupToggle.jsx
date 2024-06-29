function UserGroupToggle({ setUserGroup }) {
  return (
    <div className="w-full py-4 grid grid-cols-2 gap-4 md:grid-cols-4 ">
      <div className="bg-slate-300 bg_general flex items-end justify-center md:w-56  rounded-md h-32">
        <button
          className="w-32 p-1 my-2 bg-opacity-80 bg-violet-900"
          onClick={() => setUserGroup("general")}
        >
          General
        </button>
      </div>
      <div className="bg-slate-300 bg_farmer flex items-end justify-center md:w-56  rounded-md h-32">
        <button
          className="w-32 p-1 my-2 bg-opacity-80 bg-violet-900"
          onClick={() => setUserGroup("farmer")}
        >
          Farmer
        </button>
      </div>
      <div className="bg-slate-300 bg_traveler flex items-end justify-center md:w-56  rounded-md h-32">
        <button
          className="w-32 p-1 my-2 bg-opacity-80 bg-violet-900"
          onClick={() => setUserGroup("traveler")}
        >
          Traveler
        </button>
      </div>
      <div className="bg-slate-300 bg_event flex items-end justify-center   md:w-56  rounded-md h-32">
        <button
          className="w-32 p-1 my-2 bg-opacity-80 bg-violet-900"
          onClick={() => setUserGroup("eventPlanner")}
        >
          Event Planner
        </button>
      </div>
    </div>
  );
}

export default UserGroupToggle;
