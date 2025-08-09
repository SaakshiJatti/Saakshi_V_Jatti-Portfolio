import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  const timelineData = [     
    {
      id: 1,
      year: "2024",
      title: "Full Stack Internship with Scholarship",
      company: "Xcel Corp",
      type: "experience",
      description: "Completed a hands-on internship focused on frontend development. Selected with a 100% merit-based scholarship.",
      icon: "Briefcase",
      achievements: ["Full Scholarship", "Frontend Training", "Hands-on Training"]
    },
    {
      id: 2,
      year: "2024",
      title: "Sign Language Interpreter Project",
      company: "Mini Group Project",
      type: "project",
      description: "Built a real-time sign language interpreter using OpenCV, MediaPipe, and machine learning models. Enabled gesture-to-text translation through webcam input.",
      icon: "Zap",
      achievements: ["OpenCV & ML Integration", "Real-Time Prediction", "Mini Group Project"]
    },
    {
      id: 3,
      year: "2023",
      title: "Advanced CS Coursework",
      company: "University",
      type: "education",
      description: "Diving into Data Structures, Algorithms, and Database Systems.",
      icon: "Code2",
      achievements: ["Algorithm Design Mastery"]
    },
    {
      id: 4,
      year: "2022-2023",
      title: "CS Fundamentals",
      company: "University - First Year",
      type: "education",
      description: "Learned programming basics in Python and Java. Discovered my love for problem-solving through code.",
      icon: "BookOpen",
      achievements: ["Python Basics", "Java Proficiency", "Problem Solving"]
    },
    {
      year: "2020-2022",
      title: "PU Graduation – PCME Stream",
      company: "RV PU College",
      type: "beginning",
      description: "Completed pre-university education in PCME (Physics, Chemistry, Mathematics, Electronics). Gained strong fundamentals in circuits and logic.",
      icon: "School",
      achievements: ["PCME Stream", "Electronics Basics", "Academic Transition to CS"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'experience': return 'text-warning';
      case 'education': return 'text-cyan-400';
      case 'project': return 'text-purple-400';
      case 'beginning': return 'text-green-400';
      default: return 'text-text-secondary';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      case 'experience': return 'bg-warning/10';
      case 'education': return 'bg-cyan-400/10';
      case 'project': return 'bg-purple-400/10';
      case 'beginning': return 'bg-green-400/10';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
        <Icon name="Rocket" size={28} className="text-cyan-400" />
        Learning Timeline
      </h2>
      <div className="relative">
        {/* Cyberpunk Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-cyan-400/50"></div>

        <div className="space-y-8">
          {timelineData?.map((item, index) => (
            <div
              key={item?.id}
              className={`relative flex items-start gap-6 cursor-pointer transition-all duration-300 ${
                activeItem === item?.id ? 'scale-[1.02]' : ''
              }`}
              onClick={() => setActiveItem(activeItem === item?.id ? null : item?.id)}
            >
              {/* Cyberpunk Timeline Dot */}
              <div className={`relative z-10 w-16 h-16 rounded-full ${getTypeBg(item?.type)} flex items-center justify-center border-2 border-border shadow-glow-cyber-multi cyber-glow`}>
                <Icon name={item?.icon} size={20} className={getTypeColor(item?.type)} />
                {/* Pulsing Ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${getTypeColor(item?.type)?.replace('text-', 'border-')}/30 animate-spin-slow`}></div>
              </div>

              {/* Content */}
              <div className="flex-1 glass-cyber p-6 rounded-xl magnetic-hover micro-feedback border-l-4 border-cyan-400/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-body font-semibold text-foreground">
                      {item?.title}
                    </h3>
                    <p className="text-cyan-400 font-caption font-medium">
                      {item?.company}
                    </p>
                  </div>
                  <div className="text-sm font-data text-text-secondary bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                    {item?.year}
                  </div>
                </div>

                <p className="text-text-secondary font-body mb-4">
                  {item?.description}
                </p>

                {/* Achievements */}
                {activeItem === item?.id && (
                  <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="text-sm font-body font-semibold text-foreground flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-cyan-400" />
                      Key Milestones:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item?.achievements?.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-300 px-3 py-1 rounded-full font-caption border border-cyan-400/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expand Indicator */}
                <div className="flex justify-end mt-4">
                  <Icon
                    name={activeItem === item?.id ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-cyan-400 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;