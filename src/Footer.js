import React, { useState,useEffect } from 'react';
import logo from './logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaQuora } from 'react-icons/fa';
  
const mapContainerStyle = {
    maxWidth: '400px',
    height: '200px',
  };
const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const footerContentStyle = isMobile ? {
    ...footerContent, // Base styles
    ...footerContentMobile, // Mobile-specific adjustments, including flexDirection: 'column'
  } : footerContent;
  return (
    <>
      <hr class="h-2 my-8 bg-gray-400 border-0"/>
      <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {!isMobile && <div style={leftSectionStyle}>
        <div className='logo'>
            <img src={logo} alt='Logo'></img>
        </div>
        <div style={{ marginTop: '20px', width:'300px', height:'200px' }}>
              <h2 style={contactHeadingStyle}>ABOUT GUINDY TIMES</h2>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                The Guindy Times, official campus magazine of CEG, AC Tech and SAP, provides a platform for writers,
                photographers, editors, videographers, designers, media enthusiasts, artists and many more. Join as
                strangers and grow with the GT family in your journey through college.
              </p>
            </div>
        </div>}
        <div style={middleSectionStyle}>
          <div style={contactUsStyle}>
            <h2 style={contactHeadingStyle}>CONTACT US</h2>
            <div style={contactDetailsStyle}>
              <div style={contactItemStyle}>
                <span role="img" aria-label="phone" style={phoneIconStyle}>☎</span>
                <a href="tel:+919884720197">
                  <p style={contactTextStyle}>
                      <strong>+91 9884720197</strong><br/> 
                      Celena Rose Andrews
                  </p>
                </a>
              </div>
              <div style={contactItemStyle}>
                <span role="img" aria-label="phone" style={phoneIconStyle}>☎</span>
                <a href="tel:+919360281662">
                  <p style={contactTextStyle}>
                    <strong>+91 9360281662</strong><br/> 
                    Insuvai K
                  </p>
                </a>
              </div>
              <div style={contactItemStyle}>
                <span role="img" aria-label="phone" style={phoneIconStyle}>☎</span>
                <a href="tel:+918940728523">
                  <p style={contactTextStyle}>
                    <strong>+91 8940728523</strong><br/> 
                    Hariharasudhan V
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
       
        <div style={rightSectionStyle}>
        <div style={mapContainerStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.388094195557!2d80.23287127476239!3d13.010939987308069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f0d20f797%3A0x59f9f10c66e02a19!2sCollege%20of%20Engineering%2C%20Guindy!5e0!3m2!1sen!2sin!4v1705930070224!5m2!1sen!2sin"
                width="300"
                height="300"
                margin="-100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          
        </div>
      </div>
      <hr style={header}></hr>
      <div style={footerBottom}>
        <div style={copyrightStyle}>
        © COPYRIGHT 2024 <a href="https://guindytimes.com/" target='_blank'>GT</a>
        </div>
        <div style={socialIconsStyle}>
          
          <a href="https://www.facebook.com/TheGuindyTimes/">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/guindytimes">
          <FaTwitter />
        </a>
         
          <a href="https://www.instagram.com/theguindytimes/">
           <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/company/the-guindy-times/mycompany/">
            <FaLinkedin/>
          </a>
          <a href="https://www.youtube.com/channel/UCju-3cjTObCWubOgqZ4xH3A/videos">
            <FaYoutube />
          </a>
          <a href="https://www.quora.com/profile/Guindy-Times">
            <FaQuora />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

const footerStyle = {
    
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 768px)': {
    padding: '10px',
  },
};

const header = {
    marginLeft: '10px',
    marginRight: '10px',
    fontWeight: 'bold'
}


const footerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const footerContentMobile = {
  display: 'flex',
  flexDirection: 'column', // This ensures content stacks vertically on mobile
  justifyContent: 'centre',
  alignItems: 'center',
  padding: '10px 20px',
};

const footerBottom = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 10px', 
  flexShrink: 0, 
};

const leftSectionStyle = {
    flex:1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items in the center horizontally
    justifyContent: 'center',
     // Align items in the center vertically
     '@media (max-width: 768px)': {
        marginRight: '0',
        marginBottom: '20px',
      },
  };
const middleSectionStyle = {
   
  display: 'flex',
  justifyContent: 'column',
  alignItems: 'right',
  flex: '1', // Takes up remaining space
  margin:'130px',
  '@media (max-width: 768px)': {
    marginRight: '0',
    marginLeft: '0',
    marginBottom: '20px',
  },
};

const rightSectionStyle = {
    flex:1,
  display: 'flex',
  flexDirection: 'column',
  marginLeft:'20px',
  alignItems: 'flex-end',
  '@media (max-width: 768px)': {
    marginLeft: '0',
  },
};


const copyrightStyle = {
  marginRight: 'auto',
  color: 'black',
  fontSize: '18px',
  fontWeight: 'bold',
};

const socialIconsStyle = {
  display: 'flex',
  fontSize: '2rem',
  color: '#333',
  padding: '10px 20px',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  
  width:'25%',

};


const contactUsStyle = {
  
  padding: '20px',
  borderRadius: '10px',
  width: 'fit-content',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    padding: '10px',
  },
};

const contactHeadingStyle = {
  margin: '20px',
  color: '#333',
};

const contactDetailsStyle = {
  marginTop: '10px',
};

const contactItemStyle = {
  backgroundColor: 'white',
  padding: '10px',
  color:'black',
  marginBottom: '10px',
  borderRadius: '5px',
  // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    padding: '8px',
  },
};

const contactTextStyle = {
  margin: '0',
  marginLeft: '20px',
  fontSize: '17px'
};

const phoneIconStyle = {
  fontSize: '30px',
  color:'black',
  marginLeft: '-10px'
};

export default Footer;
