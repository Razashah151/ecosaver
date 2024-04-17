import React from 'react';
import '../css/UserProfile.css';
const UserProfile = () => {
  return (
    <div className="user-profile-user-profile">
      <section className="user-profile-shah_1">
        <header>User Profile</header>
        <form action="#" className="user-profile-form">
          <div className="user-profile-input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>
          <div className="user-profile-input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter Email" required />
          </div>
          <div className="user-profile-column">
            <div className="user-profile-input-box">
              <label>Phone No</label>
              <input type="number" placeholder="Enter Phone no" required />
            </div>
            <div className="user-profile-input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>
          <div className="user-profile-gender-box">
            <h3>Gender</h3>
            <div className="user-profile-gender-option">
              <div className="user-profile-gender">
                <input type="radio" id="check-male" name="gender" defaultChecked />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="user-profile-gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="user-profile-gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="user-profile-input-box user-profile-address">
            <label>Address</label>
            <input type="text" placeholder="Enter street Address" required />
            <input type="text" placeholder="Enter street Address line" required />
            <div className="user-profile-column">
              <div className="user-profile-select-box">
                <select>
                  <option hidden>country</option>
                  <option>America</option>
                  <option>Russia</option>
                  <option>China</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>Nepal</option>
                  <option>Afghanistan</option>
                  <option>Australia</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="user-profile-column">
              <input type="text" placeholder="Enter your region" required />
              <input type="number" placeholder="Enter postal code" required />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default UserProfile;