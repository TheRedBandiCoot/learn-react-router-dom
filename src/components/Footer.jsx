import React from 'react';

const Footer = () => {
  const time = new Date();
  const day = time.getDate();
  const month = time.toLocaleString('en-US', { month: 'short' });
  const year = time.getFullYear();
  return (
    <>
      <footer>
        &#169; 16th OCT, 2023 <b style={{ marginLeft: '0.3rem' }}>#VANLIFE</b>
      </footer>
      {/* <footer>
        &#169; {day}th {month}, {year} #VANLIFE
      </footer> */}
    </>
  );
};

export default Footer;
