const Contact = () => {
  return (
    <section className='section-contact' id='section-contact'>
      <div className='row'>
        <div className='contact'>
          <div className='overlay'>&nbsp;</div>
          <div className='contact__form'>
            <form
              action=''
              name='contact-form'
              className='form'
              method='POST'
              data-netlify='true'
              data-netlify-recaptcha='true'
            >
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
                  required
                ></textarea>

                <label htmlFor='subject' className='form__label'>
                  Message
                </label>
              </div>
              <div className='form__group'>
                <div data-netlify-recaptcha='true'></div>
              </div>

              <div className='form__group'>
                <button className='btn'>Send message &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
