import {test, request, APIRequestContext} from '@playwright/test'

test('request sign up', async ({request}) => {

    const requestUrl: string = 'https://conduit-api.bondaracademy.com/api/users';
    
    const respond = await request.post(requestUrl, {data: {
       
            "user": {
                "email": "tunglampw100@gmail.com",
                "password": "88888888",
                "username": "Tunglam100"
            }
        
    }});

    const statusCode: number = respond.status();

    console.log(`statusCode: ${statusCode}`);
    console.log(await respond.json());
})