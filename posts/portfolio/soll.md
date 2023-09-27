---
title: Dovydas Balionis Soll.uk Ecommerce Project
name: Soll.uk 
typeOfWebsite: Automotive Paint Ecommerce Store
Role: Designer | Developer
imageUrl: ../images/test3.png
imageAlt: A screenshot picture of the Soll.uk automotive paint store
mainImageUrl:  ../images/soll-main-full.png
link: /soll
websiteLink: https://soll.uk/
date: 2023-02-03
tech:
- WordPress
- Elementor
- Crocoblock
- HTML
- CSS
- PHP
shortDesc:  My first full website project – a 600+ product automotive paint WordPress ecommerce website for a local business in Leeds.
---

My first full website project was a 600+ product automotive paint ecommerce website for a local business in Leeds. This project was designed using Adobe XD and implemented through the WordPress CMS. To handle the products, I integrated the WooCommerce plugin. For visual appeal and functionality, I utilized the Elementor and Crocoblock WordPress plugins.

## Design and Responsiveness

The client wanted a bespoke website design. So, I quickly learned how to use Adobe XD software and started creating mockups for the entire website. I drew inspiration from existing automotive parts stores such as Euro Car Parts and Autodoc. I ensured all website pages were responsive for both tablets and mobile phones. However, I encountered a few issues making some page elements responsive. For example, the store filters were not responsive due to Crocoblock's lack of support. I resolved the issue by creating an off-canvas menu with the filters for tablet and mobile views only. This approach, however, impacted performance since I duplicated the filters.

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
<div style="flex: 1; text-align: left; margin-right: 10px;">
   <i>Desktop Filters</i>
   <br>
   <img src="../images/Sollfilters.png" alt="Soll.uk desktop filters screenshot" style="max-width: 100%; height: auto;">   
</div>
<div style="flex: 1; text-align: left; margin-left: 10px;">
   <i>Off-canvas mobile Filters</i>
    <br>
   <img src="../images/Sollfilters-mobile.png" alt="Soll.uk mobile only filters screenshot" style="max-width: 100%; height: auto;">
</div>

</div>



## Challenges of using plugins
Navigating the expansive WordPress ecosystem of plugins was daunting, as I aimed to find the perfect solution for creating a custom ecommerce website. I settled on Astra theme, the Elementor page builder, and Crocoblocks to achieve custom shop listing and filter functionality. Although these tools were mostly effective, they had certain limitations. For instance, they offered limited customization options for the basket overview and checkout pages. As a result, I extensively applied custom CSS to align them with my design, sprinkling in additional tweaks for enhanced mobile responsiveness.<br>
<br>As for the checkout page, the client and I sought a unique appearance and functionality. However, due to past knowledge constraints and time limitations, I had to settle for the prebuilt checkout, achieving most of the desired functionality and checkout experience. I believe that crafting a bespoke checkout plugin will be the way forward to improve this aspect in the future.

## Payment processing and security

Another challenge arose when Stripe paused payments due to concerns about spam and card checking. After diving into research, I learned about card checking and its countermeasures. I promptly implemented the reliable reCAPTCHA to address the issue. Currently, I would also integrate honeypot form fields – two straightforward and effective solutions against card checking bots.

<div style="text-align: left; margin-right: 10px; margin-bottom: 24px">
   <img src="../images/Sollcustomcheckout-medium.png" alt="Soll.uk desktop filters screenshot" style="max-width: 100%; height: auto;">
   <br>
   <i>Custom checkout and reCAPTCHA</i>   
</div>


## Performance issues
This project also shed light on the limitations of WordPress plugins. As 3rd plugins considerably affected website performance due to the excess CSS and JavaScript they added. As a result, optimizing the website was as time-consuming as its initial development. I experimented with caching, blocking and delaying unused CSS and JS files, faster hosting, and image optimization. While some strategies were successful, combining multiple speed enhancement methods led to unexpected website malfunctions. Unfortunately, I couldn't achieve the desired page loading speed. Nonetheless, I'm eager to tackle this challenge again in the future, motivated by my curiosity and the opportunity to apply new skills.

## Extra functionlity

To achieve the desired aesthetics, I added significant custom CSS where Elementor or Crocoblocks fell short. I also integrated a bit of PHP to seamlessly introduce a custom varied product picker on the product page. Impressively, this feature took just an hour from the client's request to delivery.

<div style="text-align: left; margin-right: 10px; margin-bottom: 24px">
   <img src="../images/sollmultiitem-large.png" alt="Soll.uk desktop filters screenshot" style="max-width: 100%; height: auto;">
   <br>
   <i>The 1-hour feature delivery - product variations</i>   
</div>


## Future Enhancements

This is the one website I'd like to redesign in certain sections and transition from using 3rd party plugins to a new tech stack, while retaining the WordPress CMS due to the client's familiarity. The primary objective would be to achieve a completely bespoke website appearance and significantly enhance website performance.

