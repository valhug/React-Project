import React, {useEffect, useState} from 'react'
import "./index.css"

interface Testimonial {
    quote: string;
    author: string;
}

function Testamonials () {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
    ]);

  /*   const [joke, setJoke] = useState<string>("");

    const testimonials =  [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ]; */
    
      const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
      };

      const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
      }

      useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
            .then((res) => res.json())
            .then((data) => {
                const jokes = data.jokes.map((joke:any) => ({
                    quote: joke.setup,
                    author: joke.delivery,
                }));
                setTestimonials((prevTestimonials) => [...prevTestimonials, ...jokes]);
            });
      }, [])

  return (
    <>
    <span className='note'>note: the first 4 are quotes and the rest are jokes,<br /> just click next if you want to keep viewing. enjoy the laughs</span>
     <div className='testimonials'>
        
        <div className='testimonials-quote'>
            {testimonials[currentIndex].quote}
        </div>
        <div className='testimonials-author'>
            - {testimonials[currentIndex].author}
        </div>
        <div className='testimonials-nav'>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
      
    </div></>
   
  );
}

export default Testamonials
