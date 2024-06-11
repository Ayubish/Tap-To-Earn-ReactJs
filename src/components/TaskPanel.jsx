const TaskPanel = ({ heading, children }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 mt-5 border border-slate-400 rounded-lg">
        <div className="flex items-center gap-3">
          <p className="text-2xl">🗓</p>
          <div>
            <p>
              {heading}
              <br />
              🪙 {children}
            </p>
          </div>
        </div>
        <i className="fa fa-chevron-right text-xl"></i>
      </div>
    </>
  );
};
export default TaskPanel;
