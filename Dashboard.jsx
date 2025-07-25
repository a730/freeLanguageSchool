import React, { useState } from 'react';

const Dashboard = () => {
  const [user] = useState({
    name: 'Alex Learner',
    enrolledCourses: [
      { title: 'Beginner English', progress: 45 },
      { title: 'Intermediate Spanish', progress: 70 },
      { title: 'Advanced French', progress: 20 },
    ],
    recommended: ['German Basics', 'Italian Conversation'],
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
      <header style={{ backgroundColor: '#0a0a23', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Free Language School Dashboard</h2>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a></li>
            <li><a href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</a></li>
            <li><a href="/logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</a></li>
          </ul>
        </nav>
      </header>

      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Welcome back, {user.name}!</h1>
        <p>Continue your language learning journey. Here's your progress overview.</p>
      </section>

      <section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>Your Enrolled Courses</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {user.enrolledCourses.map((course, index) => (
            <div key={index} style={{ background: 'white', border: '1px solid #ddd', padding: '20px', flex: '1', minWidth: '250px' }}>
              <h3>{course.title}</h3>
              <p>Progress: {course.progress}%</p>
              <div style={{ background: '#ddd', height: '10px', borderRadius: '5px' }}>
                <div style={{ background: '#0a0a23', width: `${course.progress}%`, height: '100%', borderRadius: '5px' }}></div>
              </div>
              <button style={{ marginTop: '10px', background: '#0a0a23', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Continue Learning</button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '20px' }}>
        <h2>Recommended Courses</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {user.recommended.map((rec, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <a href={`/courses/${rec.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: '#0a0a23' }}>{rec}</a>
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ backgroundColor: '#0a0a23', color: 'white', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
        <p>&copy; 2025 Free Language School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
