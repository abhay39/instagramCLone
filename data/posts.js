import { USERS } from "./User";

export const POSTS=[
    {
        imageUrl:'https://i.imgur.com/H7YejM5.jpg',
        user:USERS[0].user,
        likes:1968,
        caption:'Lets Cut the cake',
        profile:USERS[0].image,
        comments:[
            {
                user:'KL Rahul',
                comment:'Wow! Abhay Amazing.',
            },
            {
                user:'MS Dhoni',
                comment:'Super Cool',
            },
        ],
    },
    {
        imageUrl:'https://i.imgur.com/H7YejM5.jpg',
        user:USERS[1].user,
        likes:1968,
        caption:'Lets Cut the cake',
        profile:USERS[1].image,
        comments:[
            {
                user:'KL Rahul',
                comment:'Wow! Abhay Amazing.',
            },
            {
                user:'MS Dhoni',
                comment:'Super Cool',
            },
        ],
    },   
    
   
      
]