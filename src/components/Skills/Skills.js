const Skills = () => {
  return (
    <section className='skill'>
      <div className='skill__box'>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-html5'></use>
          </svg>
        </div>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-css3'></use>
          </svg>
        </div>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-javascript'></use>
          </svg>
        </div>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-sass'></use>
          </svg>
        </div>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-php'></use>
          </svg>
        </div>
        <div className='skill__item'>
          <svg className='skill__icon'>
            <use xlinkHref='img/sprite.svg#icon-wordpress'></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
