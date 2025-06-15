import ImageComponent from '../ImageComponent';
const Hero = () => {
  return (
    <div className='header-hero'>
      <div className='heading-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary__main'>
            Hi, my name is
            <span className='heading-primary__main--bold'>
              <b> Jon</b>
            </span>
            <span className='fullstop'>.</span>
          </span>
          <span className='heading-primary__sub'>
            I'm a <b>frontend developer</b> based in Tokyo, Japan.
          </span>
        </h1>
      </div>

      <div className='heading-photo'>
        <ImageComponent
          src='./img/jon-img.png'
          blHash='LfK_2n%2~qof~pRjNGazxuWBM{t7'
          cssClass='heading-photo__pic'
          alt='profile pic'
        />
        {/* <img
          src='./img/jon-img.png'
          alt='profile pic'
          className='heading-photo__pic'
        /> */}
        <img
          src='./img/jon-blob-img.png'
          alt='profile pic'
          className='heading-photo__png'
        />
        {/* <ImageComponent
          src='./img/jon_port_pic_2.png'
          blHash='LfK_2n%2~qof~pRjNGazxuWBM{t7'
          cssClass='heading-photo__pic'
        />
        <svg
          className='heading-photo__png'
          width='1920'
          height='1080'
          viewBox='0 0 1920 1080'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1353,578.9999999999999C1352.6285836732122,683.4808636756591,1305.6326350842246,828.0307152202478,1233.580177736298,881.1868059255112C1161.5277203883716,934.3428966307746,1021.7591731123924,928.0155513406237,920.6852559124416,897.9365442315802C819.6113387124907,867.8575371225368,674.3947714325676,783.3199210046947,627.1366745365929,700.7127632712507C579.8785776406181,618.1056055378066,587.7336786649613,473.28106210382566,637.1366745365929,402.29359783091576C686.5396704082244,331.30613355800585,823.77598290631,299.453306627018,923.554649766382,274.7879776337914C1023.333316626454,250.12264864056482,1164.234450658089,203.5996201438549,1235.8086756970251,254.30162387155633C1307.3829007359614,305.00362759925775,1353.3714163267878,474.51913632434076,1353,578.9999999999999C1352.6285836732122,683.4808636756591,1305.6326350842246,828.0307152202478,1233.580177736298,881.1868059255112'
            fill='#7f00e0'
          />
        </svg> */}
      </div>
    </div>
  );
};

export default Hero;
