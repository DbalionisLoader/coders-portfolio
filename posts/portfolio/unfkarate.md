---
title: The University of Liverpool Karate Club Website
name:  UoL Karate Club Website
typeOfWebsite: University Sports Club Website
Role: Designer | Developer
imageUrl: ../images/uolkc-small-wb.webp
imageAlt: A screenshot of a Univisity of Liverpool karate club homepage
mainImageUrl:  ../images/uolkc-main-wb.webp
link: \unfkarate
alabel: Read more University of Liverpool karate website project
websiteLink: https://celadon-selkie-e3f6ba.netlify.app
date: 2024-01-16
tech:
- HTML
- CSS
- 11ty
- Bootstrap
- JavaScript
- jQuery
- Nunjucks
- Git + Github
- Google API
- Figma
shortDesc: The University of Liverpool Karate Club website serves as a central hub for both new and existing members, providing essential session and event information while also enhance the club's visibility to potential new members and sponsors. 
---

<p>In close collaboration with the club's captain and coach, I gathered essential client requirements to influence the website's design and functionality. Utilising Figma, I drafted a responsive design that aligns with modern mobile-first principles, as reflected in the choice of an off-canvas sidebar menu.</p>
<p>The development stack was strategically chosen: Bootstrap for responsive design, 11ty for efficient static site generation, and vanilla JavaScript for interactive elements. Version control was maintained using Git, with code repositories hosted on GitHub. Continuous integration and deployment were implemented via Netlify, ensuring streamlined updates and robust performance. This methodical and collaborative approach ensures the karate club website is both functional and representative of the club's core values.</p>


## Responsive Design: Optimising Across Devices

<p>Recognising the widespread use of mobile devices among students for accessing university-related info, the mobile-first development led to me creating features such as off-canvas navigation for all devices, using responsive cards for the class schedule section to make them stylish and clearly display relevant information. </p>
<p>I also paid extra attention to the karate schedule table to ensure it is easily readable and the user can find the right information at a glance even on the smallest of screens. By making responsiveness a priority, I aimed to meet the needs of modern users, allowing them easy access to important karate class, schedule, and event details, regardless of their device.</p>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
   <div style="flex: 1; text-align: left; margin-right: 10px;">
      <img src="..\images\uolkc-blog-0.75x-wp.webp" alt="Collage of mobile device screenshots displaying various pages of a karate website, showcasing class schedules, events, and homepage hero section." style="max-width: 100%; height: auto;">    
      <i class="text-secondary">Mobile-first approach in action: A collage showcasing a karate website tailored for on-the-go students.</i> 
   </div>
</div>

## Google API - Events List and Contact Form

<p>Developing the event listing section on the front page involved integrating Google API and jQuery to fetch events from the karate club's Google Calendar. This solution not only keeps costs down by avoiding third-party services but also remains unaffected by the annual changes in the karate committee, as it relies on a shared Google account passed down each year.</p>
<p>Furthermore, I set up a similar solution for the contact form, using Google API to send emails directly to the karate club's Google account. I added thorough checks both locally and on the server (Netlify serverless functions) to stop spam. Also, I implemented HTML email templates to make the emails look more professional and easier to read for the recipients, ensuring a smooth communication process.</p>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
   <div style="flex: 1; text-align: left; margin-right: 10px;">
      <img src="..\images\uolkc-blog-2-wp.webp" alt="Collage of desktop screenshots displaying class schedule table and Google API event listing section" style="max-width: 100%; height: auto;">    
      <i class="text-secondary">Two of the most difficult pages to develop - Google API calendar events and tables!</i> 
   </div>
</div>
