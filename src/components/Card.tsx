import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  instagram: string;
  feedback: string;
  city_country: string;
  image: string;
  index: number;
}

const Card = ({name, instagram, feedback, city_country, image, index}: Props) => {
  return (
    <div key={index} className="w-full p-2 md:w-1/2 lg:w-1/4">
            <div className="rounded-xl border p-4">
              <div className="flex items-center">
                <Image
                  className="mr-4 rounded-full border-4 border-neutral-400"
                  src={image}
                  width={80}
                  height={80}
                  alt={name}
                />
                <div>
                  <h4 className="w-full">{name}</h4>
                  <span className="text-sm text-neutral-600">
                    {instagram}
                  </span>
                </div>
              </div>
              <p className="p-4">{feedback}</p>
              <p className="text-sm text-neutral-400">
                {city_country}
              </p>
            </div>
          </div>
  )
}

export default Card