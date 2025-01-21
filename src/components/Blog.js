import React from 'react';

export default function Blog() {
  return (
    <div className="blog-bg">
      <h1 className="text-center text-white pt-10">Education Timeline</h1>
      <div className="timeline">
        <div className="timeline-item">
          <h1 className="box-blog">School</h1>
          <p>The Richmond Matric Hr Sec School, Perundurai, Erode</p>
        </div>
        <div className="timeline-item">
          <h1 className="box-blog">College</h1>
          <p>Erode Sengunthar Engineering College, Perundurai</p>
        </div>
        <div className="timeline-item">
          <h1 className="box-blog">Course</h1>
          <p>SAN Technovation - MERN Stack</p>
        </div>
      </div>
    </div>
  );
}

