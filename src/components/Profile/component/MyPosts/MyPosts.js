import React from "react"
import classes from "./MyPosts.module.scss"
import Post from "./Post/Post"

const MyPosts = () => (
    <div className={classes.MyPosts}>
        <h3 className={classes.title}>My posts</h3>
        <div>
            <textarea/>
            <button>Submit pot</button>
        </div>

        <Post messagePost="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Atque consequatur eos harum hic in libero nihil numquam qui?
                        Ad corporis necessitatibus reprehenderit sit vel voluptates
                        voluptatibus? Beatae enim saepe ut!"
              likeCounter="4" />
        <Post messagePost="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Distinctio eos, itaque. Ea."
              likeCounter="8" />
    </div>
)

export default MyPosts
