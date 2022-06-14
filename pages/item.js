import view from '../utils/view.js';
import Story from '../Components/Story.js';
import baseUrl from '../utils/baseUrl.js';
import Comment from '../Components/Comment.js';

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class='error'>Can't find this story</div>`;
  }

  view.innerHTML = `
        <div>
            ${Story(story)}
        </div>

        <hr/>
        ${
          hasComments
            ? story.comments.map((comment) => Comment(comment)).join('')
            : 'No comments'
        }
        `;
}

//get story by id
async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  return response.json();
}
