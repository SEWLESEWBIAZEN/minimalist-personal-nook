import { getBlogPost } from '@/lib/actions/blogs';
import { BlogProps } from '@/lib/interfaces';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog,setBlog]=useState<BlogProps>(null)

    useEffect(()=>{
        const fetchBlog=async()=>{
            const fetchedBlog=await getBlogPost(slug)
            setBlog(fetchedBlog?.data)
        }
        fetchBlog();
    },[slug])
  return (
    <main className="container-content py-16">Blog Post {slug}</main>
  )
}


  
export default BlogPost;