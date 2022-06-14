import view from '../utils/view.js';
import Story from '../Components/Story.js';

export default async function Stories(path) {

  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `<div>
    ${hasStories ? stories.map((story, i) => Story({...story, index: i + 1})).join('') : 'No stories'}
  </div>`;  
}

async function getStories(path) {
  if(path === '/') path = '/news'
  if(path === '/new') path = '/newest'

  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`)

  return response.json()

}