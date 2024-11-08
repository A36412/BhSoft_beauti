/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '.cloud-custom': {
              fontSize: '0.875rem', 
              fontWeight: '400', 
              lineHeight: '1.25rem', 
              letterSpacing: '0.05em', 
              textAlign: 'left', 
              color: '#A0AEC0', 
            },
          },
        },
      },
      colors: {
        pinkCustom: "#FF64AE",
        blackCustom: "#091156",
        greyCustom: "#8B8B8B",
        footerTextCustom: "#D7DBFF",
        textWhite: "#FFFFFF",
        textSologan: "#ABB4FF",
        textDesSologan: "#CACACA",
        colorNavbar: "#414880",
        blink: "#FF64AE",
        greyCollapse: "#F6F7FF",
        blueCustom: "#D8DCFF",
        searchCustom: "#D9DDFE",
        placehoder: "#C5C5C5",
      },
      backgroundImage: {
        "home-slide": "url('assets/images/home1_slide.png')",
        "footer-texture": "url('assets/footer-texture.png')",
        bgservice: "url('assets/images/bgServiceMark.png')",
        bgSologan: "url('assets/images/bgSologanAboutUs.png')",
        bgGallery: "url('assets/images/gallerybg.png')",
        bgTeam: "url('assets/images/bgteam.png')",
        bgInfor: "url('assets/images/backgroundHome2.png')",
        bgElement: "url('assets/images/bgElement.png')",
        waveLine: "url('assets/images/wave_line.png')",
        bgBlog: "url('assets/images/bgBlog.png')",
        fakeVideo: "url('assets/images/FakeVideo.jpg')",
      },
      boxShadow: {
        custom: "-2px 6px 16px -1px #E6E9FD",
        "about-xl": "0px 25px 50px 25px #F6F7FF",
        "blog-Category": "-2px 4px 31px 9px #F2F4FF",
        "card-blog": "10px 13px 80px 14px #F2F4FF",
      },
      screens: {
        tab: "500px",
        ipad: "680px",
        lap: "1024px",
        des: "1280px",
      },
    },
  },
  plugins: [
  ],
};
