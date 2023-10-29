---
title: Dovydas Balionis Developer Blog 
name:  My Dev Blog
typeOfWebsite: Personal Blog
Role: Designer | Developer
imageUrl: ../images/blog-thump-shadow-webp.webp
imageAlt: A picture of my blog homepage 
mainImageUrl:  ../images/blog-mock-large-shadow-webp.webp
link: /myblog
websiteLink: https://dblog.co.uk/
date: 2023-07-05    
tech:
- HTML 
- CSS
- JavaScript
- 11ty
- Bootstrap
- Nunjucks
- Git + Github
shortDesc:  My first 11ty site is a personal developer blog. The goal of the blog is to share solutions and code snippets for challenging coding problems I found difficult or interesting. It's also great for documentation practice!
---
I initiated my personal blog to showcase the robustness and adaptability of 11ty, integrating JAMstack techniques I picked up during the Coders Guild bootcamp to ensure superior performance, security, and scalability. Taking full advantage of 11ty's advanced templating features, the blog serves as a platform to share insights, solutions, and coding techniques addressing complex web development issues I've faced. With the integration of Bootstrap, the blog ensures a visually appealing and responsive interface. This initiative stands out as my inaugural experience using GitHub for version control and setting up CI/CD hosting on Netlify.

## 11ty and templating

For this project, I had to learn how to set up an 11ty project. I struggled with correctly setting up the folder structure, learning how to utilise functions, passthrough file copies, and returns found in the eleventy.js file. I also learned the basics of Nunjucks to leverage 11ty's templating and auto-generate webpages from .md post files. Beyond the post for-loop, I delved into pagination to give my blog the capability to showcase the newest post in the hero section and display the next three posts as Bootstrap cards. Another highlight is the utilisation of 11ty layout chaining and "wrap" to construct the website in sections, reducing repetitive HTML. I did find it difficult at times to research solutions to templating errors; many documentations use different templating languages, or they all template in slightly varied manners, leading to confusion at times.

## Content Strategy

While learning and practising so many web development tools, I'm a bit* behind on posting on the blog. However, at time of writing, I have released my first tutorial style blog post about HTML email templates. My initial plan to catch up is to make short posts about a few cool 11ty and bootstrap tricks I've learned. Afterwards, I intend to jot down interesting things I've learned or problems I've solved and want to share. I'll then dedicate one day a week, or every other week, to converting these notes into a blog post. 

Who knew documenting code could be so much fun!


## Future Features

The first feature I intend to implement is basic SEO (meta titles, descriptions, image alts) and Google Analytics, so I can gauge the popularity of my blog or the unpopularity. The second feature is the addition of tags to help categorise blog posts and facilitate easier searches for specific topics. For the third feature, I aim to learn how to incorporate a sophisticated code syntax highlighter to make any shared code more readable and visually appealing. Another feature is the post archive, which will allow for browsing older blog posts. Once I have enough posts to be worth archiving!
