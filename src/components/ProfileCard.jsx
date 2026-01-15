import React, { useEffect, useRef, useState } from 'react'

const ProfileCard = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const skillsRef = useRef(null)
  const socialRef = useRef(null)
  const buttonRef = useRef(null)

  const titleText = 'Backend Developer'
  const typingSpeed = 100

  const skills = [
    { 
      name: 'JavaScript', 
      color: 'from-yellow-400 to-yellow-600',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.310-1.001-.735-2.476-.735-2.068.05-3.269 1.279-3.567 2.464-.273 1.02-.16 2.52.956 3.833 1.188 1.108 2.847 1.703 4.577 2.11.72.174 1.395.302 1.955.369.855.13 1.664.113 2.304.067 1.266-.092 2.414-.49 3.253-1.026.81-.505 1.356-1.18 1.653-1.93.292-.726.352-1.463.24-2.21l-.002-.042zm-8.955-7.245h-2.662c0 1.544-.014 3.108-.014 4.672 0 1.68.006 3.354 0 5.026-.005.857.238 1.516 1.063 1.516.847 0 1.218-.6 1.218-1.516l.007-5.026c0-1.564.007-3.128.007-4.672z"/></svg>
    },
    { 
      name: 'Node.js', 
      color: 'from-green-500 to-green-700',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.105-0.116,2.105-0.903V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745,0.95,2.298,2.489,1.342l2.404-1.39c0.111-0.064,0.179-0.189,0.179-0.308v-10.15c0-0.117-0.068-0.222-0.174-0.28 l-8.791-5.072c-0.083-0.049-0.192-0.049-0.275,0L1.555,6.434C1.47,6.483,1.416,6.577,1.416,6.674v10.15 c0,0.097,0.054,0.193,0.139,0.242l8.794,5.082c0.457,0.262,0.953,0.392,1.45,0.392c0.497,0,0.996-0.131,1.453-0.393l8.795-5.082 c0.085-0.049,0.139-0.146,0.139-0.242V6.674c0-0.097-0.054-0.192-0.139-0.242L11.571,1.35c-0.457-0.263-0.951-0.393-1.448-0.393 c-0.497,0-0.995,0.131-1.452,0.393L0.877,6.432C0.39,6.737,0.1,7.26,0.1,7.834v10.15c0,0.575,0.29,1.098,0.777,1.402l8.795,5.082 c0.914,0.529,1.98,0.529,2.894,0l8.794-5.082c0.487-0.304,0.777-0.827,0.777-1.402V7.834c0-0.575-0.29-1.097-0.777-1.402 L12.92,1.35C12.563,1.131,12.282,1.02,11.998,1.02z"/></svg>
    },
    { 
      name: 'React', 
      color: 'from-blue-400 to-blue-600',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/></svg>
    },
    { 
      name: 'Python', 
      color: 'from-blue-500 to-blue-700',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.949S16.405 3 11.936 3C7.362 3 7.647 5.983 7.647 5.983v1.376H5.266S5.052 4.28 8.614 4.28c3.177 0 3.059.01 3.059.01v2.465s-.328-.01-2.432-.01c-2.705 0-3.059 1.012-3.059 2.465v3.483s-.01 2.35 2.432 2.35zm-.01-5.447s.164-1.376 1.376-1.376 1.376 1.376 1.376 1.376-1.376 1.376-1.376 1.376-1.376-1.376-1.376-1.376z"/><path d="M14.328 12.307h-4.328s-2.432-.04-2.432 2.35v3.393s-.369 2.949 2.432 2.949c4.467 0 4.328-2.949 4.328-2.949v-1.376h2.381s.221 1.719-3.177 1.719c-3.177 0-3.059-.01-3.059-.01v-2.465s.328.01 2.432.01c2.705 0 3.059-1.012 3.059-2.465v-3.483s.01-2.35-2.432-2.35zm.01 5.447s-.164 1.376-1.376 1.376-1.376-1.376-1.376-1.376 1.376-1.376 1.376-1.376 1.376 1.376 1.376 1.376z"/></svg>
    },
    { 
      name: 'MongoDB', 
      color: 'from-green-600 to-green-800',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 3.682-4.533 10.02 0 7.223 5.083 10.084 5.936 10.51.596.31 1.222.455 1.856.455a6.78 6.78 0 0 0 3.97-1.423c.24-.177.59-.684.59-.684s-.28-2.27-1.092-4.08zm-1.776 2.554c-.28 1.784-1.803 2.716-1.803 2.716l-3.977-2.338s2.155-1.548 1.976-4.048c-.178-2.5 1.9-3.663 2.05-3.868.15-.205.49-.52.49-.52S15.95 6.33 15.417 9.11z"/></svg>
    },
    { 
      name: 'PostgreSQL', 
      color: 'from-blue-600 to-blue-800',
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5597 14.7217c-.3043-1.6957-1.6957-2.6087-1.6957-2.6087.3043-.6087.6087-1.2174.6087-1.8261 0-1.6957-1.2174-3.1304-3.1304-3.1304-.6087 0-1.2174.3043-1.6957.6087-.3043-.3043-.6087-.6087-1.2174-.6087-1.6957 0-3.1304 1.4348-3.1304 3.1304 0 .6087.3043 1.2174.6087 1.8261 0 0-1.3913.913-1.6957 2.6087-.3043 1.6957.3043 3.1304 1.6957 4.5218 1.3913 1.3913 3.1304 2.1739 4.9565 2.1739 1.8261 0 3.5652-.7826 4.9565-2.1739 1.3913-1.3913 2-3.1304 1.6957-4.5218zm-4.1739 4.1739c-.913.913-2.1739 1.3913-3.5652 1.3913-1.3913 0-2.6522-.4783-3.5652-1.3913-.913-.913-1.3913-2.1739-1.2174-3.5652.1739-1.3913 1.2174-2.4348 2.4348-2.4348.3043 0 .6087.1739.913.3043.3043-.3043.6087-.6087 1.2174-.6087 1.2174 0 2.1739.9565 2.1739 2.1739 0 .6087-.3043 1.2174-.6087 1.6957.3043-.0869.6087-.1739.913-.1739 1.2174 0 2.2609 1.0435 2.4348 2.4348.1739 1.3913-.3043 2.6522-1.2174 3.5652z"/></svg>
    },
  ]

  // Typing animation
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < titleText.length) {
        setTypedText(titleText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 15
        const rotateY = (centerX - x) / 15

        setMousePosition({ x: rotateY, y: rotateX })
        cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        cardRef.current.style.transition = 'none'
      }
    }

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transition = 'transform 0.5s ease-out'
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
        setMousePosition({ x: 0, y: 0 })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  useEffect(() => {
    // Kart animasyonu
    if (cardRef.current) {
      cardRef.current.style.opacity = '0'
      cardRef.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        cardRef.current.style.transition = 'all 0.6s ease-out'
        cardRef.current.style.opacity = '1'
        cardRef.current.style.transform = 'translateY(0)'
      }, 100)
    }

    // Profil resmi animasyonu
    if (imageRef.current) {
      imageRef.current.style.opacity = '0'
      setTimeout(() => {
        imageRef.current.style.transition = 'opacity 0.5s ease-out'
        imageRef.current.style.opacity = '1'
      }, 200)
    }

    // İsim animasyonu
    if (nameRef.current) {
      nameRef.current.style.opacity = '0'
      nameRef.current.style.transform = 'translateY(10px)'
      setTimeout(() => {
        nameRef.current.style.transition = 'all 0.5s ease-out'
        nameRef.current.style.opacity = '1'
        nameRef.current.style.transform = 'translateY(0)'
      }, 400)
    }

    // Meslek animasyonu
    if (titleRef.current) {
      titleRef.current.style.opacity = '0'
      titleRef.current.style.transform = 'translateY(10px)'
      setTimeout(() => {
        titleRef.current.style.transition = 'all 0.5s ease-out'
        titleRef.current.style.opacity = '1'
        titleRef.current.style.transform = 'translateY(0)'
      }, 500)
    }

    // Skills animasyonu
    if (skillsRef.current) {
      skillsRef.current.style.opacity = '0'
      setTimeout(() => {
        skillsRef.current.style.transition = 'all 0.5s ease-out'
        skillsRef.current.style.opacity = '1'
      }, 600)
    }

    // Sosyal medya animasyonu
    if (socialRef.current) {
      socialRef.current.style.opacity = '0'
      setTimeout(() => {
        socialRef.current.style.transition = 'all 0.5s ease-out'
        socialRef.current.style.opacity = '1'
      }, 700)
    }

    // Buton animasyonu
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '0'
      buttonRef.current.style.transform = 'translateY(10px)'
      setTimeout(() => {
        buttonRef.current.style.transition = 'all 0.5s ease-out'
        buttonRef.current.style.opacity = '1'
        buttonRef.current.style.transform = 'translateY(0)'
      }, 800)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-black to-white'} relative overflow-hidden`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${darkMode ? 'bg-purple-500' : 'bg-white'} rounded-full opacity-20 animate-float`}
            style={{
              width: Math.random() * 100 + 20 + 'px',
              height: Math.random() * 100 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>

      <div 
        ref={cardRef}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-[0px_8px_60px_-10px_rgba(13,28,39,0.6)] w-full max-w-2xl mx-auto relative pt-20`}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s ease-out',
        }}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 w-12 h-12 rounded-full ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <span className="text-2xl">☀️</span>
          ) : (
            <span className="text-2xl">🌙</span>
          )}
        </button>

        {/* Profile Image */}
        <div className="flex justify-center -mt-[75px] relative z-10">
          <div 
            className={`w-[150px] h-[150px] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer group`}
            style={{
              boxShadow: darkMode 
                ? '0px 5px 50px 0px rgba(55, 65, 81, 0.5), 0px 0px 0px 7px #374151' 
                : '0px 5px 50px 0px rgba(248, 248, 255, 0.8), 0px 0px 0px 7px #f5f5f5'
            }}
          >
            <img
              ref={imageRef}
              src="/aleyna_profile_card.jpg"
              alt="Aleyna Kaya"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-[-35px] text-center px-5 pb-10">
          <h2 
            ref={nameRef}
            className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-[#6944ff]'} mb-2 mt-16 transition-colors duration-300`}
          >
            Aleyna Kaya
          </h2>
          <p 
            ref={titleRef}
            className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-[#324e63]'} mb-6 transition-colors duration-300 min-h-[28px]`}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Skills Section */}
          <div ref={skillsRef} className="mb-8">
            <h3 className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-semibold mb-4 transition-colors duration-300`}>
              Teknolojiler
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${skill.color} w-14 h-14 rounded-lg flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-default p-2`}
                  title={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        
          {/* Social Links */}
          <div 
            ref={socialRef}
            className="flex justify-center items-center flex-wrap mt-6 gap-4"
          >
            <a
              href="https://github.com/aleydev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#333333] to-[#626b73] shadow-[0px_7px_30px_rgba(63,65,67,0.6)] transition-all duration-300 hover:scale-125 hover:rotate-6"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_aaleynakaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[#405de6] via-[#5851db] via-[#833ab4] via-[#c13584] via-[#e1306c] to-[#fd1d1d] shadow-[0px_4px_30px_rgba(120,64,190,0.6)] transition-all duration-300 hover:scale-125 hover:-rotate-6"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://medium.com/@aleynakayaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#000000] to-[#191919] shadow-[0px_7px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-125 hover:rotate-6"
              aria-label="Medium"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4 mt-10 flex-wrap">
            <a 
              ref={buttonRef}
              href="mailto:devaleykaya@gmail.com"
              className="bg-gradient-to-r from-[#1da1f2] to-[#0e71c8] text-white font-bold text-lg px-10 py-4 rounded-full min-w-[201px] min-h-[55px] shadow-[0px_4px_30px_rgba(19,127,212,0.4)] transition-all duration-300 hover:shadow-[0px_7px_30px_rgba(19,127,212,0.75)] hover:-translate-y-2 hover:scale-105 cursor-pointer inline-block text-center"
            >
              Mesaj Gönder
            </a>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                // CV indirme işlevi buraya eklenebilir
                alert('CV indirme özelliği yakında eklenecek!')
              }}
              className={`${darkMode ? 'bg-gray-700' : 'bg-gray-600'} w-[55px] h-[55px] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-125 hover:rotate-6`}
              title="CV İndir"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
