
tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
            container: '1320px',
            bannerContainer: '950px',
          },

        colors: {
          button: '#6A4DF4',
          black: '#000000',
          success: '#E0FFF9',
          overlayBanner: 'rgba(0, 0, 0, 0.634)',
          boxShadow: 'rgba(0, 0, 0, 0.955)',
          card: '#edececf4',
          background: '#F3F3F3',

        },

        fontFamily: {
          
         inter: ["Inter"]
        },

        backgroundImage: {
          
          bannerImage: "url('./images/banner.png')",
        }
      }
    }
  }