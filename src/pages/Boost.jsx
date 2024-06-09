const Boost = () => {
  let taskStyle =
    "flex items-center gap-3 p-3 border border-slate-400 rounded-lg";
  return (
    <>
      <div className="h-[90%] grid gap-7">
        <h2>Earn More with Boosts</h2>
        <div className="flex justify-between">
          <div className="p-6 bg-sky-500 rounded-md">
            <h2>⚡x5</h2>
            <p>for 20 sec</p>
          </div>
          <div className="p-6 bg-indigo-700 rounded-md">
            <h2>⛽</h2>
            <h2>Full Tank</h2>
          </div>
        </div>

        <div className="grid gap-3 h-[90%] overflow-scroll no-scrollbar">
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
            <i className="fa fa-chevron-right justify-self-end"></i>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
          <div className={taskStyle}>
            <i className="fa fa-home" aria-hidden="true"></i>
            <div>
              <p>Follow our community on X.</p>
              <p>250 000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boost;
