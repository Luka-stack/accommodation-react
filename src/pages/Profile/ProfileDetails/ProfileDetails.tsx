export default function ProfileDetails() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="******"/>
        </div>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
