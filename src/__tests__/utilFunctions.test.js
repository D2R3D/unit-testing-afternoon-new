import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

it('shortenText should not alter string with text over 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

it('shortenText should cut off and add ... if the text is over 100 characters', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

it('should correctly count number of words in a sentence' , () =>{
     expect(wordCount(posts)).toBe(233)
})

it('attachUserName should attach users full name to the post' ,() => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

it('attachUserName should remove any posts that dont have a matching user',() => {
    const newPosts = attachUserName(users, posts)
    const deletedPosts = posts[5]
    expect(newPosts).not.toContainEqual(deletedPosts)
})