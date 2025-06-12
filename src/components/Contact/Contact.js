import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': form.getAttribute('name'),
        ...formData,
      }).toString(),
    })
      .then(() => alert('Form submitted successfully!'))
      .catch((error) => alert(error));
  };

  return (
    <section className='section-contact' id='section-contact'>
      <div className='row'>
        <div className='contact'>
          <div className='overlay'>&nbsp;</div>
          <div className='contact__form'>
            <form
              name='portfolioContact'
              className='form'
              method='POST'
              data-netlify='true'
              onSubmit={handleSubmit}
            >
              <input type='hidden' name='form-name' value='portfolioContact' />
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>
                  You can hire me<span className='fullstop'>.</span>
                </h2>
              </div>
              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  placeholder='Full name'
                  required
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor='name' className='form__label'>
                  Full name
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='email'
                  className='form__input'
                  placeholder='Email address'
                  required
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor='email' className='form__label'>
                  Email address
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  placeholder='Subject'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor='subject' className='form__label'>
                  Subject
                </label>
              </div>
              <div className='form__group'>
                <textarea
                  className='form__textarea'
                  name='message'
                  id='message'
                  cols='30'
                  rows='6'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <label htmlFor='subject' className='form__label'>
                  Message
                </label>
              </div>
              {/* <div className='form__group'>
                <div data-netlify-recaptcha='true'></div>
              </div> */}

              <div className='form__group'>
                <button className='btn' type='submit'>
                  Send message &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
