
const Model = () => {
    return (
        <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">rating :</h3>
    <p className="py-4">description : </p>
  </div>
    );
};

export default Model;