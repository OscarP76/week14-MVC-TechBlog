const addComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const blog_id = location.pathname.split('/')[2]
    alert(comment + blog_id)
    if (comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blog/' + blog_id);
      } else {
        alert(response.statusText);
      }
    }
  };

  const editBlog = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#contents').value.trim();
    const blog_id = location.pathname.split('/')[2]
    alert(comment + blog_id)
    if (comment) {
      const response = await fetch('/api/blogs/' + blog_id, {
        method: 'PUT',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blog/' + blog_id);
      } else {
        alert(response.statusText);
      }
    }
  };


  document
  .querySelector('#addComment')
  .addEventListener('click', addComment);

  document
  .querySelector('#edit-blog')
  .addEventListener('click', editBlog);


