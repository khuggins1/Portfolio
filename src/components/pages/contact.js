import React from 'react';

// const Contact = () => (
//     <div>Contact</div>
// );

const Contact = () => {
return (
    <section>
      <h1>Holla at me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Contact info</h2>
    <div class="contactinfo">
     P: 562-326-0257
     E: <a href="mailto:kassim.huggins@gmail.com">Email your info</a>
     Github: <a href="https://github.com/khuggins1">Follow my work</a>
      <a href="https://linkedin.com/in/kassim-huggins">Linkedin</a>
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="kassim-huggins"><a class="LI-simple-link" href='https://www.linkedin.com/in/kassim-huggins?trk=profile-badge'>Kassim Huggins</a></div>
      Resume: <a href="https://drive.google.com/file/d/1wHtH1PP6w3XS5nMrnmDpJNfp3knateEa/view?usp=sharing">Kassim Huggins</a>
    </div>
    </section>
    //  <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    );
}

<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>






export default Contact;