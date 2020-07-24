import { IPost } from '../utils/types/Posts';


export default class DateTimeService {

    private static _instance: DateTimeService | null = null;

    static get instance(): DateTimeService {
        if (!DateTimeService._instance) {
            DateTimeService._instance = new DateTimeService();
        }
        return DateTimeService._instance;
    }


    public sortPosts = (posts: any[]): IPost[] => {
        return posts
            .map((item: IPost) => {return { ...item, createdAt: new Date(item.createdAt) } as IPost;})
            .sort((a: IPost, b: IPost) => b.createdAt.getTime() - a.createdAt.getTime());
    };

    public timeSince = (date: Date | string) => {
        if (typeof date === "string") date = new Date(date)
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + ' years ago';
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) return interval + ' months ago';
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + ' days ago';
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval + ' hours ago'
        interval = Math.floor(seconds / 60);
        if (interval >= 1) return interval + ' minutes ago';
        return Math.floor(seconds) + ' seconds ago';
    };

}
