export default function Login() {
    return (
        <>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="youremail@email.com" />
          </div>
  
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="******"/>
          </div>
  
          <button className="btn btn-primary">Save</button>
        </form>
      </>
    )
}
