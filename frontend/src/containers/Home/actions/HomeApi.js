import axios from "axios";

const api = "https://api-server-readable.herokuapp.com";

const headers = {
  Accept: "application/json",
  Authorization: "whatever-you-want"
};


class Home {
  static async getCategories() {
    const res = await axios.get(`${api}/categories`, {headers});
    if (res.status >= 200 && res.status <= 207) {
      return res.data.categories;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getPosts() {
    const res = await axios.get(`${api}/posts`, {headers});
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}
export default Home;

// `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
// | `GET /:category/posts` | Get all of the posts for a particular category. |  |
// | `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
// | `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
// | `GET /posts/:id` | Get the details of a single post. | |
// | `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
// | `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
// | `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
// | `GET /posts/:id/comments` | Get all the comments for a single post. | |
// | `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
// | `GET /comments/:id` | Get the details for a single comment. | |
// | `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
// | `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
// | `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |