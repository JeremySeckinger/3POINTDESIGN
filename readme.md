
# Project:

## 3POINT DESIGN

**Client commissioned portfolio site**

:construction:  Under Construction  :construction:  Current site progress can be [viewed here](https://3pointdesign.net/) 

## Description

This is a portfolio site for a client's concert lighting design company I'm working on. This is the first client site I have hosted on netlify and deployed through GitHub, which has been tremendous. The site uses a mix of Javascript, jQuery, and CSS/SCSS to light it up. My main focus was using images that really popped, and I wanted to provide clean, smooth transitions with a very open flow to the page. The image galleries use the jquery poptrox plugin, which has been fun to integrate with my own retooling of it. Form functionality is handily serviced by netlify, so prospective clients are able to submit a form directly from the site to my client, and they are able to attach files with the message too. 

### Updates

The site has been evolving as the client wishes to add new features. One tricky feature addition was adding two fixed looping background videos. The client wanted to use two alternate looping videos as the background splitting up the site into two distinct sections. The first background video was set as fixed in order to avoid stretching the video and losing quality. To get the second background video in place without stretching was the real test because it spanned sections much larger than itself. There doesn't seem to be a quick, widely adopted option to fix more than one background video--allowing the first background to switch to the second at a certain position (if you have any ideas I'm all ears! Totally accept I could be missing a much easier solution). My first thought was to try sticky positioning, but browser support isn't common enough to justify this new-ish CSS implementation for embedded videos at least. Through google-fu and a bit of testing I found that I could implement a solution using jQuery to alter the DOM SRC of the video on scroll. I used offset().top with a specified range of values to calculate a trigger point that switches the videos when it is scrolled past. The values are attached to a specific ID in order to make it responsive, instead of attached to specific pixel values that jQuery's on scroll object typically uses. It isn't the cleanest solution, but it works well to make the client feature request happen. I may play around with "background-attachment: fixed" for embedded videos when I get more time to revisit this.

### Tasks
- [x] Deploy to netlify via GitHub
- [x] Integrate form functionality
- [ ] Pare down site weight using best practices
      - resize images, remove unnecessary code
- [x] Utilize SEO best practices
- [x] Run accessibility methods (scoring very poorly on lighthouse)
- [x] Optimize for mobile (currently only optimized for desktop with limited media queries)

### Screenshots
(Apologies for the low quality gif's, necessary evil)

**Current Live (Version 3):**


<img src="https://media.giphy.com/media/6YmdDO1wIXJ1Gih9hl/giphy-downsized.gif">



**Previous (Version 2):**

<img src="https://media.giphy.com/media/9veaR1BLlkRBKpXsfG/giphy-downsized.gif">

