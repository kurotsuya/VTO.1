import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    // This will scroll to the top when the About page is loaded
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="about">
      <div className="about-header">
        <h1>About Pixel-Try</h1>
        <p>Welcome to Pixel-Try, the future of online shopping where you can try before you buy using augmented reality!</p>
      </div>
      
      <div className="about-content">
        <h2>Our Vision</h2>
        <p>Pixel-Try was founded with a single vision in mind: to revolutionize the online shopping experience by allowing customers to try on products virtually, without leaving their homes. We understand how difficult it is to purchase clothes, accessories, or even furniture online when you can’t physically see or touch the product. With our state-of-the-art augmented reality (AR) technology, you can try products on virtually and experience them in a way that traditional online shopping simply can't offer.</p>

        <h2>Our Story</h2>
        <p>The idea behind Pixel-Try originated when a group of tech enthusiasts and fashion lovers realized the struggles people face when shopping online. We began developing a virtual try-on platform with one goal in mind: to help customers make better purchase decisions and feel more confident in their online shopping choices. Today, after years of development and fine-tuning, we’re proud to offer a seamless AR-powered shopping experience for a wide range of products.</p>

        <h2>What We Offer</h2>
        <p>Pixel-Try offers a wide selection of products, from trendy clothing and accessories to home decor and cutting-edge gadgets. Our platform provides users with the ability to virtually try on anything from shoes to sunglasses to makeup, and even large furniture items. Imagine testing a sofa in your living room, trying on the perfect jacket, or picking the right pair of shoes—all through the power of augmented reality!</p>

        <h2>How It Works</h2>
        <p>Our virtual try-on system uses advanced AR technology to superimpose products onto your live image. By using your device’s camera, you can see how the product will look on you or in your space in real time. The AR system tracks your movements, adjusts the fit, and offers an accurate representation of how the product will appear in your environment.</p>
        
        <h3>Step-by-Step: Using Pixel-Try</h3>
        <ol>
          <li><strong>Select Your Product:</strong> Browse through our wide selection of products, and choose the one you want to try on.</li>
          <li><strong>Activate AR:</strong> Click on the “Try It On” button, and our AR tool will automatically load using your device’s camera.</li>
          <li><strong>Position Yourself:</strong> Stand in front of your camera, ensuring that you have enough space for the product to be placed accurately.</li>
          <li><strong>Adjust & Try:</strong> Use the on-screen controls to adjust the size, color, and position of the product. You can even rotate the item to get a better view!</li>
          <li><strong>Make Your Purchase:</strong> Once you're satisfied with how it looks, add the item to your cart and proceed with the purchase. If you need to change the size or color, you can easily go back and adjust it.</li>
        </ol>

        <h2>Why Choose Us?</h2>
        <p>At Pixel-Try, we believe that shopping should be an experience, not just a transaction. We are committed to making sure our customers are satisfied, and we offer several unique features that set us apart from other e-commerce platforms:</p>
        <ul>
          <li><strong>Real-Time AR Experience:</strong> Unlike traditional images or videos, our AR feature allows you to see the products interact with your real-time environment, helping you make more informed decisions.</li>
          <li><strong>Instant Feedback:</strong> Need a second opinion? Our app gives you the option to share your virtual try-on with friends and family to get their thoughts before making a purchase.</li>
          <li><strong>Wide Range of Products:</strong> From fashion to home decor, our platform offers everything you need to refresh your wardrobe or home. No matter your style, we have something for you.</li>
          <li><strong>Customer Satisfaction:</strong> We provide easy returns, exchanges, and support to ensure that you’re completely satisfied with your purchase.</li>
        </ul>

        <h2>Our Commitment to Technology</h2>
        <p>We know that staying on the cutting edge of technology is vital to providing the best shopping experience. That’s why we continuously invest in improving our augmented reality technology. Our team of engineers works tirelessly to enhance the precision of the AR experience, ensuring that our customers can try on products with ease and accuracy.</p>

        <h3>Future of Shopping with AR</h3>
        <p>Pixel-Try is just the beginning of the future of shopping. As AR technology advances, we aim to incorporate even more interactive and personalized features. We're working on integrating AI-driven recommendations, so the more you shop, the better our system gets at suggesting the perfect items for you. Additionally, we plan to launch a virtual shopping assistant to help guide you through your shopping journey, making it even more seamless.</p>

        <h2>Customer Testimonials</h2>
        <p>Our users love Pixel-Try, and we’re proud to share some of their experiences:</p>
        <blockquote>
          <p>"I never thought I’d be able to buy clothes online without trying them on. Pixel-Try made it so easy to see how everything looked on me before I bought it!"</p>
          <footer>- Sarah M., Happy Shopper</footer>
        </blockquote>
        <blockquote>
          <p>"Pixel-Try made buying furniture so much easier! I could see how the couch would fit in my living room before I even ordered it." </p>
          <footer>- Mark J., Home Decor Enthusiast</footer>
        </blockquote>
        
        <h2>Join Us On Our Journey</h2>
        <p>We are thrilled to have you join us as we continue to transform the world of online shopping. Our mission is to make shopping a more enjoyable, efficient, and reliable experience, all with the power of augmented reality. Stay tuned for even more exciting updates, features, and new products that will enhance your experience.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions or feedback, feel free to contact us at any time! We love hearing from our customers, and we're always here to help.</p>
        <p>Email: support@pixeltry.com | Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default About;
