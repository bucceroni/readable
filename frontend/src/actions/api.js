import axios from "axios";

const api = "https://api-server-readable.herokuapp.com";

const headers = {
  Accept: "application/json",
  Authorization: "whatever-you-want"
};

class Home {
  //`GET /categories`
  //Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire.
  static async getCategories() {
    const res = await axios.get(`${api}/categories`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data.categories;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`GET /posts`
  //Get all of the posts. Useful for the main page when no category is selected.
  static async getPosts() {
    const res = await axios.get(`${api}/posts`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`GET /:category/posts`
  //Get all of the posts for a particular category.
  static async getPostsCategory(category) {
    const res = await axios.get(`${api}/${category}/posts`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`POST /posts/:id`
  //Used for voting on a post.
  //**option** - [String]: Either `"upVote"` or `"downVote"`.
  static async postVoteScore(id, vote) {
    const res = await axios.post(
      `${api}/posts/${id}`,
      { option: vote },
      { headers }
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`POST /posts`
  //Add a new post.
  //**id** - UUID should be fine, but any unique id will work
  //**timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like.
  //**title** - [String]
  //**body** - [String]
  //**author** - [String]
  //**category** - Any of the categories listed in `categories.js`. Feel free to extend this list as you desire.
  static async postAddPost(id, timestamp, title, body, author, category) {
    const res = await axios.post(
      `${api}/posts`,
      {
        id,
        timestamp,
        title,
        body,
        author,
        category
      },
      { headers }
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`PUT /posts/:id`
  //Edit the details of an existing post.
  //**title** - [String] 
  //**body** - [String]
  static async putEditPost(id, title, body) {
    const res = await axios.put(`${api}/posts/${id}`,
      {
        title,
        body,
      },
      { headers }
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`DELETE /posts/:id`
  //Sets the deleted flag for a post to 'true'. 
  //Sets the parentDeleted flag for all child comments to 'true'.
  static async deletePost(id) {
    const res = await axios.delete(`${api}/posts/${id}`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`GET /posts/:id`
  //Get the details of a single post.
  static async getDetailsPost(id) {
    const res = await axios.get(`${api}/posts/${id}`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //`GET /posts/:id/comments`
  //Get all the comments for a single post.
  static async getCommentsPost(id) {
    const res = await axios.get(`${api}/posts/${id}`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

}
export default Home;

// | Endpoints       | Usage          | Params         |
// |-----------------|----------------|----------------|
// | `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. **timestamp** - [Timestamp] Get this however you want. **body** - [String] **author** - [String] **parentId** - Should match a post id in the database. |
// | `GET /comments/:id` | Get the details for a single comment. | |
// | `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
// | `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. **body** - [String] |
// | `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |
