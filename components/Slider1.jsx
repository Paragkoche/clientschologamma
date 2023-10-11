"use client"
import React from 'react'
// import { document } from 'postcss';
function Slider1() {
//     let slides = document.querySelectorAll(".slide");
//     let prev = document.querySelector(".prev");
//     let next = document.querySelector(".next");
//     let index = 0;

//     // Add a variable to store the interval ID
//     let interval;

//     prev.addEventListener("click", function () {
//         slides[index].classList.remove("active");
//         index = (index - 1 + slides.length) % slides.length;
//         slides[index].classList.add("active");
//         // Clear the interval and restart it
//         clearInterval(interval);
//         startAutoSlide();
//     });

    // next.addEventListener("click", function () {
    //     slides[index].classList.remove("active");
    //     index = (index + 1) % slides.length;
    //     slides[index].classList.add("active");
    //     // Clear the interval and restart it
    //     clearInterval(interval);
    //     startAutoSlide();
    // });

    // Add a function to start the auto slide
    // function startAutoSlide() {
    //     // Set the interval to call the next button click every 3 seconds
    //     interval = setInterval(function () {
    //         next.click();
    //     }, 3000);
    // }

    // Call the function when the page loads
    // startAutoSlide();
  return (
    <div>
         <section className="slider1Main">
            <div className="slider1">
                <div className="slide"><img
                        src="/landing page.jpg"
                        alt="First slide"/></div>
                <div className="slide"><img
                        src="/connittee 2.jpg"
                        alt="Second slide"/></div>
                <div className="slide"><img
                        src="/event.jpg"
                        alt="Third slide"/></div>
                <div className="slide"><img
                        src="/committee.jpg"
                        alt="Fourth slide"/></div>
                <div className="prev">❮</div>
                <div className="next">❯</div>
                </div>
        </section>
    </div>
  )
}

export default Slider1
