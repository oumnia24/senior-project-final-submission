import { getDatabase, ref, push, set } from "firebase/database";
import {app} from '../config';

// Create a new post reference with an auto-generated id
const db = getFirestore(app);
const postListRef = ref(db, 'posts');
const newPostRef = push(postListRef);
set(newPostRef, {
    class: "TASP104"
});
