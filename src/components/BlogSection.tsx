"use client"

import Image from 'next/image';

const blogPosts = [
  { title: 'Boosting Student Mental Health Effectively', date: 'Growth, Feb 15 2023', image: '/images/blog-1.jpg' },
  { title: 'Strategies for Educator Mental Resilience', date: 'Growth, Feb 15 2023', image: '/images/blog-2.jpg' },
  { title: 'Parental Role in Mental Health', date: 'Growth, Feb 15 2023', image: '/images/blog-3.jpg' },
  { title: 'Innovative Mental Health Programs for Schools', date: 'Growth, Feb 15 2023', image: '/images/blog-4.jpg' },
  { title: 'Steps to Handle Student Stress', date: 'Growth, Feb 15 2023', image: '/images/blog-5.jpg' },
  { title: 'Importance of Creative Therapies in Schools', date: 'Growth, Feb 15 2023', image: '/images/blog-6.jpg' },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Our Insightful Blog Section</h2>
        <p className="text-center text-gray-600 mb-12 text-sm sm:text-base">Explore diverse mental health topics.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className={`overflow-hidden ${index > 2 ? 'hidden md:block' : ''}`}>
              <div className="rounded-lg overflow-hidden shadow-md mb-4 mx-auto max-w-xs">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="max-w-xs mx-auto">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{post.date}</p>
                <h3 className="text-base sm:text-lg font-semibold leading-tight">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;