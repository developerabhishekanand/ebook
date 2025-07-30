import React from 'react'
import BannerStyle, { Title } from './style'
import StyledNextImage from '../ImageBox'
import  book  from "@/public/images/book.jpg"

const index = () => {
  return (
    <BannerStyle>
      <div className="flex flex-col md:flex-row">
        <div className="left order-2 md:order-1 md:w-1/2">
          <div className="title-block">
            <Title> Hello, welcomes here to learn <br /> something <span className='text-pink-700'>new everyday! </span></Title>
            <p>Books hold power. Some have the ability to shift a person’s worldview with just a sentence. The Alchemist by Paulo Coelho is one such book.
              Among the many memorable quotes in it, this one stands out:
            </p>
            <p><strong className='font-bold'>And, when you want something, all the universe conspires in helping you to achieve it.</strong></p>
          </div>
          <div className="email-block">
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter your email to login" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <div className="btn-block">
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="right md:order-2 md:w-1/2">
          <StyledNextImage src={book} alt="Random banner image" />
        </div>
      </div>
    </BannerStyle>
  )
}

export default index
