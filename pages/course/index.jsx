import React from 'react'
import book from "../../data/list.json";
import Card from "../../components/Card/index";
import CourseStyle from "./style";
import Link from 'next/link'

const index = () => {
    
  return (
    <CourseStyle className="course-style">
        <div className='course-container max-w-screen-2xl container mx-auto'>
        <div className="content-section">
            <h1>We are delighted to have you here !</h1>
            <p>map() function in Next.js, you typically do this inside a React component. Here's a simple example to guide you through the process:</p>
            <Link href="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
          </Link>
        </div>
        <div className="card-section mt-4">
          <div className="mt-12 card-wrapper grid grid-cols-1 md:grid-cols-4 gap-2">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        </div>
        </div>
    </CourseStyle>
  )
}

export default index
