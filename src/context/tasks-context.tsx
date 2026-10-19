import { createContext, use } from 'react'

export const PostsContext = createContext(null)

export function usePostsContext() {
    const context = use(PostsContext)
    if (!context) {
        throw new Error('usePostsContext must be defined')
    }
    return context
}
