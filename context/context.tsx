import { createContext, Dispatch, SetStateAction } from "react";

type StudentInfo = {
    studentInfo: {
        isLoggedIn: boolean;
        id: number | null;
        username: string | null;
    },
    setStudentInfo: Dispatch<SetStateAction<{
        isLoggedIn: boolean;
        id: number | null;
        username: string | null;
    }>>
}

type TrendingNewsInfo = {
    trendingNews: {
        id: number | any;
        title: string | null;
        description: string | null;
        content: string | null;
    },
    setTrendingNews: Dispatch<SetStateAction<{
        id: number | any;
        title: string | null;
        description: string | null;
        content: string | null;
    }>>
}

const StudentContext = createContext<StudentInfo | any>(null);
const TrendingNewsContext = createContext<TrendingNewsInfo | any>(null)
export default StudentContext;
export { StudentInfo, TrendingNewsContext };