import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hello mazafaka!', likesCount: 2},
        {id: 2, message: 'Yooo maan wasssap maaaan', likesCount: 23}
    ]
};

test('length of posts should be 3', () => {
    // 1. test data
    let action = addPostActionCreator("it-kama")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be "it-kama"', () => {
    // 1. test data
    let action = addPostActionCreator("it-kama")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe("it-kama");
});

test('after deleting length of posts should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length should NOT be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

