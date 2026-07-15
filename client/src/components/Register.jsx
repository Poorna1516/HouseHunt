function Register() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#f8fafc"}}>
      <div style={{background:"#fff",padding:"30px",width:"350px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0.2)"}}>
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" style={{width:"100%",padding:"10px",margin:"10px 0"}}/>
        <input type="email" placeholder="Email" style={{width:"100%",padding:"10px",margin:"10px 0"}}/>
        <input type="password" placeholder="Password" style={{width:"100%",padding:"10px",margin:"10px 0"}}/>
        <button style={{width:"100%",padding:"10px",background:"#2563eb",color:"#fff",border:"none",borderRadius:"5px"}}>Register</button>
      </div>
    </div>
  );
}

export default Register;