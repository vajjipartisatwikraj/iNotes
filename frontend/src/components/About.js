import React from 'react'

const About = () => {
  return (
    <div className='container my-1'>
      <h2 className="heading my-2" style={{fontWeight: "100"}}>More About iNoteBook....</h2>
      <div className="accordion my-4" id="accordionPanelsStayOpenExample" >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
          What is iNoteBook?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
          <div className="accordion-body">
            iNoteBook is a simple yet powerful <code>MERN (MongoDB, Express, React, Node.js)</code> project designed to build a solid foundation in full-stack development. This project exemplifies key features such as <code>CRUD (Create, Read, Update, Delete)</code> operations, robust database management, and secure user authorization. With iNoteBook, you’ll experience an alert system that keeps you informed, ensuring a seamless and secure login process. The project uses a variety of tools to guarantee that user data remains safe and protected.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            How Safe is User Data?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
          Your data security is our top priority. iNoteBook employs <code>Bcrypt.js</code> to transform your sensitive information into encrypted hash codes, ensuring that your password is securely stored. Moreover, we’ve integrated <code>JWT (JSON Web Token)</code> for user authorization, providing a unique token every time you log in. This ensures that only authorized users can access their data, giving you peace of mind knowing your information is protected at all times.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Why Should You Use iNoteBook?
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">
            iNoteBook is your go-to tool for organizing your important data. With iNoteBook, you can effortlessly add, read, and update your notes, keeping your thoughts and tasks neatly organized. Should you need to, you can also delete notes with ease. Whether you’re managing personal tasks or professional projects, iNoteBook provides a reliable and user-friendly platform to keep everything in check. Its straightforward features and secure environment make it an indispensable tool for anyone looking to manage their information efficiently.
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
