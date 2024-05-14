import { TESTIMONIALS } from "@/constants/index"
import Image from "next/image"
import Card from "./Card"

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        What Our Clients Said
      </h2>
      <div className="flex flex-wrap">
        {TESTIMONIALS.map(({name, instagram, feedback, city_country, image}, index) => (
          <Card 
            name={name} 
            instagram={instagram} 
            feedback={feedback} 
            city_country={city_country} 
            image={image} 
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials