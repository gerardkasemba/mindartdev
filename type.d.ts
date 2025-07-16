// type socialIcon = {
//     name: string,
//     icon: React.ElementType,
//     link: string
// }

// type navItem = {
//     name: string,
//     link: string
// }

interface MainContactType {
    id: string;
    email: string;
    message: string;
    name: string;
    phoneNumber: string;
}

interface MainScheduleType {
    id: string;
    email: string;
    meeting_date: string;
    meeting_duration: string;
    meeting_time: string;
    project_details: string;
    project_timeframe: string;
}

interface MainJobType {
    id: string;
    email: string;
    position: string;
    name: string;
    cvPath: string;
}

type PortfolioItem = {
    id: string;
    title: string;
    description: string;
    liveLink: string;
    images: string[];
};
