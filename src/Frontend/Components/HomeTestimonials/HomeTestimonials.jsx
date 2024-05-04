import React from 'react'
import "./HomeTestimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const data = [
  {
    avatar:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Tina Snowa",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:"https://images.pexels.com/photos/19843968/pexels-photo-19843968/free-photo-of-studio-shoot-of-a-brunette-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Tina Snowb",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:"https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Tina Snowc",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  },
  {
    avatar:"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Tina Snowd",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto ratione nihil et saepe, eaque recusandae eum laborum, mollitia fugit accusamus quibusdam rerum? Dolor ducimus eligendi corporis sint incidunt iusto?"
  }
]
function HomeTestimonials() {  
  return (
    <section id='Testimonials'>
      <Swiper pagination={true} modules={[Pagination]} className="container testimonials__container mySwiper">
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5>{name}</h5>
            <small className='client__review'>{review}</small>
              </SwiperSlide>
              
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default HomeTestimonials