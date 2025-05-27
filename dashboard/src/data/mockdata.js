export const sidebarItems = [
   { label: 'Dashboard', icon: 'Dashboard', active: true },
  { label: 'History', icon: 'History' },
  { label: 'Calendar', icon: 'Calendar' },
  { label: 'Appointment', icon: 'Appointment' },
  { label: 'Statistics', icon: 'Statistics' },
  { label: 'Tools', icon: 'Tools' },
  { label: 'Chat', icon: 'Chat' },
  { label: 'Support', icon: 'Support' },
  { label: 'Settings', icon: 'setting' }
];



export const healthStatusData = [
  { 
    type: ' Lungs', 
    status: 'critical', 
    date: '26 Oct 2021', 
    color: '#ef4444',
    progress: 85,
    icon: '💨'
  },
  { 
    type: 'Teeth', 
    status: 'good', 
    date: '26 Oct 2021', 
    color: '#10b981',
    progress: 30,
    icon: '🦷'
  },
  { 
    type: 'Bone', 
    status: 'warning', 
    date: '26 Oct 2021', 
    color: '#ea9b12',
    progress: 60,
    icon: '🦴'
    
  }
];

export const calendarViewData = [
   { day: 25, appointments: [{ time: '10:00',type:'light-purple' }, { time: '11:00', type: 'light-purple' }, { time: '12:00', type: 'light-purple' }] },
    { day: 26, appointments: [{ time: '08:00', type: 'light-purple' }, { time: '09:00', type: 'blue' }, { time: '10:00', type: 'light-purple' }] },
    { day: 27, appointments: [{ time: '12:00', type: 'light-purple' }, { time: '---', type: 'light-purple' },{ time: '13:00', type: 'light-purple' }] },
    { day: 28, appointments: [{ time: '10:00', type: 'light-purple' }, { time: '11:00', type: 'light-gray' },{ time: '---', type: 'light-purple' }] },
    { day: 29, appointments: [{ time: '---', type: 'light-purple' },{ time: '14:00', type: 'light-purple' }, { time: '16:00', type: 'light-purple' }] },
    { day: 30, appointments: [{ time: '12:00', type: 'light-gray' }, { time: '14:00', type: 'light-purple' }, { time: '15:00', type: 'light-purple' }] },
    { day: 31, appointments: [{ time: '09:00', type: 'light-gray' }, { time: '10:00', type: 'light-purple' }, { time: '11:00', type: 'light-purple' }] }
];

export const upcomingAppointments1 = {
  thursday: [
    { 
      title: 'Health checkup complete', 
      time: '11:00 AM', 
      icon: '💉', 
      bgColor: '#e0e7ff',
      textColor: '#3730a3'
    },
    { 
      title: 'Ophthalmologist', 
      time: '14:00 PM', 
      icon: '👁️', 
      bgColor: '#e0e7ff',
      textColor:' #3730a3'
    }
  ]
  
};

export const upcomingAppointments2={
  saturday: [
    { 
      title: 'Cardiologist', 
      time: '12:00 AM', 
      icon: '❤️', 
      bgColor: '#e0e7ff',
      textColor: '#3730a3'
    },
    { 
      title: 'Neurologist', 
      time: '16:00 PM', 
      icon: '👨‍⚕️', 
      bgColor: '#e0e7ff',
      textColor: '#3730a3'
    }
  ]
}



export const activityFeedData = [
    { day: 'Mon', value: 45, color: '#06b6d4' },
    { day: 'Tues', value: 80, color: '#3b82f6' },
    { day: 'Wed', value: 30, color: '#06b6d4' },
    { day: 'Thurs', value: 100, color: '#3b82f6' },
    { day: 'Fri', value: 90, color: '#06b6d4' },
    { day: 'Sat', value: 65, color: '#3b82f6' },
    { day: 'Sun', value: 40, color: '#06b6d4' }
  ];
