import lipsum from "./lipsum";

export interface News {
    id: number
    title: string;
    thumb: string;
    slug: string;
    content: string
}

export const newsAll: News[] = [
    {
        id: 1,
        title: 'Obviously Failed',
        thumb:
            'https://img.freepik.com/free-photo/priest-inside-church-building_23-2151103916.jpg',
        slug: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est voluptate.',
        content: lipsum.generateSentences(50)
    },
    {
        id: 2,

        title: 'Obviously Good',
        thumb:
            'https://img.freepik.com/free-photo/people-visiting-praying-church-building_23-2151103926.jpg',
        slug: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores.',
        content: lipsum.generateSentences(50)

    },
    {
        id: 3,

        title: 'Obviously Randomly',
        thumb:
            'https://img.freepik.com/free-photo/people-praying-religions-gathering_23-2151153299.jpg',
        slug: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        content: lipsum.generateSentences(50)

    },
    {
        id: 4,

        title: 'Obviously Confusing',
        thumb:
            'https://img.freepik.com/free-photo/beautiful-church-background_23-2149285697.jpg',
        slug: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        content: lipsum.generateSentences(50)

    },
    {
        id: 5,

        title: 'Obviously Peaceful',
        thumb:
            'https://img.freepik.com/free-photo/people-visiting-praying-church-building_23-2151103926.jpg',
        slug: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est voluptate placeat rerum.',
        content: lipsum.generateSentences(50)

    }
];

export const newsAllPromise = (input: string): Promise<News[]> => {
    const dataTemp = newsAll.filter((data) => data.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()));


    return new Promise((resolve, reject) => {
        if (dataTemp) {
            setTimeout(() => {
                resolve(dataTemp);
            }, 1000)
        } else {
            reject([] as News[]);
        }
    });
}

export const getNewsByIdPromise = (id: number): Promise<News> => {
    const newsDetail = newsAll.filter((data) => data.id === id)

    return new Promise((resolve, reject) => {
        if (newsDetail) {
            resolve(newsDetail[0])
        } else {
            reject()
        }
    })
}