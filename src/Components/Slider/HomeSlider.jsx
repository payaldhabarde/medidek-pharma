import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const HomeSlider = () => {
    const navigate=useNavigate()

  return (
    <Carousel className="rounded-xl top-0">
      <div className="relative h-full w-full">
        <img
          src="https://www.truehealthdocs.com/wp-content/uploads/2021/06/Preventative-Care-and-Planning-1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             Our researchers are focused on

Developing Innovative
New Therapies...
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Our mission is to build a healthier tomorrow for patients
with progressive non-viral liver diseases
            </Typography>
            <div className="flex justify-center mr-6 gap-2">
              <Button size="lg" color="white" onClick={()=>navigate("/all")}>
              Discover Now
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1cpO5X.img?w=700&h=467&m=4&q=99"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute -inset-12 mt-12 mr-12 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            We will Help You
To Live Healthy Life
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Our mission is to build a healthier tomorrow for patients
with progressive non-viral liver diseases.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" onClick={()=>navigate("/all")}>
              Discover Now
              </Button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://cdn.sanity.io/images/0vv8moc6/ophtalmology/f7434cec376c26e70dffb145ffcc38c12043e100-1200x800.jpg?fit=crop&auto=format"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 items-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-48 text-3xl md:text-4xl lg:text-5xl"
            >
        We are dedicated to the
Discovery, Development &
Commercialization
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Of innovative therapies intended to significantly improve outcomes in patients
suffering from life-threatening diseases.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" onClick={()=>navigate("/all")}>
              Discover Now
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>

  )
}

export default HomeSlider
