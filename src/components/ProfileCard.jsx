import React from 'react'

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all hover:scale-105 hover:shadow-3xl">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-32 relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-8 px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Aleyna Yılmaz</h2>
        <p className="text-indigo-600 font-medium mb-6">Frontend Developer</p>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          React ve modern web teknolojileri ile kullanıcı dostu arayüzler geliştiriyorum. 
          Yeni projeler ve teknolojiler keşfetmeyi seviyorum.
        </p>

        {/* Stats */}
        <div className="flex justify-around border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">127</span>
            <span className="text-xs text-gray-500 mt-1">Projeler</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">1.2K</span>
            <span className="text-xs text-gray-500 mt-1">Takipçiler</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">89</span>
            <span className="text-xs text-gray-500 mt-1">Takip</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-500 text-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-500 text-pink-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Mesaj Gönder
        </button>
      </div>
    </div>
  )
}

export default ProfileCard

