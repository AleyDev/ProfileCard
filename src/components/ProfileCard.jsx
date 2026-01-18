import React, { useEffect, useRef, useState } from 'react'

const ProfileCard = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const socialRef = useRef(null)
  const buttonRef = useRef(null)

  const titleText = 'Backend Developer'
  const typingSpeed = 100

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
    <div className={`fixed inset-0 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-black to-white'} relative overflow-hidden`}>
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

      <div className="w-full h-full flex items-center justify-center p-4">
        <div 
          ref={cardRef}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-[0px_8px_60px_-10px_rgba(13,28,39,0.6)] w-[380px] h-[450px] relative pt-14`}
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s ease-out',
          }}
        >
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <span className="text-xl">☀️</span>
          ) : (
            <span className="text-xl">🌙</span>
          )}
        </button>

        {/* Profile Image */}
        <div className="flex justify-center -mt-[60px] relative z-10">
          <div 
            className={`w-[120px] h-[120px] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer group`}
            style={{
              boxShadow: darkMode 
                ? '0px 5px 50px 0px rgba(55, 65, 81, 0.5), 0px 0px 0px 6px #374151' 
                : '0px 5px 50px 0px rgba(248, 248, 255, 0.8), 0px 0px 0px 6px #f5f5f5'
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
        <div className="mt-[-30px] text-center px-4 pb-5">
          <h2 
            ref={nameRef}
            className={`text-lg font-bold ${darkMode ? 'text-purple-400' : 'text-[#6944ff]'} mb-1 mt-12 transition-colors duration-300`}
          >
            Aleyna Kaya
          </h2>
          <p 
            ref={titleRef}
            className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-[#324e63]'} mb-3 transition-colors duration-300 min-h-[20px]`}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Social Links */}
          <div 
            ref={socialRef}
            className="flex justify-center items-center flex-wrap mt-3 gap-2.5"
          >
            <a
              href="https://github.com/aleydev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#333333] to-[#626b73] shadow-[0px_7px_30px_rgba(63,65,67,0.6)] transition-all duration-300 hover:scale-125 hover:rotate-6"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_aaleynakaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[#405de6] via-[#5851db] via-[#833ab4] via-[#c13584] via-[#e1306c] to-[#fd1d1d] shadow-[0px_4px_30px_rgba(120,64,190,0.6)] transition-all duration-300 hover:scale-125 hover:-rotate-6"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://medium.com/@aleynakayaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#000000] to-[#191919] shadow-[0px_7px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-125 hover:rotate-6"
              aria-label="Medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-2.5 mt-5 flex-wrap">
            <a 
              ref={buttonRef}
              href="mailto:devaleykaya@gmail.com"
              className="bg-gradient-to-r from-[#1da1f2] to-[#0e71c8] text-white font-bold text-xs px-5 py-2 rounded-full min-w-[140px] shadow-[0px_4px_30px_rgba(19,127,212,0.4)] transition-all duration-300 hover:shadow-[0px_7px_30px_rgba(19,127,212,0.75)] hover:-translate-y-1 hover:scale-105 cursor-pointer inline-block text-center"
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
              className={`${darkMode ? 'bg-gray-700' : 'bg-gray-600'} w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-125 hover:rotate-6`}
              title="CV İndir"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
