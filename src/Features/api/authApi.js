import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


export const authApi = createApi({
    reducerPath : 'authApi' ,
    baseQuery : fetchBaseQuery({
        baseUrl : "https://contact-app.mms-it.com/api/v1/"
    }) , 
    tagTypes: ['Auth']  , 
    endpoints :(builder) => ({
        register : builder.mutation({
            query: (newUser) => ({
              url: 'register',
              method: 'POST',
              body: newUser
            }) , 
            invalidatesTags:['Auth']
          })
    })
}); 

export  const { useRegisterMutation  } = authApi 

