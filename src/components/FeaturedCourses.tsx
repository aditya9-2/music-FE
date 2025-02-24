"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import data from "@/data/music_courses.json"


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

const FeaturedCourses = () => {

    const featuredCourses = data.courses.filter((course: Course) => course.isFeatured)
    const formattedCourses = featuredCourses.map((course) => ({
        title: course.title,
        description: course.description,
        link: `/courses/${course.slug}`,
        slug: course.slug,
        price: course.price
    }));

    return (
        <div className="px-8 min-h-screen mt-8">

            <div className='text-center'>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 mb-6">
                    FEATURED COURSES
                </h2>
                <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text">
                    Learn with the best
                </p>
            </div>
            <div className="mt-6">
                <HoverEffect items={formattedCourses} />
            </div>

            <div className="flex justify-center mt-6">
                <Link
                    href="/courses"
                    className="px-3 md:px-6 py-2 md:py-3 text-sm md:text-lg md:font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
                >
                    View All Courses
                </Link>
            </div>

        </div>
    )
}

export default FeaturedCourses