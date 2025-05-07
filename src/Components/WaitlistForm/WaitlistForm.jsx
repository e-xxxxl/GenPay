// import React, { useState } from 'react';

// const WaitlistForm = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     phonenumber: ''
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = 'https://script.google.com/macros/s/AKfycbwQvIuSfdF_pZm-sabh0d-XEF-M_cUt6BXYlizBCtokTXL-IqaULN4ke13DvDg79kvC/exec'; // Replace with your actual deployed URL
//       await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       setStatus('🎉 Successfully joined the waitlist!');
//       setFormData({ fullname: '', email: '', phonenumber: '' });
//     } catch (error) {
//       console.error('Submission error:', error);
//       setStatus('❌ Failed to join. Please try again.');
//     }
//   };

//   return (
//     <section className="bg-white text-black px-6 py-12">
//       <div className="max-w-2xl m-10 space-y-8">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-2">What Is GenPay?</h2>
//           <p className="text-lg">
//             GenPay is an all-in-one social commerce platform designed for the modern event-goer...
//           </p>
//         </div>

//         <div>
//           <h3 className="text-xl font-bold mb-4">Join our wait-list</h3>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullname"
//               placeholder="Full Name"
//               value={formData.fullname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-full"
//               required
//             />
//             <input
//               type="tel"
//               name="phonenumber"
//               placeholder="Phone Number"
//               value={formData.phonenumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-full"
//               required
//             />
//             <div className="flex items-center space-x-2">
//               <input type="checkbox" id="email-updates" className="accent-black" />
//               <label htmlFor="email-updates" className="text-sm">
//                 Receive emails from GenPay for updates
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-[rgba(229,255,0,1)] font-bold px-6 py-2 rounded-full hover:opacity-90"
//             >
//               JOIN
//             </button>
//             {status && <p className="text-sm mt-2">{status}</p>}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WaitlistForm;


import React, { useState } from 'react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');
    
    try {
      const url = 'https://script.google.com/macros/s/AKfycbyhwb8V7H__dQMoSwyHykzlpMUWgooXxk3qEJOs1xXxxLBJQIvEagblqp9nxEUdorUAvA/exec';
      
      // Option 1: Using JSONP approach with form data
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      
      // Create a hidden iframe to handle the response
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form inside the iframe
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = url;
      
      // Add form data as hidden inputs
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });
      
      // Submit the form in the iframe
      iframe.contentDocument.body.appendChild(formElement);
      formElement.submit();
      
      // Set success status after a short delay
      setTimeout(() => {
        setStatus('🎉 Successfully joined the waitlist!');
        setFormData({ fullname: '', email: '', phonenumber: '' });
        setIsSubmitting(false);
        
        // Remove iframe after some time
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 5000);
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('❌ Failed to join. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-black px-6 py-12">
      <div className="max-w-2xl m-10 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">What Is GenPay?</h2>
          <p className="text-lg">
            GenPay is an all-in-one social commerce platform designed for the modern event-goer...
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Join our wait-list</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full"
              required
            />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-full"
              required
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email-updates" className="accent-black" />
              <label htmlFor="email-updates" className="text-sm">
                Receive emails from GenPay for updates
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-[rgba(229,255,0,1)] font-bold px-6 py-2 rounded-full hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBMITTING...' : 'JOIN'}
            </button>
            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;