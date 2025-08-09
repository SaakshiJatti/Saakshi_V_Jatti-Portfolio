import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      type: 'workshop',
      title: 'Workshop on Arduino',
      organization: 'Garut Aerobotics Club and KSIT IEEE SB',
      year: '2023',
      description: 'Attended the workshop organized by Dept. of Electronics and Communication Engineering, KSIT in association with Garut Aerobotics Club and KSIT IEEE SB.',
      icon: 'FileCode2',
      image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      type: 'academic',
      title: 'Academic Achievement',
      organization: 'VTU',
      year: '2023',
      description: 'Scored 100/100 in Computer-Aided Engineering Drawing(CAED) in the 2nd sem.',
      icon: 'GraduationCap',
      image: 'https://images.unsplash.com/photo-1542216172-f356fdd22653?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      type: 'project',
      title: 'Personal Portfolio Website',
      organization: 'Self-Directed Project',
      year: '2025',
      description: 'Built a responsive portfolio website using React and modern web technologies.',
      icon: 'Monitor',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      type: 'social work',
      title: '5K Marathon',
      organization: 'Dept. of Electronics and Communication Engineering',
      year: '2024',
      description: 'Participated in NISVAARTH-2 5K RUN, a marathon to support cancer awareness and fundraising.',
      icon: 'Award',
      image: 'https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      type: 'training',
      title: 'Communication Skills & Personality Development',
      organization: 'TRANSIT',
      year: '2023',
      description: 'Completed 10 days of training on Communication Skills & Personality Development.',
      icon: 'Handshake',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      type: 'internship',
      title: 'Intern – Xcel Corp',
      organization: 'XCEL Corp & NYINST',
      year: '2024',
      description: 'Completed a hands-on training internship program by XCEL Corp & NYINST with 100% merit-based scholarship.',
      icon: 'BriefcaseBusiness',
      image: 'https://images.unsplash.com/photo-1640163561337-b0d4161f7ce9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 7,
      type: 'course',
      title: 'Python for Data Science NPTEL Course',
      organization: 'NPTEL',
      year: '2025',
      description: 'Successfully completed the online course "Python for Data Science" by NPTEL.',
      icon: 'Code',
      image:'https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      type: 'workshop',
      title: 'AI.NXT AI Summit',
      organization: 'Microsoft Azure',
      year: '2025',
      description: 'Attended "AI.NXT AI Summit” workshop organised by Azure Developer Community in association with Reskill.',
      icon: 'FileCode2',
      image: 'https://plus.unsplash.com/premium_photo-1679547202989-91a385a0de17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 9,
      type: 'workshop',
      title: 'Workshop on Full Stack Development',
      organization: 'Dept. of Computer Science and Design',
      year: '2025',
      description: 'Attended the workshop on "Full Stack Development”.',
      icon: 'FileCode2',
      image: 'https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 10,
      type: 'project',
      title: 'Research Paper Presentation',
      organization: 'ICRIET-2025',
      year: '2025',
      description: 'Presented a Research Paper titled "Gamified Learning for Programming" during ICRIET - 2025.',
      icon: 'Monitor',
      image: 'https://plus.unsplash.com/premium_photo-1682124505661-91acefe2b0c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 11,
      type: 'project',
      title: 'Research Paper Publishing',
      organization: 'International Journal of Creative Research Thoughts',
      year: '2025',
      description: 'Published the paper entitled "GAMIFIED LEARNING FOR PROGRAMMING". Published In IJCRT ( www.ijcrt.org ) & 7.97 Impact Factor by Google Scholar Volume 13 Issue 7 July 2025.',
      icon: 'Monitor',
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'workshop': return 'text-warning';
      case 'academic': return 'text-cyan-400';
      case 'project': return 'text-purple-400';
      case 'social work': return 'text-green-400';
      case 'training': return 'text-yellow-400';
      case 'internship': return 'text-pink-400';
      case 'course': return 'text-blue-400';
      default: return 'text-text-secondary';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      // case 'workshop': return 'bg-warning/10';
      // case 'academic': return 'bg-red-400/10';
      // case 'project': return 'bg-purple-400/10';
      // case 'community': return 'bg-green-400/10';
      // case 'course': return 'bg-blue-400/10';
      // case 'volunteer': return 'bg-pink-400/10';
      default: return 'bg-muted';
    }
  };

  const getTypeBorder = (type) => {
    switch (type) {
      case 'workshop': return 'border-warning/30';
      case 'academic': return 'border-cyan-400/30';
      case 'project': return 'border-purple-400/30';
      case 'social work': return 'border-green-400/30';
      case 'training': return 'border-yellow-400/30';
      case 'internship': return 'border-pink-400/30';
      case 'course': return 'border-blue-400/30';
      default: return 'border-border';
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
        <Icon name="Trophy" size={28} className="text-cyan-400" />
        Achievements & Milestones
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements?.map((achievement) => (
          <div
            key={achievement?.id}
            className={`glass-cyber rounded-xl overflow-hidden magnetic-hover micro-feedback group border-l-4 ${getTypeBorder(achievement?.type)}`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={achievement?.image}
                alt={achievement?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
              
              {/* Type Badge */}
              <div className={`absolute top-4 left-4 ${getTypeBg(achievement?.type)} px-3 py-1 rounded-full flex items-center gap-2 border ${getTypeBorder(achievement?.type)} backdrop-blur-sm`}>
                <Icon name={achievement?.icon} size={14} className={getTypeColor(achievement?.type)} />
                <span className={`text-xs font-caption font-medium ${getTypeColor(achievement?.type)}`}>
                  {achievement?.type?.charAt(0)?.toUpperCase() + achievement?.type?.slice(1)}
                </span>
              </div>

              {/* Year */}
              <div className="absolute top-4 right-4 bg-cyan-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-400/30">
                <span className="text-xs font-data text-black-400">{achievement?.year}</span>
              </div>

              {/* Cyberpunk Corner Effect */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-body font-semibold text-foreground line-clamp-2">
                {achievement?.title}
              </h3>
              
              <p className="text-sm text-cyan-400 font-caption font-medium">
                {achievement?.organization}
              </p>
              
              <p className="text-sm text-text-secondary font-body leading-relaxed line-clamp-3">
                {achievement?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Motivation Section */}
      <div className="glass-cyber p-6 rounded-xl text-center border border-purple-400/30">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon name="Rocket" size={24} className="text-purple-400" />
          <h3 className="text-xl font-body font-semibold text-foreground">
            Just Getting Started
          </h3>
        </div>
        <p className="text-text-secondary font-body max-w-2xl mx-auto">
          These achievements represent the foundation of my journey in tech. While I may not have years of experience, 
          I have the enthusiasm, dedication, and curiosity that drives continuous growth. The best is yet to come!
        </p>
      </div>
    </div>
  );
};

export default Achievements;