import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Projects',
      value: stats?.totalProjects,
      icon: 'Briefcase',
      color: 'text-accent'
    },
    {
      label: 'UI/UX Designs',
      value: 2,
      icon: 'Palette',
      color: 'text-accent'
    },
    {
      label: 'Machine Learning Projects',
      value: stats?.ml,
      icon: 'BrainCog',
      color: 'text-success'
    },
    {
      label: 'College Year',
      value: stats?.clgSem,
      icon: 'Calendar',
      color: 'text-warning'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems?.map((stat, index) => (
        <div key={index} className="glass rounded-lg p-4 text-center magnetic-hover">
          <div className={`w-10 h-10 rounded-full bg-current/10 flex items-center justify-center mx-auto mb-2 ${stat?.color}`}>
            <Icon name={stat?.icon} size={18} className={stat?.color} />
          </div>
          <div className="text-2xl font-heading font-bold text-foreground mb-1">
            {stat?.value}
          </div>
          <div className="text-xs font-caption text-text-secondary">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;