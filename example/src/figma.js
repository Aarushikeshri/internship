import React from "react";
import map from './map.png';
import first_img from './first_img.png';

const Homepage = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <h1 style={{ fontSize: "28px", color: "#e53e3e", fontWeight: "bold" }}>Study.in</h1>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
              {['Admission', 'RPL', 'Migration Assistance', 'Skill Assessment'].map((item) => (
                <li key={item} style={{ marginRight: "24px" }}>
                  <a href="#" style={{ textDecoration: "none", color: "#4a5568", fontSize: "16px", fontWeight: 500, transition: "color 0.3s" }}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      
      <section style={{ backgroundColor: "#fef2f2", padding: "60px 20px"}}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

          <div style={{display:'flex', flexDirection:'column'}}> 

        <h2 style={{ fontSize: "40px", color: "#1a202c", fontWeight: 700, marginBottom: "16px" }}>
          Are You Facing <span style={{ color: "#e53e3e" }}>No Further Stay</span> Condition?
    
        </h2>
        <p style={{ fontSize: "18px", color: "#4a5568", marginBottom: "32px" }}>
          We can solve your visa-related issues, whether it is a new visa or permanent residency application.
        </p>
        <div style={{display:'flex',flexDirection:'row'}}> 

        <button style={{ padding: "12px",width:'200px', borderRadius: "8px", fontWeight: 600, fontSize: "16px", backgroundColor: "#e53e3e", color: "white", border: "none", cursor: "pointer" }}>Get Visa Help Now</button>

        <button style={{ padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "16px", backgroundColor: "#f7fafc", color: "#e53e3e", border: "none", cursor: "pointer" ,width:'200px'}}>Book Appointment</button>
        </div>
       
          </div>
        <div >
        
        </div>
        <div>
        <img style={{height:'607px', width:'645px'}} src= {first_img}></img>

        </div>
     </div>
        <div>
          <button style={{ color:"red"}}></button>
          <butoon></butoon>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>

      {/* Visa Options Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{ fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "32px" }}>Do You Want To Complete Your Degree Fast Through The RPL?</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
          {['Partner Visa', 'Training Visa', 'Visitor Visa', 'Temporary Graduate Visa', 'Skilled Regional Visa', 'Student Visa'].map((visa) => (
            <div key={visa} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", textAlign: "center", fontSize: "16px", color: "#1a202c", fontWeight: 600, transition: "box-shadow 0.3s" }}>
              {visa}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", backgroundColor: "#ffffff" }}>
        <img src="https://via.placeholder.com/150" alt="Happy Client" style={{ borderRadius: "50%", width: "96px", height: "96px", marginRight: "24px" }} />
        <div>
          <h4 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Happy Clients</h4>
          <p style={{ color: "#231F20"}}>2.5k+ satisfied clients</p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "60px 20px" }}>
        <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "20px" }}>Why Should You Choose Study.in</h3>
        <p style={{ fontSize: "18px", color: "#4a5568", lineHeight: 1.6 }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr 
        </p>
        <button style={{padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "16px", backgroundColor: "#e53e3e", color: "white", border: "none", cursor: "pointer"}}>Contact us</button>
      </section>

      {/* Footer */}
      <footer style={{  padding: "24px 0", color: "##231F20", textAlign: "center" }}>
        <h1>Office Location</h1>
        <nav>
          <p style={{ fontSize: "18px", color: "#4a5568", lineHeight: 1.6 }}>To check the location on Google Maps, click any of the below locations.</p>
          <img style={{height:'607px', width:'645px'}} src= {map}></img>
        </nav>
      </footer>
    </div>
  );
};

export default Homepage;
