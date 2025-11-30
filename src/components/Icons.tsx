import React from 'react';


interface IconProps {
    className?: string;
    size?: number;
    color?: string;
}

const SvgIcon: React.FC<IconProps & { children: React.ReactNode; viewBox?: string }> = ({
    className,
    size = 24,
    color = "currentColor",
    children,
    viewBox = "0 0 24 24"
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
);

// Navigation Icons
export const IconHome: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </SvgIcon>
);

export const IconBook: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </SvgIcon>
);

export const IconSearch: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </SvgIcon>
);

export const IconChart: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </SvgIcon>
);

export const IconBulb: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.9.27-1.85.26-2.83a5.35 5.35 0 1 0-10.7 0c0 .98.09 1.93.26 2.83" />
        <path d="M12 14v-2" />
    </SvgIcon>
);

export const IconTeam: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </SvgIcon>
);

// Research & Nature Icons
export const IconTree: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M12 19v3" />
        <path d="M12 19c-3 0-5.5-2-5.5-5.5S9 9 12 9s5.5 2 5.5 4.5S15 19 12 19z" />
        <path d="M12 9c-2.5 0-4.5-1.5-4.5-4S9.5 2 12 2s4.5 1.5 4.5 3S14.5 9 12 9z" />
        <path d="M19 19c0-2.5-1.5-4.5-4-4.5" />
        <path d="M5 19c0-2.5 1.5-4.5 4-4.5" />
    </SvgIcon>
);

export const IconBird: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M16 7c0-2.5-2-4-4-4s-3.5 2-4 4c0 2.5 2 4 4 4" />
        <path d="M4 15c0-2 2-3 4-3 1.5 0 3 1 3 2s-1 3-3 3c-2 0-3-1-4-2z" />
        <path d="M12 11c2 0 4 1 5 3 1 2 1 4-1 5-2 1-4 1-6 0" />
    </SvgIcon>
);

export const IconScroll: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </SvgIcon>
);

export const IconHouse: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </SvgIcon>
);

export const IconCamera: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </SvgIcon>
);

// Case Analysis Icons
export const IconMountain: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M21 19.5H3l6.5-12.5L14 15l3-5 4 9.5z" />
    </SvgIcon>
);

export const IconFamily: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M12 14c-4 0-7 2-7 6h14c0-4-3-6-7-6z" />
        <circle cx="7" cy="10" r="2" />
        <path d="M7 14c-2 0-3.5 1-3.5 3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M17 14c2 0 3.5 1 3.5 3" />
    </SvgIcon>
);

export const IconMoney: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
    </SvgIcon>
);

export const IconHandshake: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </SvgIcon>
);

export const IconRobot: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
    </SvgIcon>
);

export const IconTools: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </SvgIcon>
);

export const IconGlobe: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </SvgIcon>
);

// Data Analysis Icons
export const IconClipboard: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </SvgIcon>
);

export const IconLeaf: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </SvgIcon>
);

export const IconSmile: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </SvgIcon>
);

// Team Icons
export const IconAvatar: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </SvgIcon>
);

export const IconCrown: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </SvgIcon>
);

export const IconCalendar: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </SvgIcon>
);

export const IconCheck: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <polyline points="20 6 9 17 4 12" />
    </SvgIcon>
);

export const IconThought: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
    </SvgIcon>
);

// Misc
export const IconStar: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </SvgIcon>
);

export const IconArrowRight: React.FC<IconProps> = (props) => (
    <SvgIcon {...props}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </SvgIcon>
);
